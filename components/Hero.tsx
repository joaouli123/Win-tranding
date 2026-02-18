import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    // Removed z-20 from here so children z-indexes interact with siblings (Stats) correctly
    // Kept relative and other layout classes
    <section id="home" className="relative w-full pt-32 pb-12 md:pt-44 md:pb-24 lg:-mb-48 bg-brand-darker overflow-visible">
      {/* Background decoration - z-0 to stay behind everything */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-darker via-[#050b1d] to-brand-darker z-0" />
      
      {/* REQUESTED IMAGE BACKGROUND - Specific URL */}
      {/* Changed: Removed mix-blend-overlay and increased opacity to 30% so it is visible against the dark background */}
      <div className="absolute inset-0 bg-[url('https://pglbr.com.br/wp-content/uploads/2022/05/20210728-362a.jpeg')] bg-cover bg-center bg-no-repeat opacity-30 z-0"></div>
      
      {/* Added a gradient overlay to ensure text remains readable over the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/90 via-brand-darker/70 to-transparent z-0"></div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 z-0"></div>

      {/* Container - removed z-index to avoid stacking context trap */}
      <div className="container mx-auto px-6 relative pointer-events-none">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pointer-events-auto">
          
          {/* Text Content - Left Side - z-20 to sit above BG */}
          <div className="w-full lg:w-1/2 max-w-2xl relative z-20 mb-8 lg:mb-0">
            <p className="text-brand-accent font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up text-xs md:text-sm">
              Bem-vindo a Win Trading
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 animate-fade-in-up delay-100 text-white tracking-tight">
              Transformando <br />
              fronteiras em <br />
              <span className="text-brand-accent">oportunidades.</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg animate-fade-in-up delay-200 border-l-4 border-brand-accent pl-6">
              Simplifique sua importação com a Win Trading. Unimos inteligência estratégica e segurança jurídica para reduzir seus custos e riscos operacionais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a 
                href="#cotacao" 
                className="group bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-accent/20 text-sm"
              >
                Quero solicitar uma cotação
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a 
                href="#sobre" 
                className="border border-white/20 hover:border-white hover:bg-white/5 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider flex items-center justify-center transition-all text-sm"
              >
                Conheça nossa história
              </a>
            </div>
          </div>

          {/* Superimposed Floating Image - Right Side */}
          {/* z-40 to sit ABOVE Stats (which is z-30) */}
          <div className="w-full lg:w-1/2 relative z-40 flex justify-center lg:justify-end perspective-1000">
             {/* Glow effect behind the container */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-accent/20 blur-[100px] rounded-full -z-10"></div>
             
             <img 
              src="https://uxcodedev.com.br/wp-content/uploads/2026/02/Design-sem-nome-3.svg" 
              alt="Cargo Container Illustration" 
              // Using SVG ensures crispness at any size
              className="w-full max-w-[500px] lg:max-w-[850px] h-auto object-contain drop-shadow-2xl pointer-events-none"
              style={{
                // Changed translateY to -60px to move it UP over the stats
                transform: 'rotate(-5deg) translateY(-60px) translateX(10px)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;