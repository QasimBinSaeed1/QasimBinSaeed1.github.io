import 'drawably/style.css'
import 'drawably/font.css'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import EasterEgg from '../components/easter-egg'

if (typeof window !== 'undefined') {
  // Keep browser hash scrolling working for section nav links
  window.history.scrollRestoration = 'auto'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra>
      <Fonts />
      <EasterEgg />
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined' && !window.location.hash) {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
