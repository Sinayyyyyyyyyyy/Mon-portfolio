import { useState, useEffect } from 'react'

function Navbar() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
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
      <button className="md:hidden text-white mr-" onClick={() => setIsOpen(!isOpen)}>
  ☰
</button>
       <a className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 text-white font-bold text-xl font-['Archivo_Black']" href="#About">Yanis Ammour</a>
        <div className="hidden md:flex gap-6 ">
            <a className="text-white hover:text-gray-300 px-5 font-['Archivo_Black']" href="#Accueil">Accueil</a>
            <a className="text-white hover:text-gray-300 px-5 font-['Archivo_Black']" href="#skills">Compétences</a>
            <a className="text-white hover:text-gray-300 px-5 font-['Archivo_Black']" href="#Projets">Projets</a>
            <a className="text-white hover:text-gray-300 px-5 font-['Archivo_Black']" href="#Contact">Contact</a>
        </div>
       <div
  className={`absolute top-full left-0 w-full bg-black flex flex-col items-center gap-4 py-6 md:hidden overflow-hidden transition-all duration-300 ${
    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <a className="text-white font-['Archivo_Black']" href="#Accueil" onClick={() => setIsOpen(false)}>Accueil</a>
  <a className="text-white font-['Archivo_Black']" href="#skills" onClick={() => setIsOpen(false)}>Compétences</a>
  <a className="text-white font-['Archivo_Black']" href="#Projets" onClick={() => setIsOpen(false)}>Projets</a>
  <a className="text-white font-['Archivo_Black']" href="#Contact" onClick={() => setIsOpen(false)}>Contact</a>
</div>

    </nav>
  )
}
export default Navbar