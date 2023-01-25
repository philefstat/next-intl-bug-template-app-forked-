import createMiddleware from "next-intl/middleware";
import type { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("accept-language", request.headers.get("accept-language"));

  console.log(
    "before intl middleware cookie",
    request.cookies.get("NEXT_LOCALE")?.value
  );
  const response: NextResponse = createMiddleware({
    // A list of all locales that are supported
    locales: ["en", "fr"],

    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: "en",
  })(request);

  console.log(
    "after intl middleware cookie",
    response.headers.get("set-cookie")
  );

  return response;
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|icon|.*\\..*).*)"],
};
