import { Box, Container, Flex, Heading, Text, VStack, HStack, Image, Link, SimpleGrid, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <RouterLink to="/">ElectroShop</RouterLink>
        </Heading>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/products">Products</Link>
          <Link as={RouterLink} to="/about">About Us</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Featured Product</Heading>
        <Text fontSize="xl" mb={8}>Discover the latest in electronics with our featured product of the month.</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>Our Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>Product 1</Heading>
              <Text mb={4}>Description of product 1.</Text>
              <Button colorScheme="blue">View Details</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>Product 2</Heading>
              <Text mb={4}>Description of product 2.</Text>
              <Button colorScheme="blue">View Details</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>Product 3</Heading>
              <Text mb={4}>Description of product 3.</Text>
              <Button colorScheme="blue">View Details</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Flex justifyContent="space-between" alignItems="center" px={10}>
          <Text>&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal><FaFacebook /></Link>
            <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
            <Link href="https://instagram.com" isExternal><FaInstagram /></Link>
          </HStack>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" px={10} mt={4}>
          <Link as={RouterLink} to="/terms">Terms of Service</Link>
          <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
          <Link as={RouterLink} to="/contact">Contact Us</Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;