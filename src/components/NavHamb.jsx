import React, { useState, useRef } from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";
// import { navbarLink } from '../data/data'
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";


const navbarLink = [
  { id: 'sales', name: 'Sales' },
  { id: 'plants', name: 'Plants' },
  { id: 'plant-care', name: 'Plant Care' },
  { id: 'pots', name: 'Pots' },
  { id: 'supplies', name: 'Supplies' },
  { id: 'gift-ideas', name: 'Gift Ideas' },
 ]

const NavHamb = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleNavHambBtn = () => {
    setNavbarOpen(!navbarOpen)
  }

  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // }

    // <Link to='/' className="nav-logo" spy={true} smooth={true} offset={-70} duration={500}>
    // </Link>
    // <IconContext.Provider value={{
    //   className: 'nav-contact-icons',
    //   size: 0,
    //   gap: 50,
    //   backgroundColor: 'transparent',
    //   style: { cursor: "pointer" }
    // }}>
    // </IconContext.Provider>

  return (
    <div className="navBar">
      <button className='menu-button' onClick={handleNavHambBtn || ''}>
        {navbarOpen ? '' : <FiMenu className='navHamb-close w-10 h-10' /> }
      </button>
      <div className={`menuNav w-0  absolute top-0 left-0 text-justify overflow-hidden z-10 cursor-pointer ${navbarOpen ? "showMenu w-3/4 h-[90vh]  bg-red-300" : ''}`}>
        <div className="navHamb-open-header w-full h-8 bg-green-400 flex items-center justify-between px-4">
          <span className=''>Shop</span>
          <button className='' onClick={handleNavHambBtn}>x</button>
        </div>
        <ul className='w-full absolute top-1/4'>
          {navbarLink?.map((link, id) =>
            <div key={id} >
              <li key={link.id} className='navbar-items border-b border-slate-200 p-4' onClick={() => setNavbarOpen(false)}>
                {link.name}
              </li>
            </div>
          )}
        </ul>

      </div>
    </div>
  )
}

export default NavHamb
