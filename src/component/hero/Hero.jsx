import React from 'react'
import './hero.css'
import Header from '../header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from "number-counter"


const Hero = () => {
  const transition={type:'spring',duration:3}
  const mobile=window.innerWidth<=768 ? true : false;
  return (
    <div className="hero" id='Hero'>
      
      <div className="blur hero-blur"></div>
       <div className="leftHero">
        {/* Hero header */}
            <Header/>
        {/*hero add div */}
            <div className="the-add">
              <motion.div
                initial={{left:mobile ? '168px':'238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition,type:'tween'}}  
                          
              >
              </motion.div>
              <span>THE BEST FITNESS CLUB IN THE TOWN</span>
            </div> 
        {/* hero heading */}
            <div className="hero-heading">
              <div >
                <span className='stroke-text'>SHAPE </span>
                <span>YOUR</span>
              </div>
              <div>
                <span>IDEAL BODY</span>
              </div>
              <div>
                <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
              </div>
            </div>
        {/* figures */}
            <div className="figures">
              <div>
                <span>
                  <NumberCounter end={150} start={100} delay='4' preFix='+'/>
                </span>
                <span>ECXPERT COACHES</span>
              </div>
              <div>
                <span>
                <NumberCounter end={999} start={900} delay='4' preFix='+'/>
                </span>
                <span>MEMBERSHIP JOINED</span>
              </div>
              <div>
                <span>
                <NumberCounter end={100} start={60} delay='4' preFix='+'/>
                </span>
                <span>FITNESS PROGRAMS</span>
              </div>
            </div>
          {/*  hero buttons */}
             <div className="heroButtons">
               <button className="btn">Get Started</button>
               <button className="btn">Learn More</button>
             </div>
       </div>
       <div className="rightHero">
         <button className='btn'>Join Now</button>


        <motion.div 
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className='hero_image' />
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition} 
        src={hero_image_back} alt="" className='hero_image_back' />
        {/* Calories card */}
        <motion.div
        initial={{right:'37rem'}}
        whileInView={{right:'28rem'}}
        transition={transition} 
        className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>500 kacl</span>
            
          </div>
        </motion.div>
       </div>
    </div>
  )
}

export default Hero