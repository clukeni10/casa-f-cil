import type { CategorieCardType } from "@/app/types/CategorieCardType";
import { Box, Text } from "@chakra-ui/react";

type Props = {
      category: CategorieCardType
}


export default function CategorieCard({category}: Props){
     
      return(
            <Box
                  w="200px"
                  h="200px"
                  p="4"
                  m="4"
                  bg="#0077b6"
                  rounded="md"
                  shadow="md"
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  _hover={{bg: "#096596ff", cursor:"pointer"}}
            >
                  {category.icon}
                  <Text fontSize="2xl" fontWeight="medium">{category.name}</Text>
                  
            </Box>
      )
}