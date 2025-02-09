import React from 'react'
import {  motion } from 'framer-motion'

const Transition = () => {
  return (
    <>
    <motion.div className="first-element"
    initial={{x:"100%",width:"45%"}}transition={{ease:"easeInOut",duration:0.7}} animate={{ x:"0%",width:"0%"}}
    ></motion.div>
     <motion.div className="first-element sec"
    initial={{x:"100%",width:"45%"}}transition={{ease:"easeInOut",duration:0.7,delay:0.2}} animate={{ x:"0%",width:"0%"}}
    ></motion.div>
     <motion.div className="first-element thr"
    initial={{x:"100%",width:"45%"}}transition={{ease:"easeInOut",duration:0.7 ,delay:0.4}} animate={{ x:"0%",width:"0%"}}
    ></motion.div>
    </>
  )
}

export default Transition