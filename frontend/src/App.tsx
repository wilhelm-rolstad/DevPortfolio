import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './Projects'
import CV from './Cv'
import Contact from './Contact'
import F1 from './f1_car'
import CVTEST from './CvTestPage'

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <div className="min-h-dvh flex flex-col">
        <Navbar/>
        <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Cv" element={<CV/>} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/cvtest" element={<CVTEST/>}/>
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
