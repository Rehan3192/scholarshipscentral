import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const APEX_HOST = "scholarshipscentral.com";
const CANONICAL_HOST = "www.scholarshipscentral.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? "";
  const forwardedProto = request.headers.get("x-forwarded-proto")?.toLowerCase() ?? "";
  const isHttps = request.nextUrl.protocol === "https:" || forwardedProto === "https";

  const isKnownHost = host === APEX_HOST || host === CANONICAL_HOST;
  if (!isKnownHost) return NextResponse.next();

  const shouldRedirectToHttps = !isHttps;
  const shouldRedirectToCanonicalHost = host === APEX_HOST;
  if (!shouldRedirectToHttps && !shouldRedirectToCanonicalHost) {
    return NextResponse.next();
  }

  const redirectUrl = new URL(request.url);
  redirectUrl.protocol = "https:";
  redirectUrl.hostname = CANONICAL_HOST;
  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
