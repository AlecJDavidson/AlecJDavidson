import 'react'
import { Box, Text } from '@chakra-ui/react'

const About = () => {
  return (
    <Box display='flex' justifyContent='center'>
      <Box
        p={8}
        width={['100%', '90%', '80%', '73%']}
        py={4}
        px={8}
        textAlign={['center', 'center', 'left']}
      >
        {/*}<Image
          src='../../../public/assets/profile.jpg'
          // 3266 x 4899
          alt='Profile Image'
          // boxSize={['150px', '200px', '250px', '300px']}
          maxWidth={'326.6'}
          maxHeight={'489.9'}
        /> */}
        <Text>Hi, I'm Alec!</Text>
      </Box>
    </Box>
  )
}

export default About
