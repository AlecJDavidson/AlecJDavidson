import {
  Box,
  Heading,
  VStack,
  Input,
  Textarea,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

const Contact = () => {
  const { colorMode } = useColorMode()
  const hoverBgColor = useColorModeValue('gray.200', 'gray.700')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <Box display='flex' justifyContent='center'>
      <Box p={8} width={['100%', '90%', '80%', '73%']}>
        <Heading as='h1' size='xl' mb={6} textAlign='left'>
          Contact
        </Heading>

        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='stretch'>
            <Input type='text' placeholder='Name' size='lg' />
            <Input type='email' placeholder='Email' size='lg' />
            <Textarea
              placeholder='Note'
              colorScheme='gray'
              size='lg'
              resize='vertical'
            />
            <Button
              size='lg'
              type='submit'
              _hover={{
                transform: 'scale(1.02)',
                boxShadow: 'xl',
                backgroundColor: hoverBgColor,
              }}
              transition='transform 0.2s, box-shadow 0.2s'
              backgroundColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  )
}

export default Contact
