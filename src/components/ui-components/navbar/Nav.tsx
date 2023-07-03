import { ReactNode } from 'react'
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

const Links = [
  { text: 'About', route: '/about' },
  { text: 'Blog', route: '/blog' },
  { text: 'Projects', route: '/projects' },
]

const NavLink = ({ children, to }: { children: ReactNode; to: string }) => (
  <Link
    as={RouterLink}
    to={to}
    fontFamily={'Helvetica'}
    fontSize={'1.25rem'}
    fontWeight={'500'}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      transform: 'scale(1.02)',
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    transition='transform 0.2s, box-shadow 0.2s'
  >
    {children}
  </Link>
)

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box
              fontFamily={'Helvetica'}
              fontSize={'1.25rem'}
              fontWeight={'500'}
            >
              <Link as={RouterLink} to='/' _hover={{ textDecoration: 'none' }}>
                Alec Davidson
              </Link>
            </Box>
          </HStack>

          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              ></MenuButton>
            </Menu>
          </Flex>
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link.text} to={link.route}>
                  {link.text}
                </NavLink>
              ))}
            </HStack>

            <Button
              height={'2rem'}
              width={'2rem'}
              onClick={toggleColorMode}
              alignItems={'center'}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>

          <IconButton
            size={'md'}
            height={'2rem'}
            width={'2rem'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.text} to={link.route}>
                  {link.text}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default Nav
