import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'

import {i18n} from './i18n-config'

function getLocale(request: NextRequest): string {
  // @ts-ignore
  const locales: string[] = i18n.locales
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  console.log("cookieLocale", cookieLocale)

  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }
  return 'es'
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for admin routes
  if (pathname.startsWith('/admin')) {
    const newPath = pathname.substring(1);

    return NextResponse.redirect(
      new URL(
        `/${newPath}`,
        request.url
      )
    )
  }

  if (pathname.startsWith('/admin')) {
    return NextResponse.rewrite(new URL('/about-2', request.url));
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  matcher: [
    '/((?!api/|_next/).*)',
    '!/favicon.ico',
    '!/robots.txt',
    '!/sitemap.xml',
  ],
}

