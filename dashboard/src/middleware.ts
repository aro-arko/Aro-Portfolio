import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";
import { cookies } from "next/headers";

const authRoutes = ["/login", "/register"];

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfo = await getCurrentUser();

  // Redirect unauthenticated users to login
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`http://localhost:3000/login?redirect=${pathname}`, request.url)
      );
    }
  }

  // Restrict access to all routes for non-'arko' roles
  if (userInfo.role !== "arko") {
    (await cookies()).delete("accessToken");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/:page"],
};
