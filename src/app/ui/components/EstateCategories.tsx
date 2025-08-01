import { Box, Heading } from "@chakra-ui/react";
import CategorieCard from "./CategorieCard";
import { categories } from "./Categories";

export default function EstateCategories() {
  return (
    <Box bg="white" w="100vw" h="auto" p="4" borderBottom="2px solid rgba(0,0,0,0.1)">
      <Box display="flex" justifyContent="center" mt="2">
        <Heading fontSize="2xl" color="#03045e" fontWeight="bold">
          Categorias de Imóveis
        </Heading>
      </Box>

      <Box mt="2" display="flex" justifyContent="space-evenly">
        {categories.map((cat, i) => (
          <CategorieCard key={i} category={cat} />
        ))}
      </Box>
    </Box>
  );
}
