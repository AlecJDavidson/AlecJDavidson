import 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/ui-components/navbar/Nav'
import Home from './views/home/Home'
import About from './views/about/About'
// import Blog from './views/blog/Blog'
import TempBlog from './views/blog/TempBlog'
import Projects from './views/projects/Projects'
import Footer from './components/ui-components/footer/Footer'

const App = () => {
  return (
    <ChakraProvider>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        /* <Route path='/blog' element={<TempBlog />} /> */
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  )
}

export default App
