import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";


function Root() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Courses/>
    </div>
  )
}

export default Root
