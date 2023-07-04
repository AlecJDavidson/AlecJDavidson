import 'react'
import HeroStatement from '../../components/ui-components/hero/Hero'
import { Box, Spacer } from '@chakra-ui/react'
import Contact from '../../components/ui-components/contact/Contact'
import Projects from '../projects/Projects'
const Home = () => {
  return (
    <Box>
      <Spacer height={'3rem'} />
      <HeroStatement
        hello='Hi, my name is'
        title='Alec Davidson.'
        heroLine='The tower of power, too sweet to be sour.'
        subtitle="I am an Indianapolis based Software Engineer specializing in cloud-based website and app development."
      />
      <Spacer height='17rem' />
      <Projects />

      <Contact />
    </Box>
  )
}

export default Home
