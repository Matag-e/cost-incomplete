import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contacts from './components/pages/Contacts'
import NewProjects from './components/pages/NewProjects'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'


import './App.css'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'



function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
      <Routes >
        
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Projects" element={<Projects />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/newprojects" element={<NewProjects />} />
        <Route exact path="/project/:id" element={<Project />} />

    
       
      </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
