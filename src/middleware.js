import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('refreshToken');
  const userType = request.cookies.get('user_type');

  if (token && userType?.value === 'Teacher') {
    return NextResponse.next(); // Allow the request to proceed
  } else if (token && userType?.value === 'Student') {
    return NextResponse.next();
  } else{
    return NextResponse.redirect(new URL('/login', request.url)); // Redirect to /view-profile
  }

 

 
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/courses/:path*', '/instructor/:path*', '/view-profile/:path*', '/listing/:path*'],
};
