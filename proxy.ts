import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALE_COOKIE, Locale, SUPPORTED_LOCALES, isLocale } from "./lib/i18n/config";

function negotiateLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language");

  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(",")
      .map((token) => token.split(";")[0]?.trim())
      .filter(Boolean) as string[];

    for (const language of languages) {
      const normalized = language.toLowerCase();
      const match = SUPPORTED_LOCALES.find(
        (locale) => normalized === locale || normalized.startsWith(`${locale}-`)
      );
      if (match) {
        return match;
      }
    }
  }

  return DEFAULT_LOCALE;
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".") || pathname === "/favicon.ico") {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const localeSegment = segments[1];
  if (isLocale(localeSegment)) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const matchedCookieLocale = cookieLocale && isLocale(cookieLocale) ? (cookieLocale as Locale) : null;
  const locale = matchedCookieLocale ?? negotiateLocale(request);

  const normalizedPath = pathname === "/" ? "" : pathname;
  const url = new URL(`/${locale}${normalizedPath}`, request.url);
  const response = NextResponse.redirect(url);
  response.cookies.set({
    name: LOCALE_COOKIE,
    value: locale,
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next|.*\\..*|api).*)"],
};
