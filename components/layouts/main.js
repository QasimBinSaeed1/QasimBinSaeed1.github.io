import { useEffect } from 'react'
import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import { SketchLinkUnderlines } from '../sketch'
import { profile } from '../../lib/content'
import { seo, personJsonLd } from '../../lib/seo'

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

  const jsonLd = personJsonLd()

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={profile.name} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={`${seo.siteUrl}/`} />
        {/* SVG adapts to light/dark browser chrome; PNG/ICO fallbacks stay on brand teal */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon-48.png" />

        {profile.googleSiteVerification ? (
          <meta
            name="google-site-verification"
            content={profile.googleSiteVerification}
          />
        ) : null}
        {profile.bingSiteVerification ? (
          <meta
            name="msvalidate.01"
            content={profile.bingSiteVerification}
          />
        ) : null}

        <meta property="og:site_name" content={profile.name} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`${seo.siteUrl}/`} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:image:alt" content={`Portrait of ${profile.name}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="profile:first_name" content="Qasim" />
        <meta property="profile:last_name" content="Bin Saeed" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
