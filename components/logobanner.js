import React from 'react'
import { Box, Image, Flex, Link } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import NextLink from 'next/link'

// Matches homepage3d: transparent logo assets + grayscale hover
const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`

const LogoBanner = ({ affiliations = [] }) => {
  const [isPaused, setIsPaused] = React.useState(false)
  const logos = (affiliations || []).filter(l => l.logoUrl)

  if (!logos.length) return null

  return (
    <Box
      overflow="hidden"
      width="100%"
      py={4}
      position="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Flex
        as="div"
        whiteSpace="nowrap"
        width="fit-content"
        alignItems="center"
        animation={`${marquee} 40s linear infinite ${isPaused ? 'paused' : 'running'}`}
        style={{
          transition: 'animation-play-state 0.3s ease-in-out'
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <Box key={`${logo.id}-${index}`} mx={3} position="relative">
            {logo.link ? (
              <Link
                as={NextLink}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={logo.logoUrl}
                  alt={logo.name}
                  width={logo.width}
                  minW={logo.width}
                  objectFit="contain"
                  filter="grayscale(100%)"
                  transition="0.1s"
                  _hover={{ filter: 'grayscale(0%)' }}
                />
              </Link>
            ) : (
              <Image
                src={logo.logoUrl}
                alt={logo.name}
                width={logo.width}
                minW={logo.width}
                objectFit="contain"
                filter="grayscale(100%)"
                transition="0.1s"
                _hover={{ filter: 'grayscale(0%)' }}
              />
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

export default LogoBanner
