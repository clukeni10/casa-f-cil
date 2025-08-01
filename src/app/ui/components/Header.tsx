import { Box, Text, HStack, Button, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      w="100vw"
      h="10vh"
      bg="#03045e"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
    >
      <HStack>
        <Box bg="white" w="50px" h="50px"></Box>
        <Heading color="white" fontWeight="bold" fontSize="2xl">Casa Fácil</Heading>
      </HStack>

      <HStack gap="4" color="white" fontWeight="medium" fontSize="xl">
        <Text>Início</Text>
        <Text>Imóveis</Text>
        <Text>Sobre</Text>
        <Text>Contatos</Text>
        <Button
          bg="#0077b6"
          shadow="xs"
          p="2"
          fontWeight="medium"
          fontSize="xl"
        >
          Entrar
        </Button>
      </HStack>
    </Box>
  );
}
