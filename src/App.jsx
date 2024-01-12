
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <body>
      <Navbar/>
      <Routes>
        <Route exact path='/V-Rezende-Portfolio/' element={<Home/>} />
        <Route path='/V-Rezende-Portfolio/about' element={<About/>} />
        <Route path='/V-Rezende-Portfolio/projects' element={<Projects/>} />
        <Route path='/V-Rezende-Portfolio/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </body>
  )
}

export default App
