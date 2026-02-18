import React from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const logoUrl = "https://uxcodedev.com.br/wintrading/wp-content/uploads/2026/01/logo_wintrading-1.png-4-1024x222.avif";

  return (
    <footer className="bg-[#020617] text-white pt-20 pb-8 font-sans relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* 1. Header Section: Logo & Description (Centered) */}
        <div className="flex flex-col items-center justify-center mb-16 text-center max-w-2xl mx-auto">
          <div className="mb-6">
             {/* Updated to use the new wide logo, removed the text span as the logo likely contains the name */}
             <img src={logoUrl} alt="Win Trading" className="h-12 md:h-16 w-auto object-contain" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Transformando fronteiras em oportunidades de negócio. Simplifique sua importação com inteligência estratégica e segurança jurídica.
          </p>
        </div>

        {/* 2. Contact Bars Row (The Dark Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {/* Box 1 */}
            <div className="bg-[#0f172a] border border-white/5 py-8 px-4 rounded-sm flex items-center justify-center gap-4 transition-transform hover:-translate-y-1 group">
                <div className="w-10 h-10 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-300 font-medium text-sm">Itajaí – SC</span>
            </div>

            {/* Box 2 */}
            <div className="bg-[#0f172a] border border-white/5 py-8 px-4 rounded-sm flex items-center justify-center gap-4 transition-transform hover:-translate-y-1 group">
                <div className="w-10 h-10 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                   <Phone size={18} />
                </div>
                <span className="text-gray-300 font-medium text-sm">+55 (47) 99621-3081</span>
            </div>

            {/* Box 3 */}
            <div className="bg-[#0f172a] border border-white/5 py-8 px-4 rounded-sm flex items-center justify-center gap-4 transition-transform hover:-translate-y-1 group">
                <div className="w-10 h-10 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                   <Mail size={18} />
                </div>
                <span className="text-gray-300 font-medium text-sm">email@email.com</span>
            </div>
        </div>

        {/* 3. Links Grid (4 Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 mb-20 border-t border-white/5 pt-16">
          
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#home" className="hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="#sobre" className="hover:text-brand-accent transition-colors">Quem Somos</a></li>
              <li><a href="#servicos" className="hover:text-brand-accent transition-colors">Serviços</a></li>
              <li><a href="#blog" className="hover:text-brand-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Documentos</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Contrato Social</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Certificações</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Conta e Ordem</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Por Encomenda</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Despacho Aduaneiro</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Sourcing</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Redes Sociais</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-accent transition-colors flex items-center gap-2"><Instagram size={16}/> Instagram</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors flex items-center gap-2"><Linkedin size={16}/> LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors flex items-center gap-2"><Facebook size={16}/> Facebook</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors flex items-center gap-2"><Youtube size={16}/> Youtube</a></li>
            </ul>
          </div>

        </div>

        {/* 4. Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p className="mb-4 md:mb-0">Copyright © 2026 Win Trading Ltda. Todos os direitos reservados.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-brand-accent transition-colors">Política de Privacidade</a>
             <a href="#" className="hover:text-brand-accent transition-colors">Termos e Serviços</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;