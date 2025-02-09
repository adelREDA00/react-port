import React from 'react'
import '../css/pages/Services.css'
import Background from '../assets/bg.png'
import { motion } from 'framer-motion'
import Transition from '../comp/Transition'

const Services = () => {




  return (
    <>


    <Transition/>
    <motion.div initial={{opacity:0}} animate={{opacity:1}}  exit={{opacity:0,}} transition={{ease:"easeInOut",duration:0.1,delay:.4}} >
       <main>
    <article>



      <section className="section service has-bg-image" aria-labelledby="service-label"  style={{
              background: `url(${Background})`,
            }}
      >
        <div className="container">

          <h2 className="section-title headline-md text-center" id="service-label">Mes Services</h2>

          <ul className="service-list">

            <motion.li transition={{ delay: .2,duration:.7}}  initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} className="card-container">
              <div className="card card-md" style={{backgroundColor:'hsl(177, 39%, 72%)'}}>

                <div className="card-media">
                  <ion-icon name="phone-portrait-outline" aria-hidden="true"></ion-icon>
                </div>

                <div>
                  <h3 className="card-title title-sm">Front-End</h3>

                  <p className="body-sm">
              
                 je crée un design attractif pour améliorer l'expérience utilisateur sur les sites web. Mon objectif est d'optimiser la navigation et d'assurer une interface utilisateur intuitive.
                 <br />
                 <br />
    
                  </p>
                </div>

              </div>
            </motion.li>

            <motion.li transition={{ delay: .4,duration:.7 }}  initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}}  className="card-container">
              <div class="card card-md" style={{backgroundColor:'hsl(41, 99%, 64%)'}} >

                <div className="card-media">
                  <ion-icon name="laptop-outline" aria-hidden="true"></ion-icon>
                </div>

                <div>
                  <h3 className="card-title title-sm">Back-End</h3>

                  <p className="body-sm">
                   je travaille en coulisses pour écrire des codes et des services web, assurant la robustesse technique et fournissant les outils nécessaires aux développeurs Front-End et créateurs d'applications.
                  </p>
                </div> 

              </div>
            </motion.li>


            <motion.li transition={{ delay: .6,duration:.7 }}  initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} className="card-container">
              <div className="card card-md" style={{backgroundColor:'hsl(221, 100%, 79%)'}} >

                <div className="card-media">
                  <ion-icon name="shapes-outline" aria-hidden="true"></ion-icon>
                </div>

                <div>
                  <h3 className="card-title title-sm">video editing</h3>

                  <p className="body-sm">
                  Je crée des vidéos amusantes et captivantes, en particulier des Reels pour les médias sociaux. Mon approche créative vise à apporter une dimension divertissante à votre présence en ligne. 
                  </p>
                </div>

              </div>
            </motion.li>

    

            <motion.li transition={{ delay: .8,duration:.7 }}  initial={{opacity:0,y:50}} animate={{opacity:1,y:0}}  className="card-container">
              <div className="card card-md" style={{backgroundColor:'hsl(245, 100%, 90%)'}} >

                <div className="card-media">
                  <ion-icon name="globe-outline" aria-hidden="true"></ion-icon>
                </div>

                <div>
                  <h3 className="card-title title-sm">content creation</h3>

                  <p className="body-sm">
                  Mes publications sont élaborées pour améliorer votre visibilité en ligne. Avec créativité et stratégie, je conçois du contenu engageant pour susciter l'intérêt de votre audience.
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

    </>
  )
}

export default Services