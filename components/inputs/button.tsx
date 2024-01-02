import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { IconType } from 'react-icons/lib/cjs/iconBase'

import Spinner from '../Spinner'
import { colorPalette } from '@/app/styles/colors'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'link'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'border border-primary bg-transparent text-primary hover:bg-primary/10',
        tertiary: 'border border-neutral bg-transparent text-dark hover:bg-dark/10',
        ghost: 'hover:bg-primary/10 hover:text-accent-foreground',
        link: 'text-primary hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-7 rounded-3xl px-3',
        sm: 'h-9 rounded-3xl px-3',
        lg: 'h-11 rounded-3xl px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
)

const iconSizeForSize = {
  default: 14,
  sm: 14,
  lg: 15
}

const iconColorForVariant = (variant: string) => {
  switch (variant) {
    case 'primary':
      return colorPalette.light
    case 'link':
      return colorPalette.primary
    default:
      return colorPalette.basic
  }
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  icon?: IconType
  iconPosition?: 'left' | 'right'
  hoverClassName?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      hoverClassName = '',
      variant,
      size,
      asChild = false,
      children,
      disabled: buttonDisabled,
      loading = false,
      icon,
      iconPosition = 'left',
      onClick,
      ...props
    },
    ref
  ) => {
    const disabled = loading || buttonDisabled

    const spinnerColor = {
      primary: 'white',
      secondary: 'primary',
      tertiary: 'dark',
      ghost: 'dark',
      link: 'primary'
    }[variant]

    const sharedProps: any = { ref }
    const buttonClassName = cn(
      buttonVariants({
        variant,
        size,
        className: icon
          ? null
          : `${className} ${hoverClassName} ${variant === 'link' ? 'px-0 py-0' : ''}`
      })
    )

    const Comp = asChild ? Slot : 'button'
    const ButtonContent = (
      <Comp
        className={icon ? null : cn(buttonVariants({ variant, size, className: buttonClassName }))}
        disabled={disabled}
        onClick={icon ? null : onClick}
        {...props}
        {...sharedProps}
      >
        {loading && <Spinner color={spinnerColor} className="mr-2" />}
        {children}
      </Comp>
    )
    // const IconContent = (
    //   <Icon icon={icon} size={iconSizeForSize[size]} color={iconColorForVariant(variant)} />
    // )

    return icon ? (
      <div
        className={`${buttonClassName} flex flex-row items-center cursor-pointer space-x-1`}
        onClick={onClick}
        {...sharedProps}
      >
        {iconPosition === 'left' && (
          <>
            {/* {IconContent} */}
            {ButtonContent}
          </>
        )}
        {iconPosition === 'right' && (
          <>
            {ButtonContent}
            {/* {IconContent} */}
          </>
        )}
      </div>
    ) : (
      ButtonContent
    )
  }
)
Button.displayName = 'Button'

export default Button
