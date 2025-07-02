import type { NextRequest } from 'next/server'
import { i18nRouter } from 'next-i18n-router'
import { website } from '@/configs/website'

export async function middleware(request: NextRequest) {
  const response = i18nRouter(request, website.i18n)

  // Clear NEXT_LOCALE cookie
  if (response) {
    response.cookies.delete('NEXT_LOCALE')
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon|static|robots|sitemap|manifest.*).*)',
  ],
}