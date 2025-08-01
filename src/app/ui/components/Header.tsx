import { Box, Text, HStack, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
        <Text><Link to="/">Início</Link></Text>
        <Text><Link to="/imoveis">Imóveis</Link></Text>
        <Text><Link to="/sobre">Sobre</Link></Text>
        <Text><Link to="/contatos">Contatos</Link></Text>
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
