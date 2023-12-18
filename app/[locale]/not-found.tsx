import { useTranslations } from 'next-intl'

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage')

  return <p className="max-w-[460px]">{t('description')}</p>
}
