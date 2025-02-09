import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Header = () => {
//nav link class activation
  const location = useLocation();

  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  
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

const handleClose = ()=>{
navRef.current.classList.remove("active")
setChange(!change)
}
  
const activeHeader = function () {
  window.scrollY > 50 ? headRef.current.classList.add("active")
    : headRef.current.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);

  return (
    <div
     >
        <header ref={headRef} className="header" data-header>
    <div className="container">

      <a href="#" className="logo">
      
      </a>

      <nav ref={navRef} className="navbar" data-navbar>
        <ul className="navbar-list">

          <li className="navbar-item">
          <Link onClick={handleClose}  to={'/'} className={`label-lg navbar-link has-after ${url ==="/" ? 'active' : ''}  `}>
          ACCUEIL
          </Link>
          </li>

          <li className="navbar-item">
          <Link onClick={handleClose}  to={'/services'} className={`label-lg navbar-link has-after ${url ==="/services" ? 'active' : ''}  `}>
          SERVICES
          </Link>
          </li>

          <li className="navbar-item">
          <Link onClick={handleClose}  to={'/portfolio'} className={`label-lg navbar-link has-afte ${url ==="/portfolio" ? 'active' : ''}  `}>
          Projets
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


    </div>
  )
}

export default Header