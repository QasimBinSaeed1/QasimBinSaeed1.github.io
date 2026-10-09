import { useEffect } from 'react'
import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import { SketchLinkUnderlines } from '../sketch'

const Main = ({ children, router }) => {
  // Smooth-scroll to in-page section anchors (nav links like /#publications)
  useEffect(() => {
    const hash = router.asPath.split('#')[1]
    if (!hash) return
    const scrollToHash = () => {
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    const t = setTimeout(scrollToHash, 50)
    return () => clearTimeout(t)
  }, [router.asPath])

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Qasim Bin Saeed — academic portfolio" />
        <meta name="author" content="Qasim Bin Saeed" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Qasim Bin Saeed" />
        <meta property="og:title" content="Qasim Bin Saeed" />
        <meta property="og:type" content="website" />
        <title>Qasim Bin Saeed</title>
      </Head>

      <NavBar path={router.asPath} />
      <SketchLinkUnderlines />

      <Container maxW="110ch" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
