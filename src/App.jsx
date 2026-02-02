import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Courselist from "./Components/Courselist";
import Login from "./Components/Login";
import TestimonialList from "./Components/TestimonialList"
import Footer from "./Components/Footer";
import Home from "./Components/Home";



const App = () => {
  return (
    <>



      
      <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/courses" element = {<Courselist/>}/>
          <Route path="/testimonials" element = {<TestimonialList/>}/>
          <Route path="/contact" element = {<Login/>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
      

    </>
  );
};

export default App;
