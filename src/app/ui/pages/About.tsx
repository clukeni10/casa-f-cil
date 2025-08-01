import { Box, Text, Image, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import Card2 from "../components/Card2";

export default function About() {
      const cards = [
            {
                  title: "Missão",
                  description: " Oferecer soluções imobiliárias seguras, transparentes e personalizadas, ajudando cada cliente a encontrar o imóvel ideal para viver, investir ou empreender.",
                  bgColor:"#03045E",
                  image:"/missao.png"
            },
            {
                  title: "Visão",
                  description: " Ser reconhecida como a plataforma de venda de imóveis referência em Angola pela inovação, qualidade no atendimento e compromisso com os sonhos dos nossos clientes.",
                  bgColor:"#0077b6",
                  image:"/visao.png"
            },
            {
                  title: "Valores",
                  description: " Ser reconhecida como a plataforma de venda de imóveis referência em Angola pela inovação, qualidade no atendimento e compromisso com os sonhos dos nossos clientes.",
                  bgColor:"#00b4d8",
                  image:"/cliente.png"
            },

      ]
  return (
    <Box>
      <Header />
      <Box position="relative" w="100vw" h="30vh" overflow="hidden">
        <Box
          bgImage="url('/buildings.png')"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPos="bottom"
          filter="blur(2px)"
          zIndex={0}
          inset={0}
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          position="absolute"
        ></Box>
        <Box
          position="relative"
          zIndex={1}
          p="6"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="#03045E" fontSize="2xl" fontWeight="bold">
            Sobre a Casa Fácil
          </Text>
          <Text fontSize="xl" fontWeight="medium" color="#0077b6">
            "Facilitamos a realização do seu sonho: encontrar o imóvel ideal."
          </Text>
        </Box>
      </Box>
      <Box
        bg="white"
        w="100vw"
        h="60vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="4"
      >
        <Image src="/casa1.png" w="300px" h="300px" />
        <Box w="400px" h="300px">
          <Heading w="100%" color="#03045E">
            Quem Somos?
          </Heading>
          <Text>
            Na Casa Fácil, somos apaixonados por realizar sonhos. Atuamos no
            mercado imobiliário com foco em conectar pessoas aos imóveis ideais
            - seja para viver, investir ou empreender. Com uma equipe
            experiente, atendimento personalizado e um portfólio diversificado,
            oferecemos desde apartamentos residenciais modernos até espaços
            comerciais estratégicos, terrenos e empreendimentos completos.
          </Text>
        </Box>
      </Box>
      <Box
        bg="#f2f2f2"
        w="100vw"
        h="auto"
        p="5"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box h="100%" display="flex" alignItems="center">
          {cards.map((card, i) => (
            <Card2 key={i} {...card}/>
          ))}
        </Box>

        
      </Box>
    </Box>
  );
}
