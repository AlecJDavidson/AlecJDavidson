import React from 'react'
import {
  Box,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'

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
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      textAlign='left'
      height='100%'
      marginTop='5%'
    >
      <VStack spacing={4} alignItems='flex-start' lineHeight='1.4rem'>
        <Text
          fontSize={['sm', 'md', 'lg']}
          maxWidth='30rem'
          marginBottom='2%'
          fontFamily='Source Code Pro'
        >
          {hello}
        </Text>
        <Box maxWidth='40rem' marginBottom='1%'>
          <Heading
            as='h1'
            size='2xl'
            fontSize={['3xl', '4xl', '5xl', '6xl', '7xl']}
            fontWeight='bolder'
            textAlign='left'
          >
            {title}
          </Heading>
        </Box>
        <Box maxWidth='50rem'>
          <Heading
            as='h1'
            size='2xl'
            fontSize={['3xl', '4xl', '5xl', '6xl', '7xl']}
            fontWeight='bolder'
            textAlign='left'
          >
            {heroLine}
          </Heading>
        </Box>

        <Text
          fontSize={['md', 'xl', '2xl']}
          fontFamily='arial'
          lineHeight='2rem'
          mb={6}
          textAlign='left'
          maxWidth='35rem'
        >
          {subtitle}
        </Text>
      </VStack>
    </Box>
  )
}

export default HeroStatement
