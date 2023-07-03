import {
  Box,
  Flex,
  Button,
  Link,
  HStack,
  Image,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

const Footer = () => {
  const { colorMode } = useColorMode()

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
            <Link href='www.linkedin.com/in/alecjdavidson' isExternal>
              <Button
                aria-label='LinkedIn'
                _hover={{
                  transform: 'scale(1.05)',
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                transition='transform 0.2s, box-shadow 0.2s'
                backgroundColor={
                  colorMode === 'light' ? 'gray.200' : 'gray.700'
                }
              >
                <Image
                  boxSize='25px'
                  objectFit={'contain'}
                  src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png'
                  alt='LinkedIn'
                />
              </Button>
            </Link>
            <Link href='https://github.com/AlecJDavidson' isExternal>
              <Button
                aria-label='GitHub'
                _hover={{
                  transform: 'scale(1.05)',
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                transition='transform 0.2s, box-shadow 0.2s'
                backgroundColor={
                  colorMode === 'light' ? 'gray.200' : 'gray.700'
                }
              >
                <Image
                  boxSize='25px'
                  objectFit={'contain'}
                  src='https://cdn-icons-png.flaticon.com/128/3291/3291695.png'
                  alt='GitHub'
                />
              </Button>
            </Link>

            <Link href='https://www.credly.com/users/alec-davidson' isExternal>
              <Button
                aria-label='Credly'
                _hover={{
                  transform: 'scale(1.05)',
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                transition='transform 0.2s, box-shadow 0.2s'
                backgroundColor={
                  colorMode === 'light' ? 'gray.200' : 'gray.700'
                }
              >
                <Image
                  boxSize='25px'
                  objectFit={'contain'}
                  src='https://www.svgrepo.com/show/331358/credly.svg'
                  alt='Credly'
                />
              </Button>
            </Link>

            <Link href='https://www.codewars.com/users/AlecJDavidson' isExternal>
              <Button
                aria-label='CodeWars'
                _hover={{
                  transform: 'scale(1.05)',
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                transition='transform 0.2s, box-shadow 0.2s'
                backgroundColor={
                  colorMode === 'light' ? 'gray.200' : 'gray.700'
                }
              >
                <Image
                  boxSize='25px'
                  objectFit={'contain'}
                  src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codewars-512.png'
                  alt='CodeWars'
                />
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
}

export default Footer
