import { NextRequest, NextResponse } from "next/server";

function readSession(
  request: NextRequest
): { role: "ADMIN" | "EMPLOYEE" | "MANAGER"; userId: string } | null {
  try {
    const raw = request.cookies.get("im_session")?.value;
    if (!raw) return null;

    const index = raw.lastIndexOf(".");
    if (index < 0) return null;

    const payload = raw.slice(0, index);
    const json = atob(payload);
    const data = JSON.parse(json);

    if (!data || typeof data.role !== "string" || typeof data.userId !== "string") {
      return null;
    }

    return data as { role: "ADMIN" | "EMPLOYEE" | "MANAGER"; userId: string };
  } catch {
    return null;
  }
}

export function proxy(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;
    const session = readSession(request);

    if (!session) {
      if (pathname.startsWith("/dashboard") || pathname === "/change-password") {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      return NextResponse.next();
    }

    if (pathname.startsWith("/dashboard/admin") && session.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard/employee", request.url));
    }

    if (pathname.startsWith("/dashboard/employee") && session.role === "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard/admin", request.url));
    }

    if (pathname === "/change-password" && session.role === "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard/admin", request.url));
    }

    return NextResponse.next();
  } catch {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/change-password"],
};