import { Box, Heading, VStack, Input, Textarea, Button } from '@chakra-ui/react'

const Contact = () => {
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
              colorScheme='gray.200'
              size='lg'
              resize='vertical'
            />
            <Button colorScheme='gray' size='lg' type='submit'>
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  )
}

export default Contact
