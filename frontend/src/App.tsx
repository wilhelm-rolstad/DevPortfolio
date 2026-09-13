import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import Home from './Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToSection from './components/ScrollToSection'
import Contact from './Contact'
import F1 from './f1_car'

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToSection />
        <div className="min-h-dvh flex flex-col">
        <Navbar/>
        <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/projects" element={<Navigate to="/#prosjekter" replace />}/>
          <Route path="/cv" element={<Navigate to="/#cv" replace />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cvtest" element={<Navigate to="/#cv" replace />}/>
          <Route path="/F1_car" element={<F1/>}/>
        </Routes>
        </main>
        <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
