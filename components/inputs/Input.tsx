import React from 'react'

export interface BaseInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value: any
  onChange: any
  label?: string
  placeholder?: string
  hasError?: boolean
  onBlur?: any
  inputClassName?: string
  className?: string
  maxLength?: number
  rows?: number
  required?: boolean
}

interface Props extends BaseInputProps {
type: 'text' | 'number' | 'checkbox' | 'password' | 'textArea' | 'email'
}

const errorStyle = 'border-red-300'

const Input: React.FC<Props> = ({
  type,
  value,
  onChange,
  label,
  placeholder,
  hasError,
  onBlur,
  className = '',
  inputClassName = '',
  rows = 4,
  required = false,
  maxLength
}) => {
  const props = {
    placeholder,
    type,
    value,
    onBlur,
    onChange: (e: any) => onChange(e.target.value),
    className: `${
      hasError ? errorStyle : ''
    } flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${inputClassName}`
  }

  return (
    <div className={`relative ${className}`}>
      {label && (
        <div className="text-xs font-semibold text-dark ml-4 mb-1">{`${label}${
          required ? '*' : ''
        }`}</div>
      )}
      {/*// @ts-ignore*/}
      {type === 'textArea' ? <textarea {...props} rows={rows} cols="100" /> : <input {...props} />}
      {maxLength && (
        <p className="absolute -bottom-5 right-0.5 self-end text-neutral text-xs">
          {value.length || 0}/{maxLength}
        </p>
      )}
    </div>
  )
}

export default Input
