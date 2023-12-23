import React from 'react'

interface Props {
  icon: React.ReactNode
  title: string
  description: string
}

const LandingCard: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="m-2 rounded-md p-6 text-center text-dark shadow-md shadow-black/5">
      <div className="relative mx-auto h-16 w-16 self-center p-1">
        <div className="relative h-12 w-12">
          {icon}
          <div className="absolute -bottom-2 -right-2 z-0 h-10 w-10 rounded-md rounded-br-3xl bg-primary/20"></div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-darkgray my-2">{title}</h3>
      <p className="text-gray text-sm">{description}</p>
    </div>
  )
}

export default LandingCard
