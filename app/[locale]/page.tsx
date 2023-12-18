import { useTranslations } from 'next-intl'

export default function Index() {
  const t = useTranslations('IndexPage')

  return <h1>{t('title')}</h1>
}
