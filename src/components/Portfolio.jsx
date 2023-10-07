import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerChildren } from '../utils/motion'
const Portfolio = () => {
  return (
    <>
    <a className="anchor" id="portfolio"></a>
       <motion.div className="portfolio py-5" variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once:false,amount:0.25}}>
        <div className='container'>
            <div className="row">
                <div className="col px-0 portfolio-heading px-3">
                    <motion.h1 variants={fadeIn("up","tween",0.5,1.3)}>My Latest Works</motion.h1>
                </div>
            </div>
            <div className="row ">
                <div  className="col px-0 portfolio-details my-3 px-3">
                    <motion.p  variants={fadeIn("down","tween",0.4,1)} className='work-exp '>Perfect solution for digital experience</motion.p>
                    <motion.p variants={fadeIn("down","tween",0.4,1)} className='explore'>Explore More Works</motion.p>
                </div>
            </div>
            <div className="row ">
                <div  className="col px-0 portfolio-images my-3 px-3">
                     <div className="col-md-3">
                        <motion.img variants={fadeIn("down","tween",0.8,1)} src="./showCase1.png" alt="" width="100%" />
                     </div>
                     <div className="col-md-3">
                        <motion.img variants={fadeIn("down","tween",1,1)} src="./showCase2.png" alt="" width="100%" />
                     </div>
                     <div className="col-md-3">
                        <motion.img variants={fadeIn("down","tween",1.2,1)} src="./showCase3.png" alt="" width="100%" />
                     </div>
                </div>
            </div>
        </div>
       </motion.div>
    </>
  )
}

export default Portfolio