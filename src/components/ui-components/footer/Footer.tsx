import { Box, Flex, Text, IconButton, Link } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaCode, FaCertificate } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.200" py={4} px={8}>
      <Flex justify="space-between" align="center">
        <Text>&copy; Alec J. Davidson{new Date().getFullYear()}</Text>
        <Flex>
          <Link href="https://www.linkedin.com/" isExternal>
            <IconButton
              as={FaLinkedin}
              size="lg"
              color="gray.500"
              aria-label="LinkedIn"
              mr={2}
            />
          </Link>
          <Link href="https://github.com/" isExternal>
            <IconButton
              as={FaGithub}
              size="lg"
              color="gray.500"
              aria-label="GitHub"
              mr={2}
            />
          </Link>
          <Link href="https://www.codewars.com/" isExternal>
            <IconButton
              as={FaCode}
              size="lg"
              color="gray.500"
              aria-label="CodeWars"
              mr={2}
            />
          </Link>
          <Link href="https://www.credly.com/" isExternal>
            <IconButton
              as={FaCertificate}
              size="lg"
              color="gray.500"
              aria-label="Credly"
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
