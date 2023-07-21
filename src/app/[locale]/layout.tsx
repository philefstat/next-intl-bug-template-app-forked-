import Link from "next/link"
import { notFound } from "next/navigation"

export default async function LocaleLayout({ children, params }) {
  const locale = params.locale ?? "en"

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound()
  }
  return (
    <html lang={locale}>
      <body>
        {children}
        <div style={{ height: "150vh" }}>Simulate long page content</div>
        <div id="footer">
          <Link href="/en">Switch to English</Link>
          <br />
          <Link href="/fr">Passer au Français</Link>
        </div>
      </body>
    </html>
  )
}
