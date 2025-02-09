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
import reel20 from '../assets/reelsinto.png'
import elmaid from '../assets/elpost.png'
import sintoprj from '../assets/sto.png'
import lipsan from '../assets/lipsan.png'

import bs from '../assets/bs.png'
import ad from '../assets/adminBlog.png'
import rib from '../assets/ripb1.png'


import Card from '../comp/Card'
import { motion } from 'framer-motion'
import Transition from '../comp/Transition'
const Portfolio = () => {

    const WebProjects = [
        {
            img: rib,
            tag: "PHP-mySQL",
            name: "rencontre internationale paris berlin",
            desc: `
           À la Rencontre Internationale Paris Berlin, un événement majeur dédié aux images en mouvement contemporaines à Paris et Berlin, j'ai travaillé en tant que développeur full-stack. Mon rôle consistait à améliorer les performances du site web et à le rendre compatible avec les appareils mobiles. J'ai également modernisé les formulaires et le code backend pour faciliter et accélérer le processus d'inscription et d'envoi des œuvres par les artistes,
      
              `,

            btn: "VIEW PROJECT",
            id: 78,
            link: "https://www.art-action.org/",
        },

        {
            img: bs,
            tag: "FULL-STACK",
            name: "ONE FOOTBALL",
            desc: `
            J'ai développé une version simplifiée d'une plateforme de football similaire à Onefootball. En utilisant la technologie MERN (MongoDB, Express.js, React, Node.js), j'ai créé une application de blog personnalisée où les utilisateurs peuvent choisir leurs préférences, telles que ligues, clubs, pays et joueurs favoris. Grâce à des algorithmes, l'application analyse les activités des utilisateurs pour comprendre leurs préférences et leur offre une expérience unique en poussant du contenu personnalisé. J'ai également intégré des API pour fournir des données en temps réel sur les matchs et les ligues, assurant ainsi que les utilisateurs restent informés des dernières actualités de leurs équipes préférées. Cette réalisation met en lumière mon expertise en développement web moderne et en engagement utilisateur, créant une expérience personnalisée à la manière de Onefootball.
      
              `,

            btn: "VIEW PROJECT",
            id: 71,
            link: "https://client-ts.vercel.app/",
        },
        {
            img: ad,
            tag: "FULL-STACK",
            name: "DASHBORD ADMIN",
            desc: `
            En parallèle, j'ai également développé une application Web d'administration robuste utilisant la même pile technologique MERN. Cette application permet aux administrateurs de gérer facilement le contenu en temps réel. Ils peuvent ajouter, éditer et mettre à jour des articles, des clubs, des ligues et bien plus encore, grâce à un tableau de bord intuitif.

L'application d'administration garantit que le contenu reste frais et engageant pour les utilisateurs. Elle démontre mon expertise en matière de développement d'interfaces d'administration efficaces et facilite la maintenance continue de l'application principale. Cette application d'administration est un exemple de mon engagement envers une gestion transparente et efficace des données dans un environnement dynamique.
----------> <>
Cette plateforme est actuellement en accès restreint. Si vous souhaitez tester l'espace administrateur, veuillez créer un compte et me contacter pour que je puisse vous attribuer des droits administratifs à des fins de test. <> <----------
      
              `,

            btn: "VIEW PROJECT",
            id: 72,
            link: "https://admino-beta.vercel.app/",
        },


        {
            img: elmaid,
            tag: 'FRONT-END',
            name: "EL MAIDA",
            desc: "J'ai eu le plaisir de collaborer avec El-Maida , entreprise basée à Annaba pour construire leur site web. En utilisant React, j'ai développé un site web multipage qui permet aux utilisateurs de naviguer à travers les produits de l'entreprise et d'accéder à des informations détaillées pour chaque produit. Avec un design moderne et une expérience utilisateur rapide, j'ai utilisé les dernières technologies pour garantir que le site web répondait aux exigences du client et dépassait leurs attentes..",
            btn: 'VIEW PROJECT',
            id: 81,
            link: "https://maidaa.netlify.app/",
        },
        {
            img: sintoprj,
            tag: 'FRONT-END',
            name: "SINTO AGENCY",
            desc: "J'ai utilisé des technologies très intéressantes telles que JavaScript, GSAP et SCSS pour construire un site web moderne et rapide. Le site web est conçu avec une mentalité de SPA pour permettre aux visiteurs de trouver facilement les derniers projets de l'agence et les informations de contact. Le design unique et moderne que j'ai créé a vraiment permis à l'agence de se démarquer de la concurrence. J'ai également utilisé GSAP pour ajouter des animations fluides et élégantes qui ont amélioré l'interaction utilisateur.",
            btn: 'VIEW PROJECT',
            id: 80,
            link: "https://sintoagency.com/",
        },

        {
            img: lipsan,
            tag: 'FRONT-END',
            name: "La société LIPSAN",
            desc: "J'ai créé un site web complet pour Lipsan, mettant en valeur leurs offres uniques dans le domaine de la protection et du confort. Lipsan Solution propose aux entreprises une solution sur mesure et rentable, s'appuyant sur une expertise étendue validée par l'expérience. Le site met en avant leur offre globale de services, mettant l'accent sur l'analyse des besoins, l'étude du site, et la mise en œuvre d'équipements professionnels de qualité exceptionnelle provenant des meilleurs fabricants.",
            btn: 'VIEW PROJECT',
            id: 84,
            link: "https://lipsan-solution.com/",
        },

        {
            img: shopdz,
            tag: 'FRONT-END',
            name: "SHOPTRENDz",
            desc: "Le site e-commerce SHOPTRENDz est une boutique en ligne qui propose une large gamme de produits, y compris des vêtements, des accessoires, des articles pour la maison, et plus encore. Le site a un design épuré et moderne qui est à la fois esthétique et convivial. Le site comprend également des fonctionnalités utiles telles qu'une barre de recherche, une liste de souhaits et une section de produits connexes. De plus, le site est optimisé pour les appareils mobiles, garantissant ainsi que les visiteurs peuvent faire leurs achats confortablement depuis leur smartphone ou leur tablette.",
            btn: 'VIEW PROJECT',
            id: 0,
            link: "https://eshopdz.netlify.app/",
        },
        {
            img: ws,
            tag: 'FRONT-END',
            name: "W-STORE eCommerce",
            desc: "site web de montres de eCommerce propose une large gamme de montres de qualité supérieure provenant de marques de premier plan, avec un système de navigation simple et intuitif pour un shopping facile. Nous offrons un excellent service client, une livraison rapide et fiable et une politique de retour sans tracas. Trouvez votre montre parfaite dès aujourd'hui.",
            btn: 'VIEW PROJECT',
            id: 9,
            link: "https://wstoree.netlify.app/",
        },
        {
            img: bloom,
            tag: 'DJANGO/REACT.JS/REST-API',
            name: "Bloom:clone de IG",
            desc: "(Ce projet est en cours de développement)->Je suis en train de développer un clone de réseau social en utilisant Django. Ce projet permettra aux utilisateurs de publier du contenu, de partager des publications, d'envoyer des messages et de publier des stories, tout comme Instagram. J'ai construit divers composants tels que l'authentification des utilisateurs, la création de contenu, le partage de fonctionnalités, un système de messagerie et une fonctionnalité de partage de stories",
            btn: 'VIEW PROJECT',
            id: 1,
            link: "http://redaa.pythonanywhere.com/",
        },
        {
            img: lab,
            tag: 'FRONT-END',
            name: "DOCLAB",
            desc: "DOCLAB est un laboratoire basé à Annaba, Algérie, qui se consacre à fournir des services de diagnostic de haute qualité à notre communauté locale. Notre équipe de professionnels de la santé passionnés travaille pour améliorer la santé et le bien-être de nos patients grâce à des services innovants",
            btn: 'VIEW PROJECT',
            id: 6,
            link: "https://laab.netlify.app/",
        },
        {
            img: marx,
            tag: 'JAVASCRIPT/NODE.JS',
            name: "Marx",
            desc: "Marx est une application web passionnante qui utilise des algorithmes d'apprentissage automatique pour prédire la nationalité d'une personne en se basant sur son nom. Il vous suffit de saisir votre nom et l'application vous fournira une prédiction de votre nationalité. Avec une base de données de noms de plus de 100 pays, Marx utilise les dernières techniques de traitement du langage naturel pour fournir des prédictions précises. Découvrez votre véritable héritage et explorez la richesse culturelle de différents pays avec Marx",
            btn: 'VIEW PROJECT',
            id: 2,
            link: "https://good-potent-result.glitch.me/",
        },
        {
            img: oikos,
            tag: 'FRONT-END',
            name: "OIKOS",
            desc: "Avec OIKOS, vous pouvez facilement chercher parmi des milliers de propriétés en utilisant des filtres pour trouver exactement ce dont vous avez besoin. Vous pouvez également afficher des photos, des descriptions détaillées et des évaluations de chaque propriété pour vous aider à prendre une décision éclairée.",
            btn: 'VIEW PROJECT',
            id: 3,
            link: "https://oiks.netlify.app/",
        },
        {
            img: hpp,
            tag: 'DJANGO/REACT.JS/REST-API',
            name: "Dossier patient avec Django React.js",
            desc: "Introducing RDATA, une base de données de suivi de fichiers de patients construite à l'aide de React. RDATA est une solution complète pour stocker, afficher et modifier les fichiers de patients en temps réel.",
            btn: 'VIEW PROJECT',
            id: 4,
            link: "https://reactdatabase.vercel.app/",
        },
        {
            img: exce,
            tag: 'FRONT-END',
            name: "Excellence Club",
            desc: "J'ai créé un site web pour un club universitaire avec un design attractif et une section d'équipe où les membres peuvent être filtrés par rôles. Le site web comprend également une page d'événements ainsi que d'autres fonctionnalités telles qu'une section de contact. Ce projet a permis de mettre en valeur les activités et événements du club, tout en attirant de nouveaux membres.",
            btn: 'VIEW PROJECT',
            id: 5,
            link: "https://exclub.netlify.app/",
        },

        {
            img: esm,
            tag: 'SINGLE PAGE JAVASCRIPT APP',
            name: "application web conçue pour faciliter l'apprentissage en ligne",
            desc: "BLOOM une application web conçue pour faciliter l'apprentissage en ligne à l'ecole de management pendant la pandémie de COVID-19. Avec le passage aux cours en ligne sur Zoom, les étudiants à l'ecole supérieure de management ont dû faire face au défi de trouver les liens de leur cours, enterrés dans la page Facebook de l'ecole C'est là que Bloom entre en jeu. Cette application sur une seule page, construite à l'aide de JavaScript et de React, fournit un horaire dynamique et rapide de liens Zoom pour chaque cours,",
            btn: 'VIEW PROJECT',
            id: 7,
            link: "https://esmtl.netlify.app/",
        },
        {
            img: admin,
            tag: 'FRONT-END',
            name: "Page d'administration",
            desc: "Une page d'administration qui permet aux administrateurs de gérer et de surveiller les activités d'un site web ou d'une application. Elle peut inclure des fonctionnalités telles que la gestion des utilisateurs, la création et la modification de contenu, la gestion des commandes, la gestion des stocks et des ventes, ainsi que des rapports statistiques sur les performances du site ou de l'application. La page d'administration peut également offrir des fonctionnalités de sécurité, telles que la gestion des autorisations et des accès, pour garantir que seules les personnes autorisées peuvent accéder aux données sensibles. En somme, une page d'administration est un outil essentiel pour les administrateurs pour gérer efficacement et en toute sécurité les opérations d'un site web ou d'une application.",
            btn: 'VIEW PROJECT',
            id: 8,
            link: "https://redaadmin.netlify.app/",
        },

        {
            img: wather,
            tag: 'JAVASCRIPT/ NODE.JS',
            name: "simple MyWeather",
            desc: "MyWeather--application météo est un outil simple mais puissant qui fournit des informations météorologiques en temps réel pour votre emplacement en utilisant une API météo. Avec une interface intuitive et des paramètres personnalisables",
            btn: 'VIEW PROJECT',
            id: 10,
            link: "https://cubic-highfalutin-peanut.glitch.me/",
        },
        {
            img: rand,
            tag: 'JAVASCRIPT/ NODE.JS',
            name: "Random Activities",
            desc: "Random Activities est une application Web légère et rapide qui utilise uniquement JavaScript pour aider les utilisateurs à découvrir des activités amusantes à faire avec des amis ou en famille. Les utilisateurs peuvent entrer leur type d'activité préféré et le nombre de participants, et recevoir une liste aléatoire d'activités qui correspondent à leurs critères.",
            btn: 'VIEW PROJECT',
            id: 11,
            link: "https://butter-nebula-goose.glitch.me/",
        },
        {
            img: quizz,
            tag: 'JAVASCRIPT/ NODE.JS',
            name: "Quick Quiz",
            desc: "L'application de Quick Quiz en ligne est une façon amusante et attrayante pour les utilisateurs de tester leurs connaissances sur divers sujets. L'application utilise des APIs pour générer une gamme de questions, couvrant différents domaines tels que l'histoire, la science, la géographie, et bien plus encore.",
            btn: 'VIEW PROJECT',
            id: 12,
            link: "https://pleasant-heavenly-fireman.glitch.me/",
        },
    ]

    const Contprojetcs = [
        {
            img: reel20,
            tag: 'INSTAGRAM-CONTENT',
            name: "instagram Teaser Reel",
            desc: "Je suis ravi de partager cette vidéo mobile que j'ai créée pour présenter le site web réactif que j'ai développé pour Sinto Agency ! Avec un design moderne et unique",
            btn: 'WATCH',
            id: 51,
            link: 'https://www.instagram.com/reel/CrjfkSbAv_Z/?utm_source=ig_web_copy_link',
        },
        {
            img: reel1,
            tag: 'INSTAGRAM-CONTENT',
            name: "instagram Teaser Reel",
            desc: "Try not to BLINK :Bienvenue dans le teaser de notre montage vidéo ! Ce court clip est un aperçu de mes compétences en matière d'édition de vidéo. Découvrez comment j'ai utilisé des techniques d'édition créatives pour assembler différentes scènes et clips en un montage cohérent et captivant",
            btn: 'WATCH',
            id: 1,
            link: 'https://www.instagram.com/reel/CmugoLera5P/?utm_source=ig_web_copy_link',
        },
        {
            img: reel4,
            tag: 'INSTAGRAM-CONTENT',
            name: "instagram Reel",
            desc: "Petit résumé des spécialités d'ESM :Ce clip est un exemple de mes compétences en matière de montage vidéo et de synchronisation avec des voix off professionnelles. Découvrez comment j'ai utilisé des techniques d'édition pour assembler différents clips et scènes tout en mettant en valeur la narration professionnelle et captivante de notre artiste voca",
            btn: 'WATCH',
            id: 0,
            link: 'https://www.instagram.com/reel/CgSSbt8JpQ6/?utm_source=ig_web_copy_link',
        },
        {
            img: reel0,
            tag: 'FORMATION',
            name: "Formation développement Web",
            desc: "j'ai eu le privilège d'enseigner un cours d'introduction au développement web. Au cours de ce programme, j'ai guidé les étudiants à travers les fondamentaux du développement web, y compris HTML, CSS et JavaScript. À travers des exercices pratiques et des projets, les participants ont construit leurs propres applications web simples et ont acquis une précieuse expérience de travail avec les technologies web. En tant qu'enseignant, j'ai pu partager ma passion pour le développement web et aider les étudiants à développer les compétences dont ils ont besoin pour réussir dans ce domaine passionnant",
            btn: 'WATCH',
            id: 2,
            link: 'https://www.instagram.com/reel/Cbx7uAzApQ-/?utm_source=ig_web_copy_link',
        },
        {
            img: reel6,
            tag: 'INSTAGRAM',
            name: "instagram Reel",
            desc: "video explicative d'une startup👀✨ seriez vous prêts à vous lancer?! 💪 :Ce clip est un aperçu de l'univers passionnant des startups et de leur impact sur notre monde en constante évolution. Découvrez comment j'ai utilisé des techniques d'édition créatives pour assembler différents clips et images en un montage cohérent et captivant. Ce teaser vous donne un aperçu de la manière dont j'ai utilisé des effets visuels et sonores pour créer un rythme dynamique et vous plonger dans le monde passionnant des startups.",
            btn: 'WATCH',
            id: 6,
            link: 'https://www.instagram.com/reel/Cci7kjbF_0X/?utm_source=ig_web_copy_link',
        },
        {
            img: reel2,
            tag: 'INSTAGRAM',
            name: "instagram Reel",
            desc: "Vous ne trouvez pas qu'il fait beaucoup trop chaud pour un mois d'octobre? 🥵 Mais OUI ! 😩 Et cette hausse de température est expliquée par un phénomène appelé “plume de chaleur” Et qu'est ce que c'est? 🤨⁉️",
            btn: 'WATCH',
            id: 3,
            link: 'https://www.instagram.com/reel/CkTvVUQMg1g/?utm_source=ig_web_copy_link',
        },
        {
            img: reel3,
            tag: 'INSTAGRAM',
            name: "instagram Reel",
            desc: "Petit résumé des spécialités d'ESM Partie-2 - Ecogreen",
            btn: 'WATCH',
            id: 4,
            link: 'https://www.instagram.com/reel/ChSrcQoPeyE/?utm_source=ig_web_copy_link',
        },
        {
            img: reel5,
            tag: 'INSTAGRAM',
            name: "instagram Reel",
            desc: "Nous avons le plaisir de vous présenter EcoGreen 💚",
            btn: 'WATCH',
            id: 5,
            link: 'https://www.instagram.com/reel/CjIqcqmPfo_/?utm_source=ig_web_copy_link',
        },
        {
            img: reel7,
            tag: 'INSTAGRAM',
            name: "instagram Reel",
            desc: "Les étapes Clés pour lancer un projet 💪",
            btn: 'WATCH',
            id: 7,
            link: 'https://www.instagram.com/reel/CX_3llGlOEK/?utm_source=ig_web_copy_link',
        },
        {
            img: reel8,
            tag: 'INSTAGRAM',
            name: "instagram Reel",
            desc: "website launch ",
            btn: 'WATCH',
            id: 8,
            link: 'https://www.instagram.com/reel/CXrbdsul1pa/?utm_source=ig_web_copy_link',
        },
        {
            img: reel9,
            tag: 'INSTAGRAM',
            name: "instagram Reel",
            desc: "entrepreneurship 💪 reel ",
            btn: 'WATCH',
            id: 9,
            link: 'https://www.instagram.com/reel/CX1k6QGF7lX/?utm_source=ig_web_copy_link',
        },
    ]

    const [pro, setPro] = useState(WebProjects)
    const [track, settrack] = useState(false)
    const toggleBtns = document.querySelectorAll("[data-toggle-btn]");

    const listItems = pro.map(projet => <Card key={projet.id} data={projet} />);

    const boxRef = useRef(null)
    const handleBtn = () => {
        boxRef.current.classList.toggle("active");

        if (boxRef.current.classList.contains("active")) {
            setPro(Contprojetcs)
            settrack(true)
        } else {
            setPro(WebProjects)
            settrack(false)

        }
    }

    return (

        <>
            <Transition />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, }} transition={{ ease: "easeInOut", duration: 0.1, delay: .5 }} >


                <main>
                    <article>



                        <section className="section portfolio" aria-labelledby="portfolio-label">
                            <div className="container">

                                <h2 className="section-title headline-md text-center" id="portfolio-label">Projets Réalisés</h2>
                                <p className="inst" >Explorez mes projets de développement et de design, changez entre eux avec les boutons ci-dessous</p>

                                <motion.div transition={{ delay: .3, duration: .5 }} initial={{ opacity: 0, y: -50, backgroundColor: '#fff' }} animate={{ opacity: 1, y: 0, backgroundColor: '#FFDAC2' }} ref={boxRef} className="skills-toggle " data-toggle-box>

                                    <motion.button transition={{ delay: .75, ease: "easeInOut", duration: .4 }} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} onClick={handleBtn} className={`toggle-btn ${track ? ' ' : 'active'} `} data-toggle-btn>Web</motion.button>

                                    <motion.button transition={{ delay: .75, ease: "easeInOut", duration: .4 }} initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} onClick={handleBtn} className={`toggle-btn ${track ? ' active' : ''} `} data-toggle-btn>Design</motion.button>
                                </motion.div>

                            </div>


                            <br />
                            <br />

                            <ul className="portfolio-list">

                                {listItems}

                            </ul>


                        </section>

                    </article>
                </main>

            </motion.div>

        </>
    )
}

export default Portfolio