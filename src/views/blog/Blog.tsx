
import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  useColorModeValue,
  Flex,
  useColorMode,
} from '@chakra-ui/react'

const BlogBox = ({ title, description, link }: any) => {
  const { colorMode } = useColorMode()
  const hoverBgColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Link
      as='a'
      href={link}
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

const Blog = () => {
  // Example data
  const blogPosts = [
    {
      title: 'Blog Post 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod leo non felis ultrices scelerisque.',
      link: '#',
    },
    {
      title: 'Blog Post 2',
      description:
        'Fusce vel pharetra velit, at dignissim tortor. Quisque posuere ligula sed turpis hendrerit malesuada.',
      link: '#',
    },
    {
      title: 'Blog Post 3',
      description:
        'Etiam eleifend augue sed enim congue semper. Nulla euismod mauris et hendrerit interdum.',
      link: '#',
    },
  ]

  return (
    <Box display='flex' justifyContent='center'>
      <Box p={8} width={['100%', '90%', '80%', '73%']}>
        <Heading as='h1' size='xl' mb={6} textAlign='left'>
          Blog
        </Heading>
        <VStack spacing={4} align='stretch'>
          {blogPosts.map((post, index) => (
            <BlogBox
              key={index}
              title={post.title}
              description={post.description}
              link={post.link}
            />
          ))}
        </VStack>
      </Box>
    </Box>
  )
}

export default Blog
