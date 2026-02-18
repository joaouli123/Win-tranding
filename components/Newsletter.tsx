import React from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="relative w-full z-20">
      {/* Full width banner matching the reference style but with Brand Colors */}
      <div className="bg-gradient-to-r from-brand-secondary to-brand-accent py-16 relative overflow-hidden">
        
        {/* Decorative Background Pattern */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
        {/* Container Image Overlay effect (abstract lines/container texture) */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-no-repeat opacity-10 mix-blend-overlay mask-gradient-left"></div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
              Assine nossa newsletter
            </h2>
            <p className="text-blue-100 text-sm mt-2 opacity-90">
              Receba atualizações sobre logística e cotações do dólar.
            </p>
          </div>

          {/* Right Form - Styled like reference */}
          <div className="w-full lg:w-1/2 max-w-lg">
            <form className="relative flex items-center group">
              <input 
                type="email" 
                placeholder="exemplo@email.com" 
                className="w-full bg-transparent border-b-2 border-white/20 py-4 px-2 text-white placeholder-blue-100/50 outline-none focus:border-white transition-all text-lg font-light"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-brand-darker hover:bg-black text-white font-bold uppercase text-[10px] tracking-[0.2em] px-8 py-3.5 rounded-full transition-all shadow-xl hover:-translate-y-[calc(50%+2px)] active:translate-y-[calc(50%-1px)]"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;