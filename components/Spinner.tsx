import React from 'react'

interface Props {
  color?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const SPINNER_SIZES = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-4',
  lg: 'h-10 w-10 border-4'
}

const Spinner: React.FC<Props> = ({ color = 'neutral', size = 'sm', className = '' }) => (
  <div className={`flex h-full w-full items-center justify-center ${className}`}>
    <div
      className={`animate-spin rounded-full ${SPINNER_SIZES[size]} border-${color}`}
      style={{ borderRightColor: 'transparent' }}
    />
  </div>
)

export default Spinner
