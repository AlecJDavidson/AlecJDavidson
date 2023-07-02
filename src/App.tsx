import 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './views/home/Home'
import Nav from './components/ui-components/navbar/Nav'

const App = () => {
  return (
    <ChakraProvider>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </ChakraProvider>
  )
}

export default App
