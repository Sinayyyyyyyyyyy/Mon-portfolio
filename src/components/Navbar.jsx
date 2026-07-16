import { useState, useEffect } from 'react'

function Navbar() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        setVisible(true)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black transition-transform duration-300 ${
  visible ? 'translate-y-0' : '-translate-y-full'
}`}
      
    >
        <a className="text-white font-bold text-xl font-['Archivo_Black']" href="#About">Yanis Ammour</a>
        <div className="flex gap-6">
            <a className="text-white hover:text-gray-300 px-5 font-['Archivo_Black']" href="#Accueil">Accueil</a>
            <a className="text-white hover:text-gray-300 px-5 font-['Archivo_Black']" href="#skills">Compétences</a>
            <a className="text-white hover:text-gray-300 px-5 font-['Archivo_Black']" href="#Projets">Projets</a>
            <a className="text-white hover:text-gray-300 px-5 font-['Archivo_Black']" href="#Contact">Contact</a>
        </div>
    </nav>
  )
}
export default Navbar