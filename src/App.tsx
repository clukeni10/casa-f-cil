import { Provider } from "@/components/ui/provider"
import './App.css'
import { Box } from "@chakra-ui/react"

export default  function App() {


  return (
    <Provider>
      <Box
        bg="red"
        w="100vw"
        h="100vh"
      ></Box>
    </Provider>
  )
}


