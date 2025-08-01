import type { Card2Type } from "@/app/types/Card2Type";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function Card2({title, description, image, bgColor}:Card2Type) {
  return (
    
      <Box
        bg={bgColor}
        w="300px"
        h="300px"
        color="white"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        p="2"
      >
        <Image src={image} />
        <Heading fontWeight="bold">{title}</Heading>
        <Text fontSize="sm" textAlign="center">
         {description}
        </Text>
      </Box>
    
  );
}
