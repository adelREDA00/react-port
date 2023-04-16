import React, { useRef } from 'react'
import photo from '../assets/about1.png'
import photo1 from '../assets/about2.png'
import photo2 from '../assets/about3.png'
import photo3 from '../assets/about4.png'
import cr1 from '../assets/1.svg'
import cr2 from '../assets/2.svg'
import cr3 from '../assets/3.svg'
import cr4 from '../assets/4.svg'
import cr6 from '../assets/6.svg'
import logo from '../assets/REDA/1.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  let colors = ["hsl(177, 39%, 72%)","hsl(41, 99%, 64%)","hsl(245, 100%, 90%)","hsl(19, 97%, 85%)","hsl(19, 97%, 85%)","white"]

  return (
    <motion.div initial={{opacity:0,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}} animate={{opacity:1,clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",}} 
    exit={{clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",}} transition={{duration:0.75}}> 



      <main>
        <article>



          <section className="section hero" aria-label="home">
            <div className="container">

              <div className="hero-content">

                <motion.p  transition={{ delay: .3,duration:.75 }}  initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} className="hero-subtitle">👋, My name is REDA</motion.p>

                <motion.h1  transition={{ ease: "easeInOut",delay: .9,duration:.4 }} initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} className="headline-lg">I'm a Developer</motion.h1>

                <motion.p  transition={{ delay: .3,duration:.75}} initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} className="hero-text body-md">
                  i build Reliable and Efficient software
                </motion.p>

                <Link   to={'/portfolio'} className='btn btn-primary'>
                Portfolio
                </Link>

              </div>

              <figure className="hero-banner">

              </figure>

            </div>
          </section>






          <section className="client" aria-label="Trusted client">
            <div className="container">

              <ul className="slider">


                <motion.li transition={{ delay: 1.2 }} initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} className="slider-item">
                  <img src={cr2} width="130" height="40" alt="clients" className="w-100" />
                </motion.li>

                <motion.li transition={{ delay: 1.3 }} initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}  className="slider-item">
                  <img src={cr4} width="130" height="40" alt="clients" className="w-100" />
                </motion.li>


                <motion.li transition={{ delay: 1.4 }} initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}}  className="slider-item">
                  <img src={cr1} width="130" height="40" alt="clients" className="w-100" />
                </motion.li>



                <motion.li transition={{ delay: 1.5 }} initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}  className="slider-item">
                  <img src={cr3} width="130" height="40" alt="clients" className="w-100" />
                </motion.li>



                <motion.li  transition={{ delay: 1.6 }} initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}}  className="slider-item">
                  <img src={cr6} width="130" height="40" alt="clients" className="w-100" />
                </motion.li>

              </ul>


            </div>
          </section>





          <section className="section about" aria-label="about me">

            <div className="container">

              <div className="Nslider">
                <figure className="about-banner">
                  <img src={photo} width="580" height="554"
                    alt="REDA" className="w-100" />

                  <img src={photo1} width="580" height="554"
                    alt="REDA" className="w-100" />

                  <img src={photo2} width="580" height="554"
                    alt="REDA" className="w-100" />

                  <img src={photo3} width="580" height="554"
                    alt="REDA" className="w-100" />

                  <img src={photo} width="580" height="554"
                    alt="REDA" className="w-100" />

                  <img src={photo1} width="580" height="554"
                    alt="REDA" className="w-100" />

                  <img src={photo2} width="580" height="554"
                    alt="REDA" className="w-100" />

                  <img src={photo3} width="580" height="554"
                    alt="REDA" className="w-100" />

                </figure>
              </div>

              <div className="about-content">

                <h2 className="title-lg">Full-Stack Developer & Designer </h2>

                <p className="body-md section-text">
                  je suis un développeur full-stack  je me spécialise dans l'utilisation de React.Js et Node.Js "MERN stack" pour créer des applications web robustes et dynamiques. Je suis également parfaitement à l'aise avec d'autres technologies clés telles que Django , qui me permettent de concevoir des sites web personnalisés et optimisés pour répondre à vos besoins uniques.. C'est un peu comme jongler avec des balles en feu, mais avec des langages de programmation.En plus  je suis  un créateur passionné de vidéos et de posts pour les réseaux sociaux , hautement qualifié et motivé, déterminé à fournir des résultats exceptionnels. Je suis confiant dans mes capacités à développer des applications web dynamiques et engageantes, et je suis enthousiaste à l'idée de collaborer avec vous pour donner vie à votre vision.
                </p>

                <ul className="about-list">

                  <li>
                    <p className="list-text">
                      <strong className="strong title-md">+9</strong> Projet Completed
                    </p>
                  </li>

                  <li>
                    <p className="list-text">
                      <strong className="strong title-md">4+</strong> Happy Clients
                    </p>
                  </li>

                </ul>

                <div className="wrapper">
                  <a href="https://www.canva.com/design/DAFfSLdOGMA/view" target="_blank" class="btn btn-primary">cv</a>

                  <Link   to={'/portfolio'} className='btn btn-secondary'>
                Portfolio
                </Link>
                </div>

              </div>

            </div>
          </section>




          <section className="section skill" aria-labelledby="skill-label">
            <div className="container">

              <div className="skill-content">

                <h2 className="section-title headline-md" id="skill-label">My Skills</h2>

                <ul className="skill-list">

                  <li>
                    <div style={{backgroundColor: colors[0] }} className="card card-sm" >

                      <div className="card-media">
                        <ion-icon name="logo-html5"></ion-icon>
                      </div>

                      <h2 className="card-title">HTML</h2>

                    </div>
                  </li>

                  <li>
                    <div style={{backgroundColor: colors[4] }}  className="card card-sm" >

                      <div className="card-media">
                        <ion-icon name="logo-css3"></ion-icon>
                      </div>

                      <h2 className="card-title">CSS</h2>

                    </div>
                  </li>

                  <li>
                    <div style={{backgroundColor: colors[1] }}  className="card card-sm" >

                      <div className="card-media">
                        <ion-icon name="logo-javascript"></ion-icon>
                      </div>

                      <h2 className="card-title">Javascript</h2>

                    </div>
                  </li>

                  <li>
                    <div className="card card-sm" >

                      <div className="card-media">
                        <ion-icon name="logo-react"></ion-icon>
                      </div>

                      <h2 className="card-title">React JS</h2>

                    </div>
                  </li>

                  <li>
                    <div style={{backgroundColor: colors[0] }}  className="card card-sm" >

                      <div className="card-media">
                        <ion-icon name="logo-nodejs"></ion-icon>
                      </div>

                      <h2 className="card-title">node.js</h2>

                    </div>
                  </li>

         


                  <li>
                    <div style={{backgroundColor: colors[2] }}  className="card card-sm" >

                      <div className="card-media">
                      <ion-icon name="layers"></ion-icon>
                      </div>

                      <h2 className="card-title">mongoDB</h2>

                    </div>
                  </li>

                  <li>
                    <div style={{backgroundColor: colors[3] }}  className="card card-sm" >

                      <div className="card-media">
                        <ion-icon name="keypad"></ion-icon>
                      </div>

                      <h2 className="card-title">Typescript</h2>

                    </div>
                  </li>

                  <li>
                    <div style={{backgroundColor: colors[0] }}  className="card card-sm" >

                      <div className="card-media">
                      <ion-icon name="brush"></ion-icon>
                      </div>

                      <h2 className="card-title">Sass</h2>

                    </div>
                  </li>

                  <li>
                    <div className="card card-sm" >

                      <div className="card-media">
                        <ion-icon name="logo-python"></ion-icon>
                      </div>

                      <h2 className="card-title">Python</h2>

                    </div>
                  </li>

                  <li>
                    <div style={{backgroundColor: colors[4] }}  className="card card-sm" >

                      <div className="card-media">
                      <ion-icon name="bug"></ion-icon>
                      </div>

                      <h2 className="card-title">Django</h2>

                    </div>
                  </li>

                  <li>
                    <div style={{backgroundColor: colors[1] }}  className="card card-sm" >

                      <div className="card-media">
                      <ion-icon name="logo-react"></ion-icon>
                      </div>

                      <h2 className="card-title">Redux</h2>

                    </div>
                  </li>
        

                  <li>
                    <div style={{backgroundColor: colors[2] }}  className="card card-sm" >

                      <div className="card-media">
                        <ion-icon name="link-outline"></ion-icon>
                      </div>

                      <h2 className="card-title">Restful_APIs</h2>

                    </div>
                  </li>




                </ul>

              </div>

              <figure className="skill-banner">
                <img src={logo} width="581" height="657" loading="lazy"
                  alt="reda" className="w-100" />
              </figure>

            </div>
          </section>



          <br />



          <section className="cta">
            <div className="container">
              <h2 className="title-lg">Intrested working with me?</h2>

              <a href="mailto: toumireda34@gmail.com" className="btn btn-tertiary">Contact Now</a>
            </div>
          </section>






        </article>
      </main>

    </motion.div>
  )
}

export default Home