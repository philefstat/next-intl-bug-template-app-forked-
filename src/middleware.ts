import createMiddleware from "next-intl/middleware"
import type { NextRequest, NextResponse } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(`--- Start Middleware ---
    [accept-language header]: ${request.headers.get("accept-language")}
    [before next-intl middleware locale cookie]: ${
      request.cookies.get("NEXT_LOCALE")?.value
    }`)

  const response: NextResponse = createMiddleware({
    // A list of all locales that are supported
    locales: ["en", "fr"],

    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: "en",
  })(request)

  console.log(
    `[after intl middleware set-cookie response header]: ${response.headers.get(
      "set-cookie"
    )}
--- End Middleware ---
    `
  )

  return response
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|icon|.*\\..*).*)"],
}
