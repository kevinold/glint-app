import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const referer = request.headers.get("referer");
  let params = "";

  // Serve root route (/) for unprotected content
  if (request.nextUrl.pathname === "/") {
    return NextResponse.next();
  }

  if (referer) {
    const url = new URL(referer);
    params = url.searchParams.toString();
  }

  const cookies = request.cookies.getAll();
  const cognitoCookies = cookies.filter((cookie) => {
    const isCognitoCookie = cookie.name.startsWith(
      "CognitoIdentityServiceProvider"
    );
    const cookieHasValueProp = cookie.hasOwnProperty("value");
    const cookieIsNotEmpty =
      typeof cookie.value !== "string" || cookie.value.trim() !== "";
    return isCognitoCookie && cookieHasValueProp && cookieIsNotEmpty;
  });

  if (!cognitoCookies.length) {
    return NextResponse.redirect(new URL(`/login?${params}`, request.url));
  }
}

export const config = {
  matcher: ["/((?!login|api|_next/static|_next/image|favicon.ico).*)"],
};
