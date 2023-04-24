import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { First } from './pages/first'
import { Second } from './pages/second'

function App() {


  return (
    <>

      <Routes >
        <Route path="/" element={<Home />} />

        <Route path="first" element={<First />} />
        <Route path="second" element={<Second />} />


      </Routes>

    </>

  )
}

export default App
