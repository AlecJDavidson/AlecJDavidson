import { Box, Flex, IconButton, Link, HStack } from '@chakra-ui/react'
// import { FaLinkedin, FaGithub, FaCodepen, FaCredly } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box display='flex' justifyContent='center'>
      <Box
        p={8}
        width={['100%', '90%', '80%', '73%']}
        py={4}
        px={8}
        textAlign={['center', 'center', 'left']}
      >
        <Flex
          alignItems='center'
          justifyContent={['center', 'center', 'space-between']}
          flexWrap='wrap'
        >
          <Box>
            <span>Alec J. Davidson &copy; {new Date().getFullYear()}</span>
          </Box>
          <HStack spacing={4} mt={[4, 4, 0]}>
            <Link href='#' isExternal>
              <IconButton
                aria-label='LinkedIn'
                // icon={<FaLinkedin />}
                colorScheme='gray'
              />
            </Link>
            <Link href='#' isExternal>
              <IconButton
                aria-label='GitHub'
                // icon={<FaGithub />}
                colorScheme='gray'
              />
            </Link>
            <Link href='#' isExternal>
              <IconButton
                aria-label='CodeWars'
                // icon={<FaCodepen />}
                colorScheme='gray'
              />
            </Link>
            <Link href='#' isExternal>
              <IconButton
                aria-label='Credly'
                // icon={<FaCredly />}
                colorScheme='gray'
              />
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
}

export default Footer
