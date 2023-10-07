import React, { useEffect, useState } from 'react'
import {BiMenuAltLeft, BiMenuAltRight, BiPhoneCall} from "react-icons/bi"
import {motion} from "framer-motion"
import { getMenuStyles, headerVarient } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'

const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false)
  const headerShadow = useHeaderShadow()

  return (
    <>
        <motion.header
        variants={headerVarient}
        animate="show" 
        initial="hidden"  
        style={{headerShadow}}
      >
      <div   className="container nav pt-3 pb-2">
           <div className="row w-100">
              <div className="col-10 col-lg-4 name">
                 <motion.p >Talha Dev</motion.p>
              </div>
              <div className="col-2 col-lg-8  menu-section">
                 <ul className='menu' style={getMenuStyles(menuOpened)}>
                  <li><a href="#services">SERVICES</a></li>
                  <li><a href="#experience">EXPERIENCE</a></li>
                  <li><a href="#portfolio">PORTFOLIO</a></li>
                  <li><a href="#testimonials">TESTIMONAILS</a></li>
                  <li className='cell'>
                    <span>03187019892</span>
                    <span className='icon'>{<BiPhoneCall />}</span>
                  </li>
                 </ul>
                 <div className="menu-button" onClick={()=>setmenuOpened((prev)=>!prev)}>
                  <BiMenuAltRight size={30}/>
                 </div>
              </div>
           </div>
           </div>
      </motion.header>
    </>
  )
}

export default Header