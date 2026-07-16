import thermometre from "../assets/thermometre.JPG";
import robot from "../assets/Robot.jpeg";
import robot1 from "../assets/robot1.jpeg";
import robot2 from "../assets/robot2.jpeg";
import robot3 from "../assets/robot3.jpeg";
import robotlego from "../assets/robotlego.PNG";
import num from "../assets/schema_numerique.png";
import analog from "../assets/schema_analog.png";
import { useState } from "react";
const projects = [
  {
    title: " Thermomètre électronique",
    description: "Réalisation d'un thermomètre analogique numérique entièrement avec des composants électroniques. Le thermomètre est capable de mesurer la température ambiante et de l'afficher sur des afficheurs 7 segments. ",
    Mise_en_place: "Pour ce projet, nous avions un carnet qui nous guidait pas à pas dans la réalisation du thermomètre, l'objectif principal n'était pas de concevoir mais d'apprendre à réaliser des séries de tests cohérents ainsi qu'à poser un diagnostic sur une panne potentielle",
    techs: ["Capteur de température", "Afficheurs 7 segments", "Potentiomètres", "Diode Zener", "Résistances", "Condensateurs", "Mémoire programmable", "Convertisseur analogique-numérique", 'Décodeur BCD vers 7 segments', "Amplificateurs opérationnels"],
    Competences: ["Conception de circuits électroniques", "Utilisation d'outils de simulation électronique", "Analyse de signaux analogiques et numériques", "cablage de circuits électroniques", "Procédures de test et de validation de circuits électroniques"],
    image: [thermometre, analog, num]
  },
  {
    title: "Conception et programmation d'un robot éviteur d'obstacles",
    description: "Le but est de réaliser un robot capable de se déplacer dans un environnement inconnu tout en évitant les obstacles. Le robot utilise un capteur ultrasonore pour cartographier l'environnement et aller vers l'endroit où il ne détecte pas d'obstacles.",
    Mise_en_place: " Pour ce projet, nous avons du réaliser la modélisation du robot, le cablage des composants, la programmation du robot et la mise en place de l'algorithme d'évitement d'obstacles. Nous avons aussi du réaliser une sorte de campagne publicitaire avec le poster que vous voyez ci-dessus ainsi que le trailer disponible  avec ce lien : https://youtu.be/IodIf8p4umo",
    techs: ["Carte Arduino Nano", "Capteur ultrasonore", '2 servomoteurs'],
    Competences: ["Cablage de circuits électroniques", "Soudure","Programmation en C++", "Résolutions de problèmes", "Créativité", "Travail en équipe", "Gestion de projet", "Communication"],
    image: [robot, robot1, robot2, robot3]
  },
  {
    title: "Programmation d'un robot en langage C et Python",
    description: "Deux principales épreuves ont été réalisées. La première consiste à programmer un robot pour qu'il sorte d'un labyrinthe, la deuxième consiste à programmer un robot pour qu'il suive une ligne noire sur un fond blanc. Le robot utilise des capteurs de couleur pour détecter la ligne et ajuster sa trajectoire en conséquence. ",
    Mise_en_place: "Pour la première mission, dès que le capteur d'ultrasons détecte un mur à moins de 15cm, le robot mesure la distance à gauche et à droite pour déterminer le meilleur chemin à suivre. Pour la deuxième mission, le robot a deux capteurs de couleurs pointés vers le sol ( de part et d'autre de la ligne). Si la ligne est détecté par l'un des capteurs, le robot tourne sur lui-même du coté du capteur jusqu'à ce que celui-ci ne détecte plus la ligne. Le robot continue alors tout droit jusqu'à ce que l'autre capteur détecte la ligne, et ainsi de suite jusqu'à la fin du parcours.",
    techs: [ "Capteur de couleur", "Capteur ultrasonore", "Servomoteurs", 'Gyroscope'],
    Competences: ["Programmation en C et Python", "Résolutions de problèmes", "Créativité", "Travail en équipe", "Gestion de projet", "Communication"],
    image: [robotlego]

  }
]
function Projects() 
{const [currentIndex, setCurrentIndex] = useState({});
const [direction, setDirection] = useState({});
const [prevIndex, setPrevIndex] = useState({});
const nextImage = (title, length) => {
  setPrevIndex((prev) => ({ ...prev, [title]: currentIndex[title] || 0 }));
  setDirection((prev) => ({ ...prev, [title]: "right" }));
  setCurrentIndex((prev) => ({
    ...prev,
    [title]: ((prev[title] || 0) + 1) % length
  }));
};

const prevImage = (title, length) => {
  setPrevIndex((prev) => ({ ...prev, [title]: currentIndex[title] || 0 }));
  setDirection((prev) => ({ ...prev, [title]: "left" }));
  setCurrentIndex((prev) => ({
    ...prev,
    [title]: ((prev[title] || 0) - 1 + length) % length
  }));
};
    return (
        <section id="Projets" className="relative bg-black min-h-screen py-20 text-center
      before:content-[''] 
      
      before:top-0 before:left-0 before:right-0
      before:h-48 
      before:bg-gradient-to-b before:from-[#0a192f] before:to-black">
            <h2 className="text-6xl font-bold text-white"> Mes Projets </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 mt-12">
  {projects.map((project) => (
  <div key={project.title} className="bg-[#081321] rounded-xl p-6 max-w-2xl mx-auto text-left">
<div className="relative overflow-hidden rounded-lg mb-4 h-64">
  {prevIndex[project.title] !== undefined && (
    <img
      key={`prev-${prevIndex[project.title]}`}
      src={project.image[prevIndex[project.title]]}
      alt=""
      className={`absolute top-0 left-0 w-full h-64 object-contain ${
        direction[project.title] === "left" ? "animate-slideOutRight" : "animate-slideOutLeft"
      }`}
    />
  )}
  <img
    key={currentIndex[project.title] || 0}
    src={project.image[currentIndex[project.title] || 0]}
    alt={project.title}
    className={`absolute top-0 left-0 w-full h-64 object-contain ${
      direction[project.title] === "left" ? "animate-slideLeft" : "animate-slideRight"
    }`}
  />
  {project.image.length > 1 && (
    <>
      <button
        onClick={() => prevImage(project.title, project.image.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full z-10"
      >
        ‹
      </button>
      <button
        onClick={() => nextImage(project.title, project.image.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full z-10"
      >
        ›
      </button>
    </>
  )}
</div>
    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <h3 className="text-gray-300 text-xl font-bold mb-4">Mise en place : </h3><p className="text-gray-300 mb-4">{project.Mise_en_place}</p> 
      
     <h3 className="text-xl font-bold text-white mb-2">Compétences développées</h3>    
    <div className="flex flex-wrap gap-2">
      {project.Competences.map((competence) => (
        <span key={competence} className="bg-green-900 text-green-200 text-l px-2 py-1 rounded-full">
          {competence}
        </span>
      ))}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">Composants utilisés</h3>  
    <div className="flex flex-wrap gap-2">
      {project.techs.map((tech) => (
        <span key={tech} className="bg-blue-900 text-blue-200 text-l px-2 py-1 rounded-full">
          {tech}
        </span>
      ))}
    </div>
  </div>
    ))}
  </div>



        </section>)}
export default Projects