import React from 'react';
import { useState, useEffect, useRef } from 'react'
function About() {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) setIsVisible(true)
  })
  observer.observe(sectionRef.current)
  return () => observer.disconnect()
}, [])
return (    <section id="About" ref={sectionRef} className="relative bg-black min-h-screen py-20 text-center ">
   
        <div className="text-white z-10"  >
            <h1 className="text-6xl mt-8 ">
                {"Qui suis-je ?".split('').map((lettre, i) => (
                    <span className={`opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}
                        key={i}
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        {lettre}
                    </span>
                    ))}
            </h1>
            <p className="text-xl mt-16 px-6">
                 {" Diplomé d'un bac général avec spécialités Anglais et NSI (Numérique et sciences informatiques) et passionné par l'électronique et l'informatique, je poursuis ".split('').map((lettre, i) => (
                    <span className={`opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}
                        key={i}
                        style={{ animationDelay: `${i * 0.02}s` }}
                    >
                        {lettre}
                    </span>
                
              
                    ))}
            </p>
            <p className="text-xl px-6">
                    {" cette passion en BUT GEII. Dans l'optique de développer de vraies aptitudes et des compétences professionnelles, ".split('').map((lettre, i) => (
                    <span className={`opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}
                        key={i}
                        style={{ animationDelay: `${i * 0.025}s` }}
                    >
                        {lettre}
                    </span>
                    ))} </p>
                <p className="text-xl px-6">
                {"Je suis à la recherche d'une alternance pour ma deuxième et troisième année de BUT GEII".split('').map((lettre, i) => (
                    <span className={`opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}
                        key={i}
                        style={{ animationDelay: `${i * 0.03}s` }}
                    >
                        {lettre}
                    </span>
                    ))}
               </p>
           













</div>
</section>)
}
export default About