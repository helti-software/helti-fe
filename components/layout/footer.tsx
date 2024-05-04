import HeltiWhiteLogo from '@/public/logo_white.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import SocialLink from '../landing-page/SocialLink'

interface FooterNavigation {
  title: string
  href: string
}

interface FooterSocials {
  socialMedia: string
  profileName: string
}

export default function Footer() {
  const t = useTranslations('Footer')
  const year = new Date().getFullYear()

  const companyNavigation: FooterNavigation[] = [
    {
      title: t('Company.aboutUs'),
      href: '/about-us'
    },
    {
      title: t('Company.blog'),
      href: '/blog'
    },
    {
      title: t('Company.contactUs'),
      href: '/contact-us'
    },
    {
      title: t('Company.pricing'),
      href: '/pricing'
    },
    {
      title: t('Company.testimonials'),
      href: '/testimonials'
    }
  ]

  const supportNavigation: FooterNavigation[] = [
    {
      title: t('Support.helpCenter'),
      href: '/help-center'
    },
    {
      title: t('Support.termsOfService'),
      href: '/terms-of-service'
    },
    {
      title: t('Support.legal'),
      href: '/legal'
    },
    {
      title: t('Support.privacyPolicy'),
      href: '/privacy-policy'
    },
    {
      title: t('Support.status'),
      href: '/status'
    }
  ]

  const socials: FooterSocials[] = [
    {
      socialMedia: 'Facebook',
      profileName: 'https://www.facebook.com/helti'
    },
    {
      socialMedia: 'Instagram',
      profileName: 'https://www.instagram.com/helti'
    },
    {
      socialMedia: 'Twitter',
      profileName: 'https://www.twitter.com/helti'
    }
  ]

  return (
    <div className="flex w-full flex-row items-center justify-between bg-secondary p-6">
      <div className="mx-auto flex w-[90%] flex-row items-center justify-between md:w-[1200px]">
        <div className="flex w-full flex-col items-center space-y-4 md:w-fit md:items-start">
          <Image src={HeltiWhiteLogo} alt="Helti Logo" height={30} width={30} />
          <div className="flex-items flex flex-row space-x-2">
            {socials.map((item, index) => (
              <SocialLink social={index} profileName={item.profileName} key={index} />
            ))}
          </div>
          <div className="flex w-full flex-col space-y-1">
            <p className="text-center text-sm font-light text-white md:text-left">
              Copyright © {year} Helti ltd. All rights reserved
            </p>
          </div>
        </div>
        <div className=" hidden flex-row space-x-4 md:flex">
          <div className="flex flex-col">
            <span className="my-2 text-white">Company</span>
            {companyNavigation.map((item, index) => (
              <span className="text-sm text-white" key={index}>
                {item.title}
              </span>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="my-2 text-white">Support</span>
            {supportNavigation.map((item, index) => (
              <span className="text-sm text-white" key={index}>
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
