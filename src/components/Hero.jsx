import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../utils/motion'

 const   Hero = () => {

  return (
    <>
        <div className="hero">
            <div className="container pt-5">
                <motion.div className="row w-100 mx-0 hero-section" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:true,amount:0.25}}>
                    <motion.div
                     className="col-6  px-0 upper-left-side"
                    variants={fadeIn("left","tween",.5,0.8)}
                    
                   >
                       <h1>
                       Hey There, <br />
                       I'm Talha.
                       </h1>
                    </motion.div>
                    <motion.div className="col-6  px-0 upper-right-side"
              
                    variants={fadeIn("right","tween",.5,.8)}
                    
                    >
                       <p>
                       I build beautiful and responsive<br />
                       websites, And I love what i do
                       </p>
                    </motion.div>
                    <motion.div className="col-6  mb-0 mb-lg-2 py-2  px-0 bottom-left-side"
                  
                    variants={fadeIn("left","tween",.5,.8)}
                    
                    >
                      <span className='ten' >
                        3
                      </span>
                      <span className='years'>
                       Years<br/>Experience
                      </span>
                    </motion.div>
                    <motion.div className="col-6 mb-0 mb-lg-2 py-2  px-0 bottom-right-side"
                    
                    variants={fadeIn("right","tween",0.5,.8)}
                    
                    >
                      <span className='certicate'>
                        <img src="./certificate.png" alt="" width="20%" />
                    
                      <p>
                      CERTIFIED PROFATIONAL<br />
                      Web App Developer
                      </p>
                      </span>
                    </motion.div>
                    <div className="email">
                        <a href="Mailto:shykhtalha33@gmail.com"> shykhtalha33@gmail.com</a>
                       
                    </div>
                    <motion.div className="person"
                  variants={fadeIn("down","tween",0.5,.8)}
                    >
                        <motion.img  variants={slideIn("down","tween",0.5,1)} src="talha.png" alt="" height="450px" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </>
  )
}
export default Hero
