import { Box, Heading, HStack } from "@chakra-ui/react";
import Card from "./Card";

export default function LatestEstates() {
  return (
    <Box w="100vw" h="auto" p="5">
      <Heading color="#03045e">Novidades</Heading>

      <HStack mt="2">
        <Card />
        <Card />
        <Card />
        <Card />
      </HStack>
    </Box>
  );
}
