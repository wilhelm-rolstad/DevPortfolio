import { useState, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './Projects'
import CV from './Cv'
import Contact from './Contact'
import F1 from './f1_car'

import './App.css'

function App() {

  const [darkBg, setDarkBg] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('bg-dark', darkBg)
    document.body.classList.toggle('bg-light', !darkBg)
  }, [darkBg])


  return (
    <>
      <BrowserRouter>
        <Navbar
          darkBg={darkBg}
          onToggleBg={() => setDarkBg((v) => !v)}
        />
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Cv" element={<CV/>} />
          <Route path="/Contact" element={<Contact/>}/>
            <Route path="/F1_car" element={<F1/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </>
  )
}

export default App
