import 'react'
import HeroStatement from '../../components/ui-components/hero/Hero'
import Blog from '../blog/Blog'
import { Box, Spacer } from '@chakra-ui/react'
import Contact from '../../components/ui-components/contact/Contact'
const Home = () => {
  return (
    <Box>
      <HeroStatement
        hello='Hi, my name is'
        title='Alec Davidson.'
        heroLine='The tower of power, too sweet to be sour.'
        subtitle="I'm a Software Engineer based in Indianapolis. I specialize in creating
        website and app solutions in the cloud."
      />
      <Spacer marginBottom='25%' />
      <Blog />
      <Contact />
    </Box>
  )
}

export default Home
