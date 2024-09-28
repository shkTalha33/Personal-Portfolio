import React, { useState } from 'react'
import {projectExperience} from "../utils/data"
import { Card} from 'antd'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren } from '../utils/motion'
import CounterUpPage from '../hooks/useCounterUpPage'
import ScrollTrigger from 'react-scroll-trigger'

const Services = () => {

    const [counterOn, setCounterOn] = useState(false)

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
    <a className="anchor" id="services"></a>
        <motion.div className="services" variants={staggerChildren} initial="hidden" whileInView="show"  viewport={{once:true,amount:0.25}}>
            <div className="container py-5">
                <div className="row px-0 services-section">
                    <div  className="col-md-6 col-lg-5 left-side">
                           {projectExperience.map((doc,i)=>{
                               return(
                               
                                 <motion.Card variants={fadeIn("left","tween",(i + 1) * .166,1)} className='card' key={i} hoverable={true} style={{margin:"20px 0px",borderRadius:20}}>
                                <div className='card-icon col-2' >{< doc.icon  style={{backgroundColor:doc.bg,}} />}</div>
                                <div className='card-detail col-10'>
                                    <p className='name'>{doc.name}</p>
                                    <p className='projects'>{doc.projects} Projects</p>
                                </div>

                         </motion.Card>
                             )
                           })}
                    </div>
                    <motion.div variants={fadeIn("right","tween",.5,1)} className="col-md-6 col-lg-5 right-side mt-2">
                         <h1 className="help">
                             What do I help?
                         </h1>
                         <p className='help-detail'>
                         I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.<br /><br />
                         We use process design to create digital products. Besides that also help their business
                         </p>
                         <div className="overview">
                            <div className="col-6 project">
                               <p>{counterOn &&  <CounterUpPage end={35} />}+</p>
                               
                               <p> Project  Completed</p>
                            </div>
                            <div className="col-6 client">
                               <p>{counterOn && <CounterUpPage end={30} />}+</p>
                               <p> Happy  Client</p>
                            </div>
                         </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </ScrollTrigger>
  )
}

export default Services