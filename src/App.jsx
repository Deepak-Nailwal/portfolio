import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/appnavbar';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import About from './pages/About';
import Touch from './pages/Get';
import Video from './components/video/video';
import Consult from './components/consult';
import Home from './pages/home';



function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/touch' element={<Touch />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;

