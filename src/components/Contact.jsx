function Contact() {
  return (
    <div id="Contact" className="bg-[#081321] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Contact</h2>
        <p className="text-white mb-4">Vous pouvez me contacter via mon numéro de téléphone ou par email :</p>
        <ul className="text-white">
          <li>Email: <a href="mailto:contact.yanisammour@gmail.com" className="text-blue-500 hover:underline">
            contact.yanisammour@gmail.com
          </a></li>
          <li>Téléphone: <a href="tel:+33783807983" className="text-blue-500 hover:underline">
            +33 7 83 80 79 83
          </a></li>
          
        </ul>
        <p className="text-gray-300 italic text-center mt-4 text-xs">
            Ce site a été réalisé avec l'aide de l'IA dans le but de faciliter le partage de mon portfolio, j'en ai d'ailleurs profité pour apprendre à utiliser ces outils dans un but éducatif.
            Cependant, les compétences que j'ai acquises au cours de ma formation sont elles bien réelles et je suis capable de les mettre en pratique dans des projets concrets.
        </p>
      </div>
    </div>
  );
}
export default Contact;