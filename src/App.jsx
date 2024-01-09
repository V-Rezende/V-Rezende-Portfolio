
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
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </body>
  )
}

export default App
