import { user } from "@/services/user";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { routesMap } from "@/constants/routes-map";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = cookies().get("app-track");

  if (!token && path.startsWith(routesMap.dashboard)) {
    return NextResponse.redirect(new URL(routesMap.login, req.nextUrl));
  }

  if (token) {
    try {
      const isValidUser = await user.me();

      if (isValidUser && path.startsWith(routesMap.login)) {
        return NextResponse.redirect(new URL(routesMap.dashboard, req.nextUrl));
      }

      if (!isValidUser && path.startsWith(routesMap.dashboard)) {
        return NextResponse.redirect(new URL(routesMap.login, req.nextUrl));
      }
    } catch (error) {
      const response = NextResponse.redirect(
        new URL(routesMap.login, req.nextUrl)
      );
      response.cookies.delete("app-track");
      return response;
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
