import { promises as fs } from "fs"
import path from "path"

export interface TrainingType {
  id: string
  title: string
  description: string
  price: string
  priceNote: string
  buttonText: string
  formValue: string
}

export interface CampPeriod {
  dates: string
  age: string
}

export interface Camp {
  id: string
  title: string
  subtitle: string
  description: string
  details: string[]
  periods: CampPeriod[]
  who: string | null
  photo: string | null
  buttonText: string
  formComment: string
  href: string
}

export interface GalleryItem {
  id: string
  category: string
  alt: string
  src: string | null
  caption: string
  objectPosition?: string
}

export interface InfoBlock {
  id: string
  title: string
  text: string
  image?: string | null
  linkHref?: string
  linkText?: string
  active: boolean
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface Review {
  id: string
  author: string
  rating: number
  text: string
  source: string
  date?: string
  featured?: boolean
}

export interface SiteContent {
  trainingTypes: TrainingType[]
  camps: Camp[]
  galleryItems: GalleryItem[]
  infoBlocks: InfoBlock[]
  faq: FaqItem[]
  reviews: Review[]
}

const DATA_PATH = process.env.SITE_CONTENT_PATH || path.join(process.cwd(), "data", "site-content.json")

export async function getSiteContent(): Promise<SiteContent> {
  const raw = await fs.readFile(DATA_PATH, "utf-8")
  return JSON.parse(raw) as SiteContent
}

export async function saveSiteContent(content: SiteContent): Promise<void> {
  const tmpPath = `${DATA_PATH}.${process.pid}.${Date.now()}.tmp`
  await fs.writeFile(tmpPath, JSON.stringify(content, null, 2), "utf-8")
  await fs.rename(tmpPath, DATA_PATH)
}
