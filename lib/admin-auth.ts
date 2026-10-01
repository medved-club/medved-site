import { promises as fs } from "fs"
import path from "path"
import crypto from "crypto"

export interface AdminUser {
  username: string
  name: string
  salt: string
  hash: string
}

const USERS_PATH = process.env.ADMIN_USERS_PATH || path.join(process.cwd(), "data", "admin-users.json")
const SESSION_COOKIE = "medved_admin"
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000 // 30 дней

function getSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret) throw new Error("ADMIN_SESSION_SECRET не задан")
  return secret
}

export function hashPassword(password: string, salt = crypto.randomBytes(16).toString("hex")): { salt: string; hash: string } {
  const hash = crypto.scryptSync(password, salt, 64).toString("hex")
  return { salt, hash }
}

async function readUsers(): Promise<AdminUser[]> {
  const raw = await fs.readFile(USERS_PATH, "utf-8")
  return JSON.parse(raw) as AdminUser[]
}

export async function verifyCredentials(username: string, password: string): Promise<AdminUser | null> {
  const users = await readUsers()
  const user = users.find((u) => u.username === username)
  if (!user) return null
  const check = crypto.scryptSync(password, user.salt, 64).toString("hex")
  const match = crypto.timingSafeEqual(Buffer.from(check, "hex"), Buffer.from(user.hash, "hex"))
  return match ? user : null
}

function sign(value: string): string {
  return crypto.createHmac("sha256", getSessionSecret()).update(value).digest("hex")
}

export function createSessionToken(username: string): string {
  const expires = Date.now() + SESSION_TTL_MS
  const payload = `${username}.${expires}`
  const signature = sign(payload)
  return Buffer.from(`${payload}.${signature}`).toString("base64url")
}

export function verifySessionToken(token: string | undefined): { username: string } | null {
  if (!token) return null
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf-8")
    const [username, expiresStr, signature] = decoded.split(".")
    if (!username || !expiresStr || !signature) return null
    const payload = `${username}.${expiresStr}`
    const expected = sign(payload)
    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null
    if (Date.now() > Number(expiresStr)) return null
    return { username }
  } catch {
    return null
  }
}

export { SESSION_COOKIE }
