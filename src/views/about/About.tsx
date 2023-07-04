import 'react'
import { Box, Heading, Image, HStack } from '@chakra-ui/react'

const About = () => {
  return (
    <Box display='flex' justifyContent='center'>
      <Box p={8} width={['100%', '90%', '80%', '73%']}>
        <Heading as='h1' size='xl' mb={6} textAlign='left'>
          Hi, I'm Alec!
        </Heading>
        <Image
          src='../../../public/assets/profile.png'
          //  original size 2728x2424
          alt='Profile Image'
          borderRadius={'15'}
          maxWidth={'25%'}
        />
      </Box>
    </Box>
  )
}

export default About
