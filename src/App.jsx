import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/appnavbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import About from './pages/About';
import Touch from './pages/Get';
import Video from './components/video/video';
import Consult from './components/consult';



function App() {
  return (
    <>
       <Router>
      <Routes>
        <Route path='/menu' element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path='/touch' element={<Touch/>}/>
      </Routes> 
      <Header />
      <Section1 />
      <Consult/>
      <Video/>
      <Section2 />
      <Section5 />
      <Section3 />
      <Section4 />
      <Footer />
      </Router>  

    </>
  )
}

export default App;
