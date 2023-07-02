import React from 'react'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'

interface HeroStatementProps {
  hello: string
  title: string
  title2: string
  subtitle: string
}

const HeroStatement: React.FC<HeroStatementProps> = ({
  hello,
  title,
  title2,
  subtitle,
}) => {
  return (
    <Box
      p={8}
      bg='gray.800'
      color='white'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      textAlign='left'
      height='100%'
    >
      <VStack spacing={4} alignItems='flex-start'>
        <Text fontSize={['sm', 'md', 'lg']} maxWidth='30rem'>
          {hello}
        </Text>
        <Heading
          as='h1'
          size='2xl'
          fontSize={['3xl', '4xl', '5xl']}
          fontWeight='bolder'
          textAlign='left'
          maxWidth='40rem'
        >
          {title}
        </Heading>
        <Heading
          as='h1'
          size='2xl'
          fontSize={['3xl', '4xl', '5xl']}
          fontWeight='bolder'
          textAlign='left'
          maxWidth='45rem'
        >
          {title2}
        </Heading>
        <Text
          fontSize={['md', 'xl', '2xl']}
          mb={6}
          textAlign='left'
          maxWidth='35rem'
          margin='1.5rem 0px'
        >
          {subtitle}
        </Text>
      </VStack>
    </Box>
  )
}

export default HeroStatement
