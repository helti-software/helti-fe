'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'
import { useSelectedLayoutSegment } from 'next/navigation'

import 'swiper/css'
import 'swiper/css/pagination'

import HeaderIcon from '@/public/icons/header_content.svg'
import { colorPalette } from '@/app/styles/colors'

const swiperStyles = {
  '--swiper-pagination-color': colorPalette.primary,
  '--swiper-pagination-bullet-inactive-color': colorPalette.primary,
  '--swiper-pagination-bullet-inactive-opacity': '.3',
  '--swiper-pagination-bullet-size': '10px',
  '--swiper-pagination-bullet-horizontal-gap': '5px'
}

const Header = () => {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const showHeader = pathname === '/'

  const t = useTranslations('Header')

  if (!showHeader) return

  return (
    <div className="max-w-[100%] bg-silver pt-16">
      <Swiper
        style={swiperStyles as any}
        modules={[Mousewheel, Pagination]}
        edgeSwipeThreshold={300}
        slideToClickedSlide={true}
        slidesPerView="auto"
        loop={true}
        speed={1000}
        pagination={{ clickable: true }}
        mousewheel={{ forceToAxis: true, thresholdDelta: 15 }}
      >
        {['fitness', 'wellness', 'energize']?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col-reverse md:flex-row items-center justify-center space-x-8 pb-8">
              <div className="w-full text-center md:text-left md:w-1/3">
                <h2 className="my-4 font-inter text-3xl md:text-6xl font-semibold text-darkgray">
                  {t(item + '.title')}
                </h2>
                <p className="text-gray text-sm md:text-md">{t(item + '.description')}</p>
              </div>
              <div className="p-6">
                <Image src={HeaderIcon} alt="hero" width="350" height="350" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Header
