import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import LocaleSwitcher from '../layout/LocaleSwitcher'
import { Button } from '@/components/ui/button'

const Navigation = () => {
  const t = useTranslations('Navigation')

  const navLinks = [
    {
      label: t('home'),
      onClick: () => {}
    },
    {
      label: t('service'),
      onClick: () => {}
    },
    {
      label: t('feature'),
      onClick: () => {}
    },
    {
      label: t('product'),
      onClick: () => {}
    },
    {
      label: t('about'),
      onClick: () => {}
    },
    {
      label: t('faq'),
      onClick: () => {}
    }
  ]

  return (
    <div className="flex flex-grow flex-row items-center justify-end space-x-8">
      <ul className="inline">
        {navLinks?.map((link, index) => (
          <button className="header-nav-button active mx-2 p-2" onClick={link.onClick} key={index}>
            <span>{link.label}</span>
          </button>
        ))}
      </ul>
      <LocaleSwitcher />
      <div className="flex flex-row items-center space-x-4">
        <Button variant="link">{t('login')}</Button>
        <span className="rounded-sm bg-primary px-4 py-2 text-white">{t('signup')}</span>
      </div>
    </div>
  )
}

export default Navigation
