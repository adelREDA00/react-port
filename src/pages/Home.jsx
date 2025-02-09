import React from 'react'
import photo from '../assets/h5.png'
import photo1 from '../assets/h1.png'
import photo2 from '../assets/h2.png'
import photo3 from '../assets/h3.png'
import photo4 from '../assets/h4.png'

import photocnv from '../assets/about41.png'
import cr1 from '../assets/1.svg'
import cr2 from '../assets/2.svg'
import cr3 from '../assets/3.svg'
import cr4 from '../assets/4.svg'
import cr6 from '../assets/6.svg'
import hppLogo from '../assets/hpp.svg'
import sintoLogo from '../assets/sinto.svg'
import MaidaLogo from '../assets/maidaLogo.png'
import ripbLogo from '../assets/ripb.png'
import logo from '../assets/REDA/1.svg'
import excLogo from '../assets/exc.png'
import lip from '../assets/L.png'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Transition from '../comp/Transition'

const Home = () => {
  let colors = ["hsl(177, 39%, 72%)", "hsl(41, 99%, 64%)", "hsl(245, 100%, 90%)", "hsl(19, 97%, 85%)", "hsl(19, 97%, 85%)", "white"]

  return (

    <>

      <Transition />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, }} transition={{ ease: "easeInOut", duration: 0.1, delay: .5 }}>



        <main>
          <article>



            <section className="section hero" aria-label="home">
              <div className="container">

                <div className="hero-content">

                  <motion.p transition={{ delay: .3, duration: .75 }} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className="hero-subtitle">👋, My name is REDA</motion.p>

                  <motion.h1 transition={{ ease: "easeInOut", delay: .9, duration: .4 }} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="headline-lg">I'm a Developer</motion.h1>

                  <motion.p transition={{ delay: .3, duration: .75 }} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} className="hero-text body-md">
                    Je construis des logiciels fiables et efficaces.
                  </motion.p>

                  <Link to={'/portfolio'} className='btn btn-primary'>
                    Projets
                  </Link>

                </div>

                <figure class="hero-banner">
                  <img src={photocnv}
                    className="w-100" />
                </figure>

              </div>
            </section>






            <section className="client" aria-label="Trusted client">
              <div className="container">

                <ul className="slider">


                  <motion.li transition={{ delay: 1.2 }} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} className="slider-item">
                    <img src={cr2} width="130" height="40" alt="clients" className="w-100" />
                  </motion.li>

                  <motion.li transition={{ delay: 1.3 }} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className="slider-item">
                    <img src={cr4} width="130" height="40" alt="clients" className="w-100" />
                  </motion.li>


                  <motion.li transition={{ delay: 1.4 }} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} className="slider-item">
                    <img src={cr1} width="130" height="40" alt="clients" className="w-100" />
                  </motion.li>



                  <motion.li transition={{ delay: 1.5 }} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className="slider-item">
                    <img src={cr3} width="130" height="40" alt="clients" className="w-100" />
                  </motion.li>



                  <motion.li transition={{ delay: 1.6 }} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} className="slider-item">
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

                    <img src={photo4} width="580" height="554"
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
                    Jeune développeur web passionné, je suis actuellement à la recherche d'une alternance pour approfondir mes compétences et contribuer à des projets innovants.     <br />Avec une solide base en développement Full Stack MERN et un souci du détail, je suis enthousiaste à l'idée d'apporter mes idées et ma détermination à une équipe dynamique 🚀. Prêt à collaborer pour créer les prochaines expériences numériques
                  </p>

                  <ul className="about-list">

                    <li>
                      <p className="list-text">
                        <strong className="strong title-md">+9</strong> Projets Réalisés
                      </p>
                    </li>

                    <li>
                      <p className="list-text">
                        <strong className="strong title-md">6+</strong> Happy Clients
                      </p>
                    </li>

                  </ul>

                  <div className="wrapper">
                    <a href="https://www.canva.com/design/DAF6kUX7dO0/QK1R3X2AEpeEfjGUZ7mJnw/view?utm_content=DAF6kUX7dO0&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" class="btn btn-primary">cv</a>

                    <Link to={'/portfolio'} className='btn btn-secondary'>
                      Projets
                    </Link>
                  </div>

                </div>

              </div>
            </section>




            <section className="section skill" aria-labelledby="skill-label">
              <div className="container">

                <div className="skill-content">

                  <h2 className="section-title headline-md" id="skill-label">Expertise Technologique</h2>

                  <ul className="skill-list">

                    <li>
                      <div style={{ backgroundColor: colors[0] }} className="card card-sm" >

                        <div className="card-media">
                          <ion-icon name="logo-html5"></ion-icon>
                        </div>

                        <h2 className="card-title">HTML</h2>

                      </div>
                    </li>

                    <li>
                      <div style={{ backgroundColor: colors[4] }} className="card card-sm" >

                        <div className="card-media">
                          <ion-icon name="logo-css3"></ion-icon>
                        </div>

                        <h2 className="card-title">CSS</h2>

                      </div>
                    </li>

                    <li>
                      <div style={{ backgroundColor: colors[1] }} className="card card-sm" >

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
                      <div style={{ backgroundColor: colors[0] }} className="card card-sm" >

                        <div className="card-media">
                          <ion-icon name="logo-nodejs"></ion-icon>
                        </div>

                        <h2 className="card-title">node.js</h2>

                      </div>
                    </li>




                    <li>
                      <div style={{ backgroundColor: colors[2] }} className="card card-sm" >

                        <div className="card-media">
                          <ion-icon name="layers"></ion-icon>
                        </div>

                        <h2 className="card-title">mongoDB</h2>

                      </div>
                    </li>

                    <li>
                      <div style={{ backgroundColor: colors[3] }} className="card card-sm" >

                        <div className="card-media">
                          <ion-icon name="keypad"></ion-icon>
                        </div>

                        <h2 className="card-title">Typescript</h2>

                      </div>
                    </li>

                    <li>
                      <div style={{ backgroundColor: colors[0] }} className="card card-sm" >

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
                      <div style={{ backgroundColor: colors[4] }} className="card card-sm" >

                        <div className="card-media">
                          <ion-icon name="bug"></ion-icon>
                        </div>

                        <h2 className="card-title">Django</h2>

                      </div>
                    </li>

                    <li>
                      <div style={{ backgroundColor: colors[1] }} className="card card-sm" >

                        <div className="card-media">
                          <ion-icon name="logo-react"></ion-icon>
                        </div>

                        <h2 className="card-title">Redux</h2>

                      </div>
                    </li>


                    <li>
                      <div style={{ backgroundColor: colors[2] }} className="card card-sm" >

                        <div className="card-media">
                          <ion-icon name="link-outline"></ion-icon>
                        </div>

                        <h2 className="card-title">Restful_APIs</h2>

                      </div>
                    </li>

                    <li>
                      <div style={{ backgroundColor: colors[0] }} className="card card-sm" >

                        <div className="card-media">
                        <ion-icon name="logo-wordpress"></ion-icon>
                        </div>

                        <h2 className="card-title">Wordpress</h2>

                      </div>
                    </li>


                    <li>
                      <div style={{ backgroundColor: colors[4] }} className="card card-sm" >

                        <div className="card-media">
                        <ion-icon name="code-slash-outline"></ion-icon>
                        </div>

                        <h2 className="card-title">PHP</h2>

                      </div>
                    </li>

                    <li>
                      <div style={{ backgroundColor: colors[2] }} className="card card-sm" >

                        <div className="card-media">
                        <ion-icon name="logo-github"></ion-icon>
                        </div>

                        <h2 className="card-title">Github</h2>

                      </div>
                    </li>

                    <li>
                      <div  className="card card-sm" >

                        <div className="card-media">
                        <ion-icon name="folder-outline"></ion-icon>
                        </div>

                        <h2 className="card-title">MYSQL database</h2>

                      </div>
                    </li>
                  </ul>

                </div>

                <figure className="skill-banner">
                  <img src={logo} loading="lazy"
                    alt="reda" className="w-100" />

                </figure>

              </div>
            </section>



            <br />



            <section className="cta">
              <div className="container">
                <h2 className="title-lg">Intéressé à travailler avec moi ?</h2>

                <a href="mailto: toumireda34@gmail.com" className="btn btn-tertiary">Contact</a>
              </div>
            </section>



            <section className="section testi" aria-labelledby="testi-label">
              <div className="container">

                <h2 className="headline-md section-title text-center" id="testi-label">Histoires de réussite</h2>

                <ul className="slider">

                <li className="slider-item card-container">
                    <div className="card card-lg">

                      <figure className="card-media">
                        <img src={ripbLogo} width="100" height="100" loading="lazy" alt="Jennifer Lutheran"
                          className="img-cover" />
                      </figure>

                      <div className="card-content">

                        <blockquote className="body-sm">
                        À la Rencontre Internationale Paris Berlin, un événement majeur dédié aux images en mouvement contemporaines à Paris et Berlin, j'ai travaillé en tant que développeur full-stack. Mon rôle consistait à améliorer les performances du site web et à le rendre compatible avec les appareils mobiles. J'ai également modernisé les formulaires et le code backend pour faciliter et accélérer le processus d'inscription et d'envoi des œuvres par les artistes,
                        </blockquote>

                        <p className="client-name">rencontre internationale paris berlin</p>

                        <p className="client-title">nouveau cinéma et art contemporain</p>

                      </div>

                    </div>
                  </li>

                  <li className="slider-item card-container">
                    <div className="card card-lg">

                      <figure className="card-media">
                        <img src={MaidaLogo} width="100" height="100" loading="lazy" alt="Jennifer Lutheran"
                          className="img-cover" />
                      </figure>

                      <div className="card-content">

                        <blockquote className="body-sm">
                          J'ai eu le plaisir de collaborer avec El-Maida , entreprise basée à Annaba pour construire leur site web. En utilisant React, j'ai développé un site web multipage qui permet aux utilisateurs de naviguer à travers les produits de l'entreprise et d'accéder à des informations détaillées pour chaque produit. Avec un design moderne et une expérience utilisateur rapide, j'ai utilisé les dernières technologies pour garantir que le site web répondait aux exigences du client et dépassait leurs attentes.
                        </blockquote>

                        <p className="client-name">EL MAIDA</p>

                        <p className="client-title">Production de jus, de lait et de yaourt</p>

                      </div>

                    </div>
                  </li>

                  <li className="slider-item card-container">
                    <div className="card card-lg">

                      <figure className="card-media">
                        <img src={lip} width="100" height="100" loading="lazy" alt="Jennifer Lutheran"
                          className="img-cover" />
                      </figure>

                      <div className="card-content">

                        <blockquote className="body-sm">

                          En collaboration avec Lipsan Solution, j'ai conçu leur site web d'entreprise, mettant en avant leur expertise dans les services de protection et de confort. Du montage d'ascenseurs à la télésurveillance d'alarmes, le site reflète leur approche personnalisée avec une conception sur mesure et des équipements exceptionnels. Ce projet a nécessité une étroite collaboration pour refléter la personnalité distinctive de Lipsan et leur engagement envers le bien-être de leurs clients.
                        </blockquote>

                        <p className="client-name">Lipsan Solution </p>

                        <p className="client-title">
                          Protection et Confort d'Entreprise.</p>

                      </div>

                    </div>
                  </li>

                  <li className="slider-item card-container">
                    <div className="card card-lg">

                      <figure className="card-media">
                        <img src={sintoLogo} width="100" height="100" loading="lazy" alt="Jennifer Lutheran"
                          className="img-cover" />
                      </figure>

                      <div className="card-content">

                        <blockquote className="body-sm">
                          J'ai utilisé des technologies très intéressantes telles que JavaScript, GSAP et SCSS pour construire un site web moderne et rapide. Le site web est conçu avec une mentalité de SPA pour permettre aux visiteurs de trouver facilement les derniers projets de l'agence et les informations de contact. Le design unique et moderne que j'ai créé a vraiment permis à l'agence de se démarquer de la concurrence.  J'ai également utilisé GSAP pour ajouter des animations fluides et élégantes qui ont amélioré l'interaction utilisateur.
                        </blockquote>

                        <p className="client-name">SINTO AGENCY</p>

                        <p className="client-title">Agence de Communication</p>

                      </div>

                    </div>
                  </li>

                  <li className="slider-item card-container">
                    <div className="card card-lg">

                      <figure className="card-media">
                        <img src={hppLogo} width="100" height="100" loading="lazy" alt="Jennifer Lutheran"
                          className="img-cover" />
                      </figure>

                      <div class="card-content">

                        <blockquote className="body-sm">
                          Ce projet est une application web que j'ai créée pour une organisation de lutte contre le cancer afin de gérer les données de leurs patients,Ils m'ont contacté pour développer une base de données pour le grand nombre de patients où les fichiers papier étaient difficiles à gérer. Pendant une période de 11 jours, j'ai créé une base de données en utilisant React et Django avec un tableau de bord pour l'équipe de HPP, où ils peuvent ajouter, afficher, modifier et supprimer les données des patients. En utilisant React pour le frontend et Django pour le backend, le système était rapide et efficace.
                        </blockquote>

                        <p className="client-name">HPP</p>

                        <p className="client-title">organisation de lutte contre le cancer .</p>

                      </div>

                    </div>
                  </li>

                  <li className="slider-item card-container">
                    <div className="card card-lg">

                      <figure className="card-media">
                        <img src={excLogo} width="100" height="100" loading="lazy" alt="Jennifer Lutheran"
                          className="img-cover" />
                      </figure>

                      <div className="card-content">

                        <blockquote className="body-sm">
                          J'ai travaillé pour l'Excellence Club, un grand club à l'école de management où j'ai développé un site web moderne et rapide pour répondre aux besoins du club. J'ai créé des pages d'événements et de nouvelles ainsi qu'un système de filtres moderne pour visualiser les membres du club. J'ai utilisé des bibliothèques JavaScript pour les animations et offrir une expérience utilisateur unique. J'ai travaillé avec l'équipe de communication et nous avons réussi à booster la présence en ligne du club pour atteindre 5 000 utilisateurs sur Instagram et plus de 7 000 vues, ainsi que faciliter la réservation des événements et l'obtention d'informations via le site web efficace.
                        </blockquote>

                        <p className="client-name">Excellence </p>

                        <p className="client-title">club à l'école de management</p>

                      </div>

                    </div>
                  </li>

                </ul>

              </div>
            </section>


          </article>
        </main>

      </motion.div>


    </>
  )
}

export default Home