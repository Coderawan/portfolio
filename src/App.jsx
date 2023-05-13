import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Service from './component/Service';
import Header from './component/Header';
import Footer from './component/Footer';
import Gallery from './component/Gallery';


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
    <Footer/>
    </>
  );
};

export default App;