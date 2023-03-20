import {Router} from './routes'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from './styles/theme'




const App = () => {

  return (
    <ChakraProvider theme={theme}>

      <Router/>

    </ChakraProvider>
  )
 
}

export default App;
