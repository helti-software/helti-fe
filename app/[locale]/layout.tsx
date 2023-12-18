import { notFound } from 'next/navigation'
import './../globals.css'
import { Analytics } from '@vercel/analytics/react'
import cx from 'classnames'
import { sfPro, inter } from './../fonts'
import Nav from '@/components/layout/nav'
import Footer from '@/components/layout/footer'
import { Suspense } from 'react'
import Header from '@/components/layout/header'
import { unstable_setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider, useMessages } from 'next-intl'

const locales = ['en', 'bg']

export const metadata = {
  title: 'Precedent - Building blocks for your Next.js project',
  description:
    'Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.',
  metadataBase: new URL('https://precedent.dev'),
  themeColor: '#FFF'
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default function LocaleLayout({ children, params: { locale } }: any) {
  const messages = useMessages()
  if (!locales.includes(locale as any)) notFound()

  unstable_setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body className={cx(sfPro.variable, inter.variable)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="fixed h-screen w-full" />
          <Suspense fallback="...">
            <Nav />
            <Header />
          </Suspense>
          <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
            {children}
          </main>
          <Footer />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
