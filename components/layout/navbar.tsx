'use client'

import Image from 'next/image'
import Link from 'next/link'
import useScroll from '@/lib/hooks/use-scroll'
import Navigation from '../home/navigation'

export default function NavBar() {
  const scrolled = useScroll(50)

  return (
    <>
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled ? 'border-gray-200 border-b bg-white/50 backdrop-blur-xl' : 'bg-white/0'
        } z-[100] transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="font-display text-2xl">
            <Image
              src="/logo_black.svg"
              alt="helti"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            />
          </Link>
          <Navigation />
        </div>
      </div>
    </>
  )
}
