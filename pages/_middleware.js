import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
    // Token exists if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET });
    const { pathname } = req.nextUrl;

    // Allow requests if...
    // 1) It's a request for next-auth session & provider fetching
    // 2) The token exists
    if (pathname.startsWith('/api/auth') || token) {
        return NextResponse.next();
    }

    // Redirect to login page otherwise
    if (!token && pathname !== '/login') {
        return NextResponse.redirect('/login');
    }
}
