import React, { useEffect, useState, useRef } from 'react';
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { getMenuStyles, headerVarient } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpened(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpened((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpened(false); 
  };

  return (
    <>
      <motion.header
        variants={headerVarient}
        animate="show"
        initial="hidden"
        style={{
          boxShadow:  headerShadow ,
          position: showShadow ? 'fixed' : 'relative',
          top: 0,
          width: '100%',
          zIndex: 1000,
          opacity: showShadow ? 0.2 : 1, 
        }}
      >
        <div className="container nav pt-3 pb-2" ref={menuRef}>
          <div className="row w-100">
            <div className="col-10 col-lg-4 name">
              <motion.p>Talha Dev</motion.p>
            </div>
            <div className="col-2 col-lg-8  menu-section">
              <ul className="menu" style={getMenuStyles(menuOpened)}>
                <li onClick={handleLinkClick}>
                  <a href="#services">SERVICES</a>
                </li>
                <li onClick={handleLinkClick}>
                  <a href="#experience">EXPERIENCE</a>
                </li>
                <li onClick={handleLinkClick}>
                  <a href="#portfolio">PORTFOLIO</a>
                </li>
                <li onClick={handleLinkClick}>
                  <a href="#testimonials">TESTIMONIALS</a>
                </li>
                <li className="cell">
                  <span>03187019892</span>
                  <a className="icon" href="tel:+923187019892">
                    <BiPhoneCall />
                  </a>
                </li>
              </ul>
              <div className="menu-button" onClick={handleMenuToggle}>
                <BiMenuAltRight size={30} />
              </div>
            </div>
          </div>
        </div>
      </motion.header>
      {/* Add a placeholder element to ensure content doesn't jump */}
      <div style={{ height: showShadow ? '80px' : 0 }} />
    </>
  );
};

export default Header;
