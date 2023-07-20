import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  useColorModeValue,
  Spacer,
  Flex,
  useColorMode,
} from '@chakra-ui/react'

const ProjectBox = ({ title, description, link }: any) => {
  const { colorMode } = useColorMode()
  const hoverBgColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Link
      as='a'
      href={link}
      isExternal
      textDecoration='none'
      _hover={{
        transform: 'scale(1.02)',
        boxShadow: 'xl',
        backgroundColor: hoverBgColor,
      }}
      display='flex'
      flexDirection='column'
      p={4}
      borderRadius='md'
      transition='transform 0.2s, box-shadow 0.2s'
      marginBottom={4}
      backgroundColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
    >
      <Flex align='center' mb={2}>
        <Heading fontSize='xl' textAlign='left'>
          {title}
        </Heading>
      </Flex>
      <Text fontSize='sm' textAlign='left'>
        {description}
      </Text>
    </Link>
  )
}

const Projects = () => {
  const ProjectPosts = [
    {
      title: 'OpenStock - Parts Inventory Management System',
      description:
        "OpenStock is a parts inventory management system designed to help individuals manage their personal projects efficiently. Whether you're a hobbyist or a DIY enthusiast, OpenStock simplifies the process of organizing and tracking parts for your various projects.",
      link: 'https://github.com/AlecJDavidson/open-stock',
    },
    {
      title: 'Sony Bravia API',
      description:
        "Python library that uses the private rest api as well as the envelope api that processes the remote's iirc input on Sony smart TV's.",
      link: 'https://github.com/AlecJDavidson/sony_bravia_api',
    },
    {
      title: 'Feed Meow Automatic Cat Feeder',
      description:
        'Home automation project that feeds my cats using an ESP32 to dispense food on a schedule.',
      link: 'https://github.com/AlecJDavidson/feed_meow',
    },
    {
      title: 'Raspberry Pi Gameboy',
      description:
        'GameBoy Advance revived using a Raspberry Pi Zero W running RetroPi.',
      link: 'https://www.youtube.com/watch?v=_sHleTKiPtA',
    },
  ]

  const FutureProjectPosts = [
    {
      title: '3D Printed Mouse',
      description: '3D Printed ultra light mouse housing.',
      link: '',
    },
  ]

  return (
    <Box display='flex' justifyContent='center'>
      <Box p={8} width={['100%', '90%', '80%', '73%']}>
        <Heading as='h1' size='xl' mb={6} textAlign='center'>
          Projects
        </Heading>
        <VStack spacing={4} align='stretch'>
          {ProjectPosts.map((post, index) => (
            <ProjectBox
              key={index}
              title={post.title}
              description={post.description}
              link={post.link}
            />
          ))}
        </VStack>
        <Spacer height='3rem' />
        <Heading as='h1' size='xl' mb={6} textAlign='center'>
          Upcoming Projects
        </Heading>
        <VStack align='stretch'>
          {FutureProjectPosts.map((post, index) => (
            <ProjectBox
              key={index}
              title={post.title}
              description={post.description}
              link={post.link}
            />
          ))}
        </VStack>

        <Spacer height='5rem' />
      </Box>
    </Box>
  )
}

export default Projects
