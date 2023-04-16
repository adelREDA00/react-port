import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  const [change , setChange] = useState(false)


  const handleCheke = (event)=>{
    setChange(!change)
  }
  
    //all this need to be in useeffet 
  const navRef = useRef(null)
  const headRef = useRef(null)

 
const Handlenav = ()=>{
  navRef.current.classList.toggle("active")
}

//fix the line when you are in page
const [line , setLine] = useState(null)

const handleClose = (e)=>{
window.scrollTo(0, 0);
navRef.current.classList.remove("active")
setChange(!change)
}
  
const activeHeader = function () {
  window.scrollY > 50 ? headRef.current.classList.add("active")
    : headRef.current.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);

  return (
    <motion.div initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
     >
        <header ref={headRef} className="header" data-header>
    <div className="container">

      <a href="#" className="logo">
      
      </a>

      <nav ref={navRef} className="navbar" data-navbar>
        <ul className="navbar-list">

          <li className="navbar-item">
          <Link onClick={handleClose}  to={'/'} className={`label-lg navbar-link has-after `}>
          HOME
          </Link>
          </li>

          <li className="navbar-item">
          <Link onClick={handleClose}  to={'/services'} className={`label-lg navbar-link has-after  `}>
          services
          </Link>
          </li>

          <li className="navbar-item">
          <Link onClick={handleClose}  to={'/portfolio'} className={`label-lg navbar-link has-after  `}>
          Portfolio
          </Link>
          </li>

   

        </ul>
      </nav>

  

      <button className="nav-toggle-btn" aria-label="menu" data-nav-toggler>
        <div id="webapp_cover">
          <div id="menu_button">
            <input onChange={handleCheke} type="checkbox" checked={change} id="menu_checkbox" />
            <label onClick={Handlenav} htmlFor="menu_checkbox" id="menu_label"  >
              <div id="menu_text_bar"></div>
            </label>
          </div>
        </div>
      </button>

    </div>
  </header>


    </motion.div>
  )
}

export default Header