import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { SketchHighlight } from './sketch'

const SECTIONS = [
  { href: '/#about', id: 'about', label: 'About' },
  { href: '/#news', id: 'news', label: 'News' },
  { href: '/#publications', id: 'publications', label: 'Publications' },
  { href: '/#education', id: 'education', label: 'Education' },
  { href: '/#experience', id: 'experience', label: 'Experience' },
  { href: '/#places', id: 'places', label: 'Places' }
]

const LinkItem = ({ href, path, target, children, ...props }) => {
  const hash = href.includes('#') ? `#${href.split('#')[1]}` : null
  const active = path === href || (hash && path?.endsWith(hash))
  const linkColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={true}
      px={1.5}
      py={2}
      color={linkColor}
      target={target}
      {...props}
    >
      {active ? <SketchHighlight>{children}</SketchHighlight> : children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        alignItems="center"
        justifyContent="space-between"
        position="relative"
      >
        <Flex align="center" zIndex={1}>
          <Heading
            as="h1"
            size="lg"
            letterSpacing={'tighter'}
            display="flex"
            alignItems="center"
          >
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction="row"
          display={{ base: 'none', lg: 'flex' }}
          alignItems="center"
          justifyContent="center"
          spacing={0}
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
        >
          {SECTIONS.map(section => (
            <LinkItem key={section.id} href={section.href} path={path}>
              {section.label}
            </LinkItem>
          ))}
        </Stack>

        <Box zIndex={1} display="flex" alignItems="center">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', lg: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {SECTIONS.map(section => (
                  <MenuItem key={section.id} as={MenuLink} href={section.href}>
                    {section.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
