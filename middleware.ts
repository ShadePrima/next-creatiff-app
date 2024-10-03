import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { i18n } from './i18n-config';

function getLocale(request: NextRequest): string {
  const locales: string[] = i18n.locales;
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  console.log('cookieLocale', cookieLocale);

  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }
  return 'es';
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    /\.(.*)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const isLocalized = i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (!isLocalized) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/|_next/).*)'],
};
