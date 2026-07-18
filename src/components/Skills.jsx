import { useState } from 'react';
import Skillsbg from '../assets/skillpic.jpg';

const hardSkills = {
  "Électronique": ["Lecture de schémas", "Montage de circuits électroniques", "Dimensionnement de composants", "Utilisation d'oscilloscope", "Utilisation de multimètres","Créations de circuits imprimés(PCB)"],
  "Informatique": ["Python", "C", "C++","Programmation de microcontroleurs (c8051)"],
  "Electrotechnique": ["Lecture de schémas", "Calculs de puissance", "Utilisation de matériel de mesure", "Réalisation de câblages électriques"],
  "Automatisme": ["Programmation d'automates (WIT)", "Réalisation de programmes de supervision", "Programmation de cartes FPGA", "Langages de la CEI (Ladder, Structuré, VHDL, Grafcet)" ],
  "Langues": ["Français : Langue maternelle", "Anglais : C1", "Espagnol : B2"]
};

const softSkills = ["Travail d'équipe", "Autonomie", "Rigueur", "Capacité d'adaptation","Communication", "Gestion du temps"];

function Skills() {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);

  return (
    <section 
      id="skills" 
      className="bg-cover bg-center min-h-screen relative flex flex-col
      before:content-[''] 
      before:absolute 
      before:top-0 before:left-0 before:right-0
      before:h-48 
      before:bg-gradient-to-b before:from-black before:to-transparent"
      style={{ backgroundImage: `url(${Skillsbg})` }}
    >
      <h2 className="text-4xl md:text-6xl font-bold text-center text-white pt-16 z-10">Compétences</h2>
      
      <div className="flex-1 flex items-center justify-center z-10 w-full pb-24">
        
        {/* AJOUT DE text-xl ICI POUR L'APPLIQUER À TOUT LE BLOC */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-8 text-base md:text-xl px-4">
          
          {/* 1. Colonne de base */}
          <div className="flex flex-col gap-4 shrink-0">
            <button
              onClick={() => {
                setSelectedType(selectedType === "hard" ? null : "hard");
                setSelectedDomain(null);
              }}
              className={`px-6 py-3 rounded-lg transition-colors ${
                selectedType === "hard" ? "bg-blue-600 text-white" : "bg-gray-800 text-white"
              }`}
            >
              Hard Skills
            </button>
            <button
              onClick={() => {
                setSelectedType(selectedType === "soft" ? null : "soft");
                setSelectedDomain(null);
              }}
              className={`px-6 py-3 rounded-lg transition-colors ${
                selectedType === "soft" ? "bg-blue-600 text-white" : "bg-gray-800 text-white"
              }`}
            >
              Soft Skills
            </button>
          </div>

          {/* 2. Colonne des Domaines */}
          {/* Largeur max ajustée à 350px pour le texte xl */}
          <div 
           className={`transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-4 ${
            selectedType ? "max-h-[400px] opacity-100 md:max-w-[350px]" : "max-h-0 opacity-0 md:max-w-0"
            } md:max-h-none`}
          >
            {/* Largeur interne augmentée à 250px */}
            <div className="w-full max-w-[250px] md:w-[250px] flex flex-col gap-4">
              {selectedType === "hard" && Object.keys(hardSkills).map((domain) => (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`w-full px-6 py-3 rounded-lg transition-colors animate-slideIn ${
                    selectedDomain === domain ? "bg-blue-600 text-white" : "bg-gray-800 text-white"
                  }`}
                >
                  {domain}
                </button>
              ))}

              {selectedType === "soft" && softSkills.map((skill) => (
                <span key={skill} className="w-full bg-gray-800 text-white px-6 py-3 rounded-lg text-center animate-slideIn">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        
          <div 
            className={`transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-4 ${
              selectedDomain ? "max-w-[500px] opacity-100" : "max-w-0 opacity-0"
            }`}
          >
            {/* Largeur interne augmentée à 400px */}
            <div className="w-full max-w-[400px] md:w-[400px] flex flex-col gap-4">
              {selectedDomain && hardSkills[selectedDomain].map((skill) => (
                <span key={skill} className="w-full bg-gray-800 text-white px-6 py-3 rounded-lg text-center animate-slideIn">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;