import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Toilet } from "lucide-react";
import { FaBed } from "react-icons/fa";

export default function Card() {
  return (
    <Box
      w="350px"
      h="300px"
      p="5"
      bg="white"
      rounded="md"
      shadow="xl"
      border="1px solid rgba(0,0,0,0.1)"
      _hover={{cursor: "pointer", bg: "#f6f6f6"}}
    >
      <Image
        src="/casa1.png"
        rounded="md"
        w="100%"
        h="150px"
        objectFit="cover"
      />

      <Heading mt="2">Mansão Moderna T5</Heading>

      <Box display="flex" justifyContent="space-between">
        <Text fontWeight="medium" fontSize="xl">
          KZ 50.000.000,00
        </Text>

        <Box display="flex" alignItems="center" fontWeight="medium" gap="2">
          <HStack>
            <FaBed size="20" />
            <Text>5</Text>
          </HStack>
          <HStack>
            <Toilet size="20" />
            <Text>3</Text>
          </HStack>
        </Box>
      </Box>

      <Box bg="#03045e" w="100%" h="1" mt="2"></Box>

      <Box mt="2">Morro Bento, Luanda</Box>
    </Box>
  );
}
