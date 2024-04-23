import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware();

//specify protected routes - no routes protected by default anymore
const isProtectedRoute = createRouteMatcher(["/select-org(.*)", "/forum(.*)"]);

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
