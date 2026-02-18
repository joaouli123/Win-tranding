import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Quem Somos', href: '#sobre' },
    { name: 'Cotação', href: '#cotacao' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' },
  ];

  const logoUrl = "https://uxcodedev.com.br/wintrading/wp-content/uploads/2026/01/favicon.png";

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,182,255,0.1)]' : 'bg-transparent'
      }`}
    >
      {/* --- Top Bar --- */}
      <div className={`w-full border-b border-white/10 bg-[#020617] text-gray-400 text-xs py-2 transition-all duration-300 ${scrolled ? 'py-1' : 'py-2'}`}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          
          {/* Contact Info */}
          <div className="flex items-center gap-4 md:gap-6">
            <a href="tel:+5547996213081" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Phone size={12} className="text-brand-accent" />
              <span>+55 (47) 99621-3081</span>
            </a>
            <a href="mailto:email@email.com" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Mail size={12} className="text-brand-accent" />
              <span>email@email.com</span>
            </a>
          </div>

          {/* Language / Actions */}
          <div className="flex items-center gap-4">
             <span className="hidden md:block opacity-30">|</span>
             <div className="flex items-center gap-3">
               <button className="hover:opacity-100 opacity-70 transition-opacity flex items-center gap-1.5 group" title="Português">
                 <img src="https://flagcdn.com/w20/br.png" alt="Português" className="w-5 h-auto rounded-sm group-hover:scale-110 transition-transform" />
                 <span className="hidden sm:inline font-bold text-[10px]">BR</span>
               </button>
               <button className="hover:opacity-100 opacity-70 transition-opacity flex items-center gap-1.5 group" title="English">
                 <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-auto rounded-sm group-hover:scale-110 transition-transform" />
                 <span className="hidden sm:inline font-bold text-[10px]">EN</span>
               </button>
               <button className="hover:opacity-100 opacity-70 transition-opacity flex items-center gap-1.5 group" title="Español">
                 <img src="https://flagcdn.com/w20/es.png" alt="Español" className="w-5 h-auto rounded-sm group-hover:scale-110 transition-transform" />
                 <span className="hidden sm:inline font-bold text-[10px]">ES</span>
               </button>
             </div>
          </div>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <div className={`w-full transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={logoUrl} 
              alt="Win Trading Logo" 
              className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,182,255,0.5)] transition-transform group-hover:scale-110" 
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-brand-accent transition-colors tracking-wide uppercase relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#cotacao" 
              className="bg-brand-accent hover:bg-brand-accentHover text-white px-6 py-2.5 rounded-sm font-bold transition-all uppercase text-sm tracking-wider shadow-[0_0_15px_rgba(0,182,255,0.3)] hover:shadow-[0_0_20px_rgba(0,80,187,0.6)] transform hover:-translate-y-0.5"
            >
              Falar com Especialista
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white hover:text-brand-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-dark/95 border-b border-brand-accent/20 backdrop-blur-xl animate-fade-in-down shadow-2xl">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-white hover:text-brand-accent transition-colors border-l-2 border-transparent hover:border-brand-accent pl-4"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#cotacao" 
              className="bg-brand-accent text-center text-white px-6 py-4 rounded-sm font-bold uppercase shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;