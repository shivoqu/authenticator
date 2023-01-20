import { NextRequest, NextResponse } from "next/server";
import { protectedRoutes, authRoutes } from "./lib/routes";
export function middleware(req: NextRequest) {
  const user = req.cookies.get("jwtAuth");

  if (protectedRoutes.includes(req.nextUrl.pathname) && !user) {
    console.log(req.nextUrl.pathname);
    console.log(req.nextUrl);
    console.log(req.url);

    
    req.cookies.delete("jwtAuth");
    const res = NextResponse.redirect(new URL(req.nextUrl.pathname + "/login", req.url));
    res.cookies.delete("jwtAuth");

    return res;
  }

  if (authRoutes.includes(req.nextUrl.pathname) && user) {
    return NextResponse.redirect(new URL("/jwt", req.url));
  }
}
