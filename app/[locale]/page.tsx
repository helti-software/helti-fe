'use client'

import Header from '@/components/layout/header'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import PlansImage from '@/public/icons/plans.svg'
import LandingCard from '@/components/landing-page/LandingCard'

import { MdPeopleOutline } from 'react-icons/md'
import { TbDatabase } from 'react-icons/tb'
import { GoOrganization } from 'react-icons/go'
import PostThumbnail from '@/public/deyvidPost.jpeg'
import Input from '@/components/inputs/Input'
import { useState } from 'react'
import Button from '@/components/inputs/button'
import { fetchPost } from '@/lib/fetch'
import config from '@/lib/config'

const arrowRight = <>&#8594;</>

interface Post {
  title: string
}

export default function Index() {
  const [email, setEmail] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const tLanding = useTranslations('LandingPage')
  const tButton = useTranslations('Button')

  const handleSubscribe = (e: any) => {
    e.preventDefault()
    // @TODO: Handle subscribe
    try {
      setLoading(true)
      fetchPost(`${config.GATEWAY_URL}/email-subscribe`, email)
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false)
    }
    setEmail('')
  }

  const cards = [
    {
      icon: <MdPeopleOutline className="absolute bottom-0 left-0 right-0 top-0 z-30 h-12 w-12 text-primary" />,
      title: tLanding('cards.first.title'),
      description: tLanding('cards.first.description')
    },
    {
      icon: <TbDatabase className="absolute bottom-0 left-0 right-0 top-0 z-30 h-12 w-12 text-primary" />,
      title: tLanding('cards.second.title'),
      description: tLanding('cards.second.description')
    },
    {
      icon: <GoOrganization className="absolute bottom-0 left-0 right-0 top-0 z-30 h-12 w-12 text-primary" />,
      title: tLanding('cards.third.title'),
      description: tLanding('cards.third.description')
    },
    {
      icon: <MdPeopleOutline className="absolute bottom-0 left-0 right-0 top-0 z-30 h-12 w-12 text-primary" />,
      title: tLanding('cards.fourth.title'),
      description: tLanding('cards.fourth.description')
    },
    {
      icon: <TbDatabase className="absolute bottom-0 left-0 right-0 top-0 z-30 h-12 w-12 text-primary" />,
      title: tLanding('cards.fifth.title'),
      description: tLanding('cards.fifth.description')
    },
    {
      icon: <GoOrganization className="absolute bottom-0 left-0 right-0 top-0 z-30 h-12 w-12 text-primary" />,
      title: tLanding('cards.sixth.title'),
      description: tLanding('cards.sixth.description')
    }
  ]

  const hardcodedPosts: Post[] = [
    {
      title: 'How macronutrients can make us productive and increase our energy?'
    },
    {
      title: 'What exercises can strengthen our back and improve our posture?'
    },
    {
      title: 'Explore our top 5 tips how to lose weight without feeling hungry?'
    }
  ]

  return (
    <div className="text-center">
      <h2 className="my-4 text-4xl font-semibold text-darkgray">{tLanding('title')}</h2>
      <p className="text-gray">{tLanding('description')}</p>

      <div className="animate-fade-up my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {cards.map((card, index) => (
          <LandingCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <div className="flex flex-row items-center">
        <Image src={PlansImage} alt="Plans" />
        <div className="flex flex-col space-y-4 p-4 text-left">
          <h3 className="text-4xl font-semibold text-darkgray">{tLanding('plans.title')}</h3>
          <p className="text-gray">{tLanding('plans.description')}</p>
          <Button size="lg" className="inline w-fit">
            {tButton('learnMore')}
          </Button>
        </div>
      </div>

      <div className="flex w-full flex-col items-center">
        <h2 className="my-4 text-4xl font-semibold text-darkgray">{tLanding('future.title')}</h2>
        <p className="text-gray">{tLanding('future.description')}</p>
        <div className="my-4 grid w-full grid-cols-3">
          {hardcodedPosts.map((post, index) => (
            <div
              key={index}
              className="group m-6 flex cursor-pointer flex-col space-y-4 rounded-md bg-silver p-6 shadow-md"
            >
              <Image
                className="inline-block overflow-hidden transition-all duration-300 group-hover:scale-105"
                src={PostThumbnail}
                alt=""
              />
              <p className="font-semibold text-gray">{post.title}</p>
              <Button variant="link">
                {tButton('readMore')} {arrowRight}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center text-4xl font-semibold text-dark">
        {tLanding('subscribe')}
          <form className='my-6 flex w-full max-w-sm items-center justify-center space-x-2' onSubmit={handleSubscribe}>
            <Input value={email} onChange={setEmail} type="email" placeholder="Email" />
            <Button loading={loading} onClick={handleSubscribe} type="submit">
              Subscribe
            </Button>
          </form>
      </div>
    </div>
  )
}
