import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware gfdg");

  //redirect to root page.
  // return NextResponse.redirect(new URL("/register", request.url));
}

// export const config = {
//   matcher: ["/Home/:path*"],
// };
