import { NextResponse } from 'next/server';
import { parseCookies } from 'nookies';
import type { NextRequest } from 'next/server';
import { isTokenExpired } from '@/app/lib/tokenUtils';

export async function middleware(request: NextRequest) {
    const cookies = parseCookies({ req: request })
    const token = cookies.access_token;

    if (!token || isTokenExpired(token)) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/courses/:path*', '/modules/:path*', '/quizzes/:path*']
};