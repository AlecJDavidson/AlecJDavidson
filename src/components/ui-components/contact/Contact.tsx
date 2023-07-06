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

import { useState } from 'react'
import { Note } from './types/note'
import postNote from './logic/postNote'

const Contact = () => {
  const { colorMode } = useColorMode()
  const hoverBgColor = useColorModeValue('gray.200', 'gray.700')
  const [contactData, setContactData] = useState<Note>({
    name: '',
    email: '',
    note: '',
  })

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setContactData((prevState: any) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const myNote: Note = {
      name: contactData.name,
      email: contactData.email,
      note: contactData.note,
    }

    postNote(myNote)

    // Reset form fields
    setContactData({
      name: '',
      email: '',
      note: '',
    })
  }

  return (
    <Box display='flex' justifyContent='center'>
      <Box p={8} width={['100%', '90%', '80%', '73%']}>
        <Heading as='h1' size='xl' mb={6} textAlign='center'>
          Contact
        </Heading>

        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='stretch'>
            <Input
              type='text'
              id='name'
              name='name'
              placeholder='Name'
              value={contactData.name}
              onChange={handleChange}
              size='lg'
            />
            <Input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              value={contactData.email}
              onChange={handleChange}
              size='lg'
            />
            <Textarea
              id='note'
              name='note'
              placeholder='Note'
              value={contactData.note}
              colorScheme='gray'
              size='lg'
              resize='vertical'
              onChange={handleChange}
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
