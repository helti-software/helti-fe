import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

import HeaderIcon from '@/public/icons/header_content.svg'

const Header = () => {
  const t = useTranslations('Header')

  return (
    <div className="flex min-h-[600px] flex-row items-center justify-center bg-silver pt-16">
      <div>
        <h2 className="font-bold">{t('title')}</h2>
        <p>{t('description')}</p>
      </div>
      <div className="p-6">
        <Image src={HeaderIcon} alt="hero" width="350" height="350" />
      </div>
    </div>
  )
}

export default Header
