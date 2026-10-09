import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function PublicationsRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/#publications')
  }, [router])
  return null
}
