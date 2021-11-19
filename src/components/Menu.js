import React from 'react'
import { Router, Link } from "@reach/router"
import Home from "../pages/Home";
import About from "../pages/About";
// import SubmitRiver from "../pages/SubmitRiver";

const Menu = () => {
  return (
    <div>
      <nav className="text-right mb-16">
        <Link className="mr-4" to="/">HOME</Link>
        <Link className="mr-4" to="about">ABOUT</Link>
        {/* <Link to="submit-river">SUBMIT A RIVER</Link> */}
      </nav>

      <Router>
        <Home path="/" />
        <About path="/about" />
        {/* <SubmitRiver path="submit-river" /> */}
      </Router>
    </div>
  )
}

export default Menu
