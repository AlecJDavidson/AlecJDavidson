import React from 'react'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'

interface HeroStatementProps {
  hello: string
  title: string
  heroLine: string
  subtitle: string
}

const HeroStatement: React.FC<HeroStatementProps> = ({
  hello,
  title,
  heroLine,
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
      marginTop='5%'
    >
      <VStack spacing={4} alignItems='flex-start' lineHeight='1.4rem'>
        <Text fontSize={['sm', 'md', 'lg']} maxWidth='30rem' marginBottom='2%' fontFamily='Source Code Pro'>
          {hello}
        </Text>
        <Heading
          as='h1'
          size='2xl'
          fontSize={['3xl', '4xl', '5xl', '6xl', '7xl']}
          fontWeight='bolder'
          textAlign='left'
          maxWidth='40rem'
          marginBottom='2%'
        >
          {title}
        </Heading>
        <Heading
          as='h1'
          size='2xl'
          fontSize={['3xl', '4xl', '5xl', '6xl', '7xl']}
          fontWeight='bolder'
          textAlign='left'
          maxWidth='50rem'
        >
          {heroLine}
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
