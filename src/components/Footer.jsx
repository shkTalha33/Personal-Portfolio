import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn, staggerChildren, zoomIn } from '../utils/motion'

const Footer = () => {
  return (
    <>
       <motion.footer variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once:true,amount:0.25}}  >
          <motion.div className="container py-5" variants={fadeIn("down","spring",0.5,1)}>
            <div className="row">
                <div className="col-md-7 col-lg-5 px-2 px-md-0 left-side">
                   <h1>Let's make something<br />
                       amazing together.
                   </h1>
                   <p>
                         Start by <span><a href="Mailto:shykhtalha33@gmail.com">saying hi</a></span>
                   </p>
                </div>
                <div className="col-md-2 mx-auto px-2 px-md-0 right-side ">
                     <p style={{textDecoration:"none",cursor:"default"}}>Information</p>
                     <p><a href="https://www.google.com/maps/search/?api=1&query=Gulfishan+Colony,+Faisalabad,+Pakistan" target="_blank">
                        Gulfishan Colony, Faisalabad, Pakistan
                    </a></p>
                     <p><a href="#services">SERVICES</a></p>
                     <p><a href="#experience">EXPERIENCE</a></p>
                     <p><a href="#testimonials">TESTIMONIALS</a></p>
                     <p><a href="#portfolio">PORTFOLIO</a></p>
                </div>
            </div>
          </motion.div>
       </motion.footer>
    </>
  )
}

export default Footer