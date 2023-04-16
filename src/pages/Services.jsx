import React from 'react'
import '../css/pages/Services.css'
import Background from '../assets/bg.png'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div initial={{opacity:0,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}} animate={{opacity:1,clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",}} 
    exit={{clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"}} transition={{duration:0.75}} >
       <main>
    <article>



      <section className="section service has-bg-image" aria-labelledby="service-label"  style={{
              background: `url(${Background})`,
            }}
      >
        <div className="container">

          <h2 className="section-title headline-md text-center" id="service-label">My Services</h2>

          <ul className="service-list">

            <motion.li transition={{ delay: .2,duration:.7}}  initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} className="card-container">
              <div className="card card-md" style={{backgroundColor:'hsl(177, 39%, 72%)'}}>

                <div className="card-media">
                  <ion-icon name="phone-portrait-outline" aria-hidden="true"></ion-icon>
                </div>

                <div>
                  <h3 className="card-title title-sm">Front-End</h3>

                  <p className="body-sm">
                    developing new user-facing features, determining the structure and design of web pages, building reusable codes
                  </p>
                </div>

              </div>
            </motion.li>

            <motion.li transition={{ delay: .4,duration:.7 }}  initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}}  className="card-container">
              <div class="card card-md" style={{backgroundColor:'hsl(41, 99%, 64%)'}} >

                <div className="card-media">
                  <ion-icon name="laptop-outline" aria-hidden="true"></ion-icon>
                </div>

                <div>
                  <h3 className="card-title title-sm">Back-End</h3>

                  <p className="body-sm">
                    writing the web services and APIs used by front-end developers and mobile application developers
                  </p>
                </div> 

              </div>
            </motion.li>


            <motion.li transition={{ delay: .6,duration:.7 }}  initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} className="card-container">
              <div className="card card-md" style={{backgroundColor:'hsl(221, 100%, 79%)'}} >

                <div className="card-media">
                  <ion-icon name="shapes-outline" aria-hidden="true"></ion-icon>
                </div>

                <div>
                  <h3 className="card-title title-sm">video editing</h3>

                  <p className="body-sm">
                  i make fun and  interesting video's Reel's for social-Media 
                  </p>
                </div>

              </div>
            </motion.li>

    

            <motion.li transition={{ delay: .8,duration:.7 }}  initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}}  className="card-container">
              <div className="card card-md" style={{backgroundColor:'hsl(245, 100%, 90%)'}} >

                <div className="card-media">
                  <ion-icon name="globe-outline" aria-hidden="true"></ion-icon>
                </div>

                <div>
                  <h3 className="card-title title-sm">content creation</h3>

                  <p className="body-sm">
                    my posts will enhance your online presence 
                  </p>
                </div>

              </div>
            </motion.li>

          </ul>

        </div>
      </section>

    </article>
  </main>
    </motion.div>
  )
}

export default Services