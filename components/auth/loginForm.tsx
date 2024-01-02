'use client'

import React, { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Button as DefaultButton } from '@/components/ui/button'
import Input from '../inputs/Input'
import { useTranslations } from 'next-intl'
import Button from '../inputs/button'
import { fetchPost } from '@/lib/fetch'
import config from '@/lib/config'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const tNavigation = useTranslations('Navigation')
  const tAuth = useTranslations('Authentication')

  const handleSubmit = async (e: any) => {
    try {
      setLoading(true)
      fetchPost(`${config.GATEWAY_URL}/auth/login`, { email, password })
    } catch (error) {
      console.log('er', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DefaultButton variant="link">{tNavigation('login')}</DefaultButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{tNavigation('login')}</DialogTitle>
          <DialogDescription>
            {tAuth('noAccount')}
            <DefaultButton variant="link">{tAuth('signUpNow')}</DefaultButton>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              className="col-span-3"
              onChange={setEmail}
              value={email}
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              className="col-span-3"
              onChange={setPassword}
              value={password}
              placeholder="Password"
              type="password"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} loading={loading} type="submit">
            {tNavigation('login')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default LoginForm
