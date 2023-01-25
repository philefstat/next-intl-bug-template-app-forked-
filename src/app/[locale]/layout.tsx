import { getTranslator } from "next-intl/server";
import Link from "next/link"
import { notFound } from "next/navigation";

export default async function LocaleLayout({ children, params }) {
  const locale = params.locale ?? 'en'
  const t = await getTranslator(locale)
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
          {children}
          <div style={{"height": "150vh"}}>Simulate long page content</div>
          <div id="footer">
          {/* <Link href="/en" locale="en">Switch to English</Link> */}
          <br/>
            <Link href={"/fr"} key={'/fr'} locale={"fr"}>Passer au Français</Link>
          </div>
      </body>
    </html>
  );
}
