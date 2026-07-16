import React from 'react';
import heroBg from '../assets/heropic.jpg';
function Hero() {
  return ( 
    <section id="Accueil" style={{ backgroundImage: `url(${heroBg})` }}
    className="hero relative flex flex-col items-center text-center min-h-screen bg-cover bg-center bg-no-repeat
    relative 
                 before:content-[''] 
                 before:absolute 
                 before:inset-0 
                 before:bg-black/50
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0
                 after:h-24 after:bg-gradient-to-b after:from-white/0 after:to-black"> 
    <div className="absolute inset-0 backdrop-blur-[2px]">
   
    
    </div>
    <div className="text-white z-10 mt-8" backdrop-blur-sm>
        <h1 className="text-6xl mt-8 ">Yanis Ammour</h1>
        <p className="mt-16 text-xl">Actuellement en BUT GEII je vous souhaite la bienvenue sur mon portfolio !</p>
        <a className="font-['Archivo_Black'] text-2xl inline-block bg-black text-white justify-center px-4 py-2 rounded hover:bg-gray-800 mt-32 "href="#Projets">Voir mes projets</a>
    </div>
    </section>
  )
}
export default Hero