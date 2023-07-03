import { Box, Heading, VStack, HStack, Link } from '@chakra-ui/react'

const Certifications = () => {
  const certifications = [
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      imageUrl:
        'https://images.credly.com/size/110x110/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
      verificationUrl:
        'https://www.credly.com/badges/c37b11db-d928-4ae2-aecc-435022adf5d9',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      imageUrl:
        'https://images.credly.com/size/110x110/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
      verificationUrl:
        'https://www.credly.com/badges/6d9a81d8-8d81-4c45-a72b-3447902cce3b',
    },
    {
      name: 'AWS Certified Solutions Architect - Associate',
      imageUrl:
        'https://images.credly.com/size/110x110/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
      verificationUrl:
        'https://www.credly.com/badges/e4a71b46-ceb4-4bda-b43e-70cb86dcc815',
    },
  ]

  return (
    <Box display='flex' justifyContent='center'  marginBottom='%'>
      <Box p={8} width={['100%', '90%', '80%', '73%']}>
        <Heading as='h1' size='xl' mb={6} textAlign='left'>
          Certifications
        </Heading>

        <VStack>
          <HStack spacing={6} align='stretch'>
            {certifications.map((certification, index) => (
              <Link href={certification.verificationUrl} isExternal>
                <Box
                  key={index}
                  _hover={{
                    transform: 'scale(1.2)',
                    textDecoration: 'none',
                  }}
                  transition='transform 0.2s, box-shadow 0.2s'
                >
                  <img src={certification.imageUrl} alt={certification.name} />
                </Box>
              </Link>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Box>
  )
}

export default Certifications
