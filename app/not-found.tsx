import Link from "next/link"

export default function NotFound() {
  return (
    <html lang="ru">
      <body style={{ margin: 0, background: "#0a0a0a", color: "#ffffff", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "13px", fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
            Клуб тайского бокса «Медведь»
          </p>
          <h1 style={{ fontSize: "96px", fontWeight: 900, color: "#c41e3a", lineHeight: 1, margin: "0 0 16px" }}>
            404
          </h1>
          <h2 style={{ fontSize: "24px", fontWeight: 700, margin: "0 0 12px" }}>
            Страница не найдена
          </h2>
          <p style={{ color: "#888", fontSize: "15px", maxWidth: "400px", lineHeight: 1.6, margin: "0 0 40px" }}>
            Возможно, страница была удалена или вы перешли по неверной ссылке.
          </p>
          <Link
            href="/"
            style={{ display: "inline-block", padding: "14px 32px", background: "#c41e3a", color: "#fff", textDecoration: "none", borderRadius: "12px", fontWeight: 700, fontSize: "15px" }}
          >
            На главную
          </Link>
        </div>
      </body>
    </html>
  )
}
