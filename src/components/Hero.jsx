import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../utils/motion'

 const   Hero = () => {

  return (
    <>
        <div className="hero">
            <div className="container pt-5">
                <motion.div className="row w-100 mx-0 hero-section" variants={staggerContainer} initial="hidden" whileInView="show">
                    <motion.div
                     className="col-6  px-0 upper-left-side"
                    variants={fadeIn("left","tween",1,1,)}
                    viewport={{once:false,amount:0.25}}
                    
                   >
                       <h1>
                       Hey There, <br />
                       I'm Talha.
                       </h1>
                    </motion.div>
                    <motion.div className="col-6  px-0 upper-right-side"
              
                    variants={fadeIn("right","tween",1,1,)}
                    
                    >
                       <p>
                       I design beautiful simple<br />
                       things, And I love what i do
                       </p>
                    </motion.div>
                    <motion.div className="col-6  mb-0 mb-lg-2 py-2  px-0 bottom-left-side"
                  
                    variants={fadeIn("left","tween",1,1,)}
                    
                    >
                      <span className='ten' >
                        10
                      </span>
                      <span className='years'>
                       Years<br/>Experience
                      </span>
                    </motion.div>
                    <motion.div className="col-6 mb-0 mb-lg-2 py-2  px-0 bottom-right-side"
                    
                    variants={fadeIn("right","tween",0.3,1,)}
                    
                    >
                      <span className='certicate'>
                        <img src="./certificate.png" alt="" width="20%" />
                    
                      <p>
                      CERTIFIED PROFATIONAL<br />
                      Web And Mobile App Developer
                      </p>
                      </span>
                    </motion.div>
                    <div className="email">
                        <a href="Mailto:shykhtalha33@gmail.com"> shykhtalha33@gmail.com</a>
                       
                    </div>
                    <motion.div className="person"
                  variants={fadeIn("down","tween",0.3,1)}
                    >
                        <motion.img  variants={slideIn("down","tween",0.5,1.5)} src="./talha.png" alt="" height="450px" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </>
  )
}
export default Hero
