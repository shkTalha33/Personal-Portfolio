import React from 'react'
import { motion } from 'framer-motion'
import { workExp } from '../utils/data'
import { fadeIn, staggerChildren, textVariant, zoomIn } from '../utils/motion'
const Work = () => {
  return (
    <>
    <a className="anchor" id="experience"></a>
    <motion.div className="work" variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once:false,amount:0.25}}>
        <div className="container py-5">
            <div className="row">
                    <h1 className='my-5 expHeading '>My Work Experience</h1>
                <div className="col px-0 work-section mt-3">
                   {workExp.map((exp,i)=>{
                     return(
                       <motion.div variants={textVariant} className='experience-section ' key={i}>
                           <div className="col-6 px-2 post">
                             <h1>{exp.place}</h1>
                             <p>{exp.tenure}</p>
                           </div>
                           <div className="col-6 px-2 role">
                             <h1>{exp.role}</h1>
                             <p>{exp.detail}</p>
                           </div>
                        </motion.div>
                      )
                    })}
                   <motion.div variants={zoomIn(1,1)} className="progress-line">
                      <motion.div variants={fadeIn("up","tween",2,1.5)} className="line"></motion.div>
                      <div><div className="circle " style={{backgroundColor:"#286F6C"}}></div></div>
                      <div ><div className="circle" style={{backgroundColor:"#F2704E"}}></div></div>
                      <div><div className="circle" style={{backgroundColor:"#EEC048"}}></div></div>
                   </motion.div>
                </div>
            </div>
        </div>
    </motion.div>
                    </>
  )
}

export default Work