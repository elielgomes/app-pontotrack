import { user } from "@/services/user";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = cookies().get("app-track");

  if (!token && path.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (token) {
    try {
      const isValidUser = await user.me();

      if (isValidUser && path.startsWith("/login")) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
      }

      if (!isValidUser && path.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
      }
    } catch (error) {
      const response = NextResponse.redirect(new URL("/login", req.nextUrl));
      response.cookies.delete("app-track");
      return response;
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
