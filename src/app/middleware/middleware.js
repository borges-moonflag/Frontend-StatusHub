import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;

  // Se tentar acessar dashboard sem token, redireciona
  if (req.nextUrl.pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

// Define quais rotas vão passar pelo middleware
export const config = {
  matcher: ["/dashboard/:path*"],
};
