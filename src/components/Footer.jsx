import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn, staggerChildren, zoomIn } from '../utils/motion'

const Footer = () => {
  return (
    <>
       <motion.footer variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once:false,amount:0.25}}  >
          <motion.div className="container py-5" variants={fadeIn("down","spring",0.5,1)}>
            <div className="row">
                <div className="col-md-7 col-lg-5 px-2 px-md-0 left-side">
                   <h1>Let's make something<br />
                       amazing together.
                   </h1>
                   <p>
                         Start by <span>saying hi</span>
                   </p>
                </div>
                <div className="col-md-2 mx-auto px-2 px-md-0 right-side ">
                     <p>Information</p>
                     <p>145 New York, FL 5467, USA</p>
                     <p>Services</p>
                     <p>Works</p>
                     <p>Notes</p>
                     <p>Experience</p>
                </div>
            </div>
          </motion.div>
       </motion.footer>
    </>
  )
}

export default Footer