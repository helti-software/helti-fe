import React from 'react'

import { IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'
import { BsTwitterX } from 'react-icons/bs'

const iconSize = 40

enum Socials {
  Instagram,
  Facebook,
  X
}

interface Props {
  social: Socials
  profileName: string
  iconClassName?: string
}

const SocialLink: React.FC<Props> = ({ social, profileName, iconClassName = 'p-2' }) => {
  const icons = {
    [Socials.Instagram]: <IoLogoInstagram className={iconClassName} size={iconSize} />,
    [Socials.Facebook]: <IoLogoFacebook className={iconClassName} size={iconSize} />,
    [Socials.X]: <BsTwitterX className={iconClassName} size={iconSize} />
  }

  return <div className="bg-white/80 rounded-full">{icons[social]}</div>
}

export default SocialLink
