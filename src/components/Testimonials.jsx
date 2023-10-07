import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { comments } from '../utils/data';
import { Divider } from 'antd';
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren } from '../utils/motion';

const  Testimonials = () => {
  return (
    <>
    <a className="anchor" id="testimonials"></a>
       <motion.div className="testimonials my-5" variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once:false,amount:0.25}}>
        <motion.div className="container" variants={fadeIn("down","tween",0.5,1)} >
            <div className="row">
                <div className="col-lg-6 about-section text-center m-auto">
                  <h1 className='mb-3'>People talk about us</h1>
                    <p className='px-2 mb-5 col-md-8 m-auto'>
                    I got a job that was in accordance with the salary and field of workThe process of submitting an appilication was quite cosy
                    </p>
                </div>
                <div className="col px-3 px-sm-1 my-5">
                <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[ Pagination]}
        className="mySwiper"
      >
        {comments.map((comment,i)=>{
            
         return(
            <>
               <SwiperSlide key={i} className='person-section'>
                  <img src={comment.img} alt="" />
                  <p className='comment'>{comment.comment}</p>
                  <Divider  />
                  <h2 className='name'>{comment.name}</h2>
                  <p className='post'>{comment.post}</p>
               </SwiperSlide>
            </>
     )
    })}
      </Swiper>
                </div>
            </div>
        </motion.div>
       </motion.div>
    </>
  )
}
export default Testimonials

 