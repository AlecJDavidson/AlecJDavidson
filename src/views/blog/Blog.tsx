import { Box, Heading, Text, VStack, Link, useColorModeValue } from '@chakra-ui/react';

const BlogBox = ({ title, description, link }: any) => {
  const hoverBgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Link
      as="a"
      href={link}
      textDecoration="none"
      _hover={{ backgroundColor: hoverBgColor }}
      display="block"
      p={4}
      borderRadius="md"
      boxShadow="md"
      marginBottom={4}
    >
      <Heading fontSize="xl" mb={2}>
        {title}
      </Heading>
      <Text fontSize="sm" noOfLines={3} isTruncated>
        {description}
      </Text>
    </Link>
  );
};

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
  ];

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={6}>
        Blog
      </Heading>
      <VStack spacing={4} align="stretch">
        {blogPosts.map((post, index) => (
          <BlogBox key={index} title={post.title} description={post.description} link={post.link} />
        ))}
      </VStack>
    </Box>
  );
};

export default Blog;
