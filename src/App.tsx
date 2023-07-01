import 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './views/home/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
