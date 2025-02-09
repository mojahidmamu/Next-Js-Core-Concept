import { NextResponse } from 'next/server';

export function middleware(request) {
    // ✅ Use headers to get cookies in Edge runtime
    const cookieHeader = request.headers.get('cookie');
    const cookies = new Map(cookieHeader?.split('; ').map(c => c.split('=')));
    const token = cookies.get('next-js-token');

    console.log('Token:', token);

    const dummyUserData = {
        role: 'admin',
        email: 'abdullahallmojahidstudent@gmail.com',
    };

    let isServicePage = request.nextUrl.pathname.startsWith('/services');
    let isAdmin = dummyUserData.role === 'admin';

    if (request.nextUrl.pathname.startsWith('/api')) {
        return NextResponse.next();
    }

    if (isServicePage && !isAdmin) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}
