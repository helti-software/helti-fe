'use client'

import Card from '@/components/home/card'
import { DEPLOY_URL } from '@/lib/constants'
import { Github, Twitter } from '@/components/shared/icons'
import WebVitals from '@/components/home/web-vitals'
import ComponentGrid from '@/components/home/component-grid'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronRight, Loader2, Mail } from 'lucide-react'
import Link from 'next/link'
import { ComboboxDropdownMenu } from '@/components/ui/test'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import Spinner from '@/components/Spinner'

export default function Home() {
  return (
    <div>
      <div className="bg-yellow-700/40 shadow-md p-6">
        <p className="text-center text-2xl text-black">Buttons</p>
        <div className="animate-fade-up my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
          <Button variant="outline">Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button>
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
      {/* {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={title === 'Beautiful, reusable components' ? <ComponentGrid /> : demo}
            large={large}
          />
        ))} */}
    </div>
  )
}

const chartData = [
  { name: 'Page A', uv: 600, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page C', uv: 900, pv: 1200, amt: 2400 }
]

const features = [
  {
    title: 'Button',
    description: 'different <Button /> variants'
  },
  {
    title: 'Dropdown Menu',
    description: '<ComboboxDropdownMenu />',
    demo: <ComboboxDropdownMenu />
  },
  {
    title: 'Recharts',
    demo: (
      <LineChart
        width={400}
        height={200}
        data={chartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" label="asdasd" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    )
  },
  {
    title: 'Spinners',
    demo: (
      <div>
        <Spinner />
        <Spinner size="md" color="primary" />
        <Spinner size="lg" />
      </div>
    )
  },
  {
    title: 'Logos',
    demo: (
      <div className="flex items-center justify-center space-x-20 bg-gray-300 p-6">
        <Image alt="Auth.js logo" src="/logo_black.svg" width={50} height={50} />
        <Image alt="Prisma logo" src="/logo_white.svg" width={50} height={50} />
      </div>
    )
  },
  {
    title: 'Hooks, utilities, and more',
    description: 'Precedent offers a collection of hooks, utilities, and `@vercel/og`',
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">useIntersectionObserver</span>
        <span className="font-mono font-semibold">useLocalStorage</span>
        <span className="font-mono font-semibold">useScroll</span>
        <span className="font-mono font-semibold">nFormatter</span>
        <span className="font-mono font-semibold">capitalize</span>
        <span className="font-mono font-semibold">truncate</span>
      </div>
    )
  }
]
