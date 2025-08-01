import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LatestEstates from "../components/LatestEstates";

export default function Index() {
  return (
    <Box>
      <Header />
      <Hero />
      <LatestEstates/>
    </Box>
  );
}
