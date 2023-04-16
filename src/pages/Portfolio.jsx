import React, { useRef, useState } from 'react'
import '../css/pages/Portfolio.css'
import shopdz from '../assets/shopdz.png'
import bloom from '../assets/bloom.png'
import marx from '../assets/marx.png'
import oikos from '../assets/oikos.png'
import hpp from '../assets/REACT.png'
import exce from '../assets/exce.png'
import lab from '../assets/labs.png'
import esm from '../assets/esmbl.png'
import admin from '../assets/admin.png'
import ws from '../assets/ws.png'
import wather from '../assets/wather.png'
import rand from '../assets/rand.png'
import quizz from '../assets/quizz.png'
import reel4 from '../assets/4.png'
import reel1 from '../assets/1.png'
import reel0 from '../assets/10.png'
import reel2 from '../assets/2.png'
import reel3 from '../assets/3.png'
import reel5 from '../assets/5.png'
import reel6 from '../assets/6.png'
import reel7 from '../assets/7.png'
import reel8 from '../assets/8.png'
import reel9 from '../assets/9.png'
import Card from '../comp/Card'
import { motion } from 'framer-motion'
const Portfolio = () => {

    const WebProjects = [
        {
            img:shopdz,
            tag:'FRONT-END',
            name:"SHOPTRENDz",
            desc:"Le site e-commerce SHOPTRENDz est une boutique en ligne qui propose une large gamme de produits, y compris des vêtements, des accessoires, des articles pour la maison, et plus encore. Le site a un design épuré et moderne qui est à la fois esthétique et convivial. Le site comprend également des fonctionnalités utiles telles qu'une barre de recherche, une liste de souhaits et une section de produits connexes. De plus, le site est optimisé pour les appareils mobiles, garantissant ainsi que les visiteurs peuvent faire leurs achats confortablement depuis leur smartphone ou leur tablette.",
            btn:'VIEW PROJECT',
            id:0,
            link:"https://eshopdz.netlify.app/",
        },
        {
            img:ws,
            tag:'FRONT-END',
            name:"W-STORE eCommerce",
            desc:"site web de montres de eCommerce propose une large gamme de montres de qualité supérieure provenant de marques de premier plan, avec un système de navigation simple et intuitif pour un shopping facile. Nous offrons un excellent service client, une livraison rapide et fiable et une politique de retour sans tracas. Trouvez votre montre parfaite dès aujourd'hui.",
            btn:'VIEW PROJECT',
            id:9,
            link:"https://wstoree.netlify.app/",
        },
        {
            img:bloom,
            tag:'DJANGO/REACT.JS/REST-API',
            name:"Bloom:clone de IG",
            desc:"(Ce projet est en cours de développement)->Je suis en train de développer un clone de réseau social en utilisant Django. Ce projet permettra aux utilisateurs de publier du contenu, de partager des publications, d'envoyer des messages et de publier des stories, tout comme Instagram. J'ai construit divers composants tels que l'authentification des utilisateurs, la création de contenu, le partage de fonctionnalités, un système de messagerie et une fonctionnalité de partage de stories",
            btn:'VIEW PROJECT',
            id:1,
            link:"http://redaa.pythonanywhere.com/",
        },
        {
            img:lab,
            tag:'FRONT-END',
            name:"DOCLAB",
            desc:"DOCLAB est un laboratoire basé à Annaba, Algérie, qui se consacre à fournir des services de diagnostic de haute qualité à notre communauté locale. Notre équipe de professionnels de la santé passionnés travaille pour améliorer la santé et le bien-être de nos patients grâce à des services innovants",
            btn:'VIEW PROJECT',
            id:6,
            link:"https://laab.netlify.app/",
        },
        {
            img:marx,
            tag:'JAVASCRIPT/NODE.JS',
            name:"Marx",
            desc:"Marx est une application web passionnante qui utilise des algorithmes d'apprentissage automatique pour prédire la nationalité d'une personne en se basant sur son nom. Il vous suffit de saisir votre nom et l'application vous fournira une prédiction de votre nationalité. Avec une base de données de noms de plus de 100 pays, Marx utilise les dernières techniques de traitement du langage naturel pour fournir des prédictions précises. Découvrez votre véritable héritage et explorez la richesse culturelle de différents pays avec Marx",
            btn:'VIEW PROJECT',
            id:2,
            link:"https://good-potent-result.glitch.me/",
        },
        {
            img:oikos,
            tag:'FRONT-END',
            name:"OIKOS",
            desc:"Avec OIKOS, vous pouvez facilement chercher parmi des milliers de propriétés en utilisant des filtres pour trouver exactement ce dont vous avez besoin. Vous pouvez également afficher des photos, des descriptions détaillées et des évaluations de chaque propriété pour vous aider à prendre une décision éclairée.",
            btn:'VIEW PROJECT',
            id:3,
            link:"https://oiks.netlify.app/",
        },
        {
            img:hpp,
            tag:'DJANGO/REACT.JS/REST-API',
            name:"Dossier patient avec Django React.js",
            desc:"Introducing RDATA, une base de données de suivi de fichiers de patients construite à l'aide de React. RDATA est une solution complète pour stocker, afficher et modifier les fichiers de patients en temps réel.",
            btn:'VIEW PROJECT',
            id:4,
            link:"https://reactdatabase.vercel.app/",
        },
        {
            img:exce,
            tag:'FRONT-END',
            name:"Excellence Club",
            desc:"J'ai créé un site web pour un club universitaire avec un design attractif et une section d'équipe où les membres peuvent être filtrés par rôles. Le site web comprend également une page d'événements ainsi que d'autres fonctionnalités telles qu'une section de contact. Ce projet a permis de mettre en valeur les activités et événements du club, tout en attirant de nouveaux membres.",
            btn:'VIEW PROJECT',
            id:5,
            link:"https://exclub.netlify.app/",
        },
  
        {
            img:esm,
            tag:'SINGLE PAGE JAVASCRIPT APP',
            name:"application web conçue pour faciliter l'apprentissage en ligne",
            desc:"BLOOM une application web conçue pour faciliter l'apprentissage en ligne à l'ecole de management pendant la pandémie de COVID-19. Avec le passage aux cours en ligne sur Zoom, les étudiants à l'ecole supérieure de management ont dû faire face au défi de trouver les liens de leur cours, enterrés dans la page Facebook de l'ecole C'est là que Bloom entre en jeu. Cette application sur une seule page, construite à l'aide de JavaScript et de React, fournit un horaire dynamique et rapide de liens Zoom pour chaque cours,",
            btn:'VIEW PROJECT',
            id:7,
            link:"https://esmtl.netlify.app/",
        },
        {
            img:admin,
            tag:'FRONT-END',
            name:"Page d'administration",
            desc:"Une page d'administration qui permet aux administrateurs de gérer et de surveiller les activités d'un site web ou d'une application. Elle peut inclure des fonctionnalités telles que la gestion des utilisateurs, la création et la modification de contenu, la gestion des commandes, la gestion des stocks et des ventes, ainsi que des rapports statistiques sur les performances du site ou de l'application. La page d'administration peut également offrir des fonctionnalités de sécurité, telles que la gestion des autorisations et des accès, pour garantir que seules les personnes autorisées peuvent accéder aux données sensibles. En somme, une page d'administration est un outil essentiel pour les administrateurs pour gérer efficacement et en toute sécurité les opérations d'un site web ou d'une application.",
            btn:'VIEW PROJECT',
            id:8,
            link:"https://redaadmin.netlify.app/",
        },
  
        {
            img:wather,
            tag:'JAVASCRIPT/ NODE.JS',
            name:"simple MyWeather",
            desc:"MyWeather--application météo est un outil simple mais puissant qui fournit des informations météorologiques en temps réel pour votre emplacement en utilisant une API météo. Avec une interface intuitive et des paramètres personnalisables",
            btn:'VIEW PROJECT',
            id:10,
            link:"https://cubic-highfalutin-peanut.glitch.me/",
        },
        {
            img:rand,
            tag:'JAVASCRIPT/ NODE.JS',
            name:"Random Activities",
            desc:"Random Activities est une application Web légère et rapide qui utilise uniquement JavaScript pour aider les utilisateurs à découvrir des activités amusantes à faire avec des amis ou en famille. Les utilisateurs peuvent entrer leur type d'activité préféré et le nombre de participants, et recevoir une liste aléatoire d'activités qui correspondent à leurs critères.",
            btn:'VIEW PROJECT',
            id:11,
            link:"https://butter-nebula-goose.glitch.me/",
        },
        {
            img:quizz,
            tag:'JAVASCRIPT/ NODE.JS',
            name:"Quick Quiz",
            desc:"L'application de Quick Quiz en ligne est une façon amusante et attrayante pour les utilisateurs de tester leurs connaissances sur divers sujets. L'application utilise des APIs pour générer une gamme de questions, couvrant différents domaines tels que l'histoire, la science, la géographie, et bien plus encore.",
            btn:'VIEW PROJECT',
            id:12,
            link:"https://pleasant-heavenly-fireman.glitch.me/",
        },
    ]

    const Contprojetcs= [
        {
            img:reel1,
            tag:'INSTAGRAM-CONTENT',
            name:"instagram Teaser Reel",
            desc:"Try not to BLINK :Bienvenue dans le teaser de notre montage vidéo ! Ce court clip est un aperçu de mes compétences en matière d'édition de vidéo. Découvrez comment j'ai utilisé des techniques d'édition créatives pour assembler différentes scènes et clips en un montage cohérent et captivant",
            btn:'WATCH',
            id:1,
            link:'https://www.instagram.com/reel/CmugoLera5P/?utm_source=ig_web_copy_link',
        },
        {
            img:reel4,
            tag:'INSTAGRAM-CONTENT',
            name:"instagram Reel",
            desc:"Petit résumé des spécialités d'ESM :Ce clip est un exemple de mes compétences en matière de montage vidéo et de synchronisation avec des voix off professionnelles. Découvrez comment j'ai utilisé des techniques d'édition pour assembler différents clips et scènes tout en mettant en valeur la narration professionnelle et captivante de notre artiste voca",
            btn:'WATCH',
            id:0,
            link:'https://www.instagram.com/reel/CgSSbt8JpQ6/?utm_source=ig_web_copy_link',
        },
        {
            img:reel0,
            tag:'FORMATION',
            name:"Formation développement Web",
            desc:"j'ai eu le privilège d'enseigner un cours d'introduction au développement web. Au cours de ce programme, j'ai guidé les étudiants à travers les fondamentaux du développement web, y compris HTML, CSS et JavaScript. À travers des exercices pratiques et des projets, les participants ont construit leurs propres applications web simples et ont acquis une précieuse expérience de travail avec les technologies web. En tant qu'enseignant, j'ai pu partager ma passion pour le développement web et aider les étudiants à développer les compétences dont ils ont besoin pour réussir dans ce domaine passionnant",
            btn:'WATCH',
            id:2,
            link:'https://www.instagram.com/reel/Cbx7uAzApQ-/?utm_source=ig_web_copy_link',
        },
        {
            img:reel6,
            tag:'INSTAGRAM',
            name:"instagram Reel",
            desc:"video explicative d'une startup👀✨ seriez vous prêts à vous lancer?! 💪 :Ce clip est un aperçu de l'univers passionnant des startups et de leur impact sur notre monde en constante évolution. Découvrez comment j'ai utilisé des techniques d'édition créatives pour assembler différents clips et images en un montage cohérent et captivant. Ce teaser vous donne un aperçu de la manière dont j'ai utilisé des effets visuels et sonores pour créer un rythme dynamique et vous plonger dans le monde passionnant des startups.",
            btn:'WATCH',
            id:6,
            link:'https://www.instagram.com/reel/Cci7kjbF_0X/?utm_source=ig_web_copy_link',
        },
        {
            img:reel2,
            tag:'INSTAGRAM',
            name:"instagram Reel",
            desc:"Vous ne trouvez pas qu'il fait beaucoup trop chaud pour un mois d'octobre? 🥵 Mais OUI ! 😩 Et cette hausse de température est expliquée par un phénomène appelé “plume de chaleur” Et qu'est ce que c'est? 🤨⁉️",
            btn:'WATCH',
            id:3,
            link:'https://www.instagram.com/reel/CkTvVUQMg1g/?utm_source=ig_web_copy_link',
        },
        {
            img:reel3,
            tag:'INSTAGRAM',
            name:"instagram Reel",
            desc:"Petit résumé des spécialités d'ESM Partie-2 - Ecogreen",
            btn:'WATCH',
            id:4,
            link:'https://www.instagram.com/reel/ChSrcQoPeyE/?utm_source=ig_web_copy_link',
        },
        {
            img:reel5,
            tag:'INSTAGRAM',
            name:"instagram Reel",
            desc:"Nous avons le plaisir de vous présenter EcoGreen 💚",
            btn:'WATCH',
            id:5,
            link:'https://www.instagram.com/reel/CjIqcqmPfo_/?utm_source=ig_web_copy_link',
        },
        {
            img:reel7,
            tag:'INSTAGRAM',
            name:"instagram Reel",
            desc:"Les étapes Clés pour lancer un projet 💪",
            btn:'WATCH',
            id:7,
            link:'https://www.instagram.com/reel/CX_3llGlOEK/?utm_source=ig_web_copy_link',
        },
        {
            img:reel8,
            tag:'INSTAGRAM',
            name:"instagram Reel",
            desc:"website launch ",
            btn:'WATCH',
            id:8,
            link:'https://www.instagram.com/reel/CXrbdsul1pa/?utm_source=ig_web_copy_link',
        },
        {
            img:reel9,
            tag:'INSTAGRAM',
            name:"instagram Reel",
            desc:"entrepreneurship 💪 reel ",
            btn:'WATCH',
            id:9,
            link:'https://www.instagram.com/reel/CX1k6QGF7lX/?utm_source=ig_web_copy_link',
        },
    ]

    const [pro , setPro] = useState(WebProjects)
    const [track , settrack] = useState(false)
    const toggleBtns = document.querySelectorAll("[data-toggle-btn]");

    const listItems = pro.map(projet => <Card key={projet.id} data={projet} />);

    const boxRef = useRef(null)
    const handleBtn = ()=>{
        boxRef.current.classList.toggle("active");

        if(boxRef.current.classList.contains("active")){
            setPro(Contprojetcs)
            settrack(true)
          }else{
            setPro(WebProjects)
            settrack(false)
        
          }
    }

  return (
    <motion.div initial={{opacity:0,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}} animate={{opacity:1,clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",}} 
    exit={{clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",}} transition={{duration:0.75}} >

        
  <main>
    <article>

    

      <section className="section portfolio" aria-labelledby="portfolio-label">
        <div className="container">

          <h2 className="section-title headline-md text-center" id="portfolio-label">Latest Projects</h2>

          <motion.div transition={{ delay: .3,duration:.5 }}  initial={{opacity:0,y:-50,backgroundColor:'#fff'}} animate={{opacity:1,y:0,backgroundColor:'#FFDAC2'}} ref={boxRef} className="skills-toggle " data-toggle-box>

            <motion.button transition={{ delay: .75, ease: "easeInOut",duration:.4}}  initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} onClick={handleBtn} className={`toggle-btn ${track ? ' ': 'active'} `} data-toggle-btn>Web</motion.button>

            <motion.button transition={{ delay: .75, ease: "easeInOut",duration:.4 }}  initial={{opacity:0,y:-15}} animate={{opacity:1,y:0}} onClick={handleBtn} className={`toggle-btn ${track ? ' active': ''} `} data-toggle-btn>Content</motion.button>
          </motion.div>

        </div>

   
        <br/>
        <br/>

          <ul className="portfolio-list">

         {listItems}

          </ul>

       
      </section>

    </article>
  </main>

    </motion.div>
  )
}

export default Portfolio