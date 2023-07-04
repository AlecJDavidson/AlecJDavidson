import 'react'
import {
  Box,
  Text,
  Heading,
  Image,
  VStack,
  Spacer,
  Flex,
} from '@chakra-ui/react'
import Certifications from '../../components/ui-components/certifications/Certifications'

const About = () => {
  return (
    <Box display='flex' justifyContent='center' my={8}>
      <Box p={8} width={['100%', '90%', '80%']}>
        <Flex flexDirection={['column', 'row']} alignItems='stretch'>
          <Box pr={[0, 8]} mb={[0]} minHeight='320px'>
            <Image
              src='/assets/profile.png'
              alt='Profile Image'
              borderRadius={15}
              maxWidth={['100%']}
              objectFit={['contain', 'cover']}
              height='100%'
            />
          </Box>

          <VStack
            spacing={6}
            alignItems={['center', 'flex-start']}
            textAlign={['center', 'left']}
          >
            <Heading as='h1' size='xl' mb={2}>
              About Me
            </Heading>

            <Text
              fontSize={['sm', 'md', 'xl', '2xl']}
              fontFamily='arial'
              lineHeight='1.75rem'
            >
              As a passionate software engineer specializing in cloud
              technologies, I thrive on the creative process of tinkering and
              constructing innovative solutions. With years of experience under
              my belt, I've become a true Linux aficionado. It's my trusted
              companion, accompanying me in both professional and personal
              projects. Programming is not just a job for me; it's a deep-rooted
              hobby that fuels my curiosity and allows me to continuously learn
              and explore new possibilities.
            </Text>
          </VStack>
        </Flex>

        <Spacer height='3rem' />

        <Box width='100%'>
          <Certifications />
        </Box>
      </Box>
    </Box>
  )
}

export default About
