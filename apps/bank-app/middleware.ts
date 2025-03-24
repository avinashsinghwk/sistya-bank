import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const authRoutes = ["/login", "/register", "/forgotpassword"];
  const { pathname } = request.nextUrl;
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (authRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL("/home", request.url));
  }
  if (!authRoutes.includes(pathname) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/forgotpassword",
    "/home/:path*",
    "/account/:path*",
    "/transactions/:path*",
  ],
};
