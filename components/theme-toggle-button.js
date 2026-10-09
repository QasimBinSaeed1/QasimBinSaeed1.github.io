import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const [mounted, setMounted] = useState(false)
  const modeKey = useColorModeValue('light', 'dark')
  const scheme = useColorModeValue('purple', 'orange')
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />)

  useEffect(() => setMounted(true), [])

  // Avoid SSR/client mismatch when localStorage restores dark mode
  if (!mounted) {
    return (
      <IconButton
        aria-label="Toggle theme"
        colorScheme="purple"
        icon={<MoonIcon />}
        visibility="hidden"
        pointerEvents="none"
      />
    )
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={modeKey}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={scheme}
          icon={icon}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
