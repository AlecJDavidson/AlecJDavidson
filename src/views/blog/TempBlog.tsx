import { Box, Spacer, Heading } from '@chakra-ui/react'

const TempBlog = () => {
  return (
    <>
      <Box display='flex' justifyContent='center'>
        <Box p={8} width={['100%', '90%', '80%', '73%']}>
          <Heading as='h1' size='xl' mb={6} textAlign='center'>
            I might make a blog someday.
          </Heading>
        </Box>
      </Box>

      <Spacer height={'40rem'} />
    </>
  )
}

export default TempBlog
