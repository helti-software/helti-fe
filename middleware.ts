import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'bg'],
 
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/', '/(bg|en)/:path*']
};