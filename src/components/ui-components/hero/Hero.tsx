
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

interface HeroStatementProps {
  hello: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

const HeroStatement: React.FC<HeroStatementProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Box p={8} bg="gray.800" color="white">
      <Text>Hi, my name is</Text>
      <Heading as="h1" size="2xl" mb={4}>
        {title}
      </Heading>
      <Text fontSize="xl" mb={6}>
        {subtitle}
      </Text>
    </Box>
  );
};

export default HeroStatement;
