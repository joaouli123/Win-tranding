import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Beatriz Almeida',
      role: 'Proprietária da BA Imports',
      text: 'Como não tínhamos um setor de importação interno, a modalidade por encomenda foi a solução perfeita. A Win cuidou de tudo, desde a compra até a entrega na nossa porta. Serviço transparente, profissional e extremamente confiável.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop'
    },
    {
      id: '2',
      name: 'Ricardo Menezes',
      role: 'Diretor de Operações',
      text: 'A Win Trading transformou nossa operação. Antes, o despacho aduaneiro era um gargalo, mas com a consultoria deles, reduzimos o tempo de liberação das cargas em 30%. É o parceiro ideal para quem busca segurança jurídica.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287&auto=format&fit=crop'
    },
    {
      id: '3',
      name: 'Juliana Ferraz',
      role: 'Gerente de Compras',
      text: 'Estávamos inseguros em importar da Ásia pela primeira vez, mas o serviço de Sourcing da Win foi impecável. Eles validaram a fábrica, negociaram os termos e cuidaram de toda a logística. Nossa margem cresceu muito.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop'
    },
    {
      id: '4',
      name: 'André Vasconcelos',
      role: 'CEO da TechLog',
      text: 'O grande diferencial da Win Trading é a inteligência estratégica. Eles conseguiram identificar oportunidades tributárias que as outras tradings ignoraram, gerando uma economia real no custo final da nossa mercadoria.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Reset animation lock
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="bg-brand-darker py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Image Area with Overlay Card */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] group">
              {/* Main Container - No overflow hidden here to allow card to pop out */}
              <div className="relative w-full h-full">
                 {testimonials.map((item, index) => (
                    <div 
                        key={item.id}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        {/* Image Frame - Clipped with rounded corners */}
                        <div className="absolute inset-0 w-full h-full rounded-sm overflow-hidden shadow-2xl border border-white/5 bg-[#020617]">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover grayscale-[20%]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent"></div>
                        </div>

                        {/* Overlay Feedback Card - Popping out negative margins */}
                        {/* Positioned Bottom-Right with negative margins as requested */}
                        <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 z-30 w-[90%] md:w-[450px]">
                           <div className="bg-[#0f172a] border border-white/10 p-8 rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative">
                              <Quote className="text-brand-accent/40 mb-4 fill-brand-accent/10" size={32} />
                              
                              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                                  "{item.text}"
                              </p>

                              <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-accent shrink-0">
                                      <img 
                                          src={`https://ui-avatars.com/api/?name=${item.name}&background=00b6ff&color=fff`} 
                                          alt={item.name} 
                                          className="w-full h-full object-cover"
                                      />
                                  </div>
                                  <div>
                                      <h4 className="text-white font-bold text-sm leading-tight">{item.name}</h4>
                                      <span className="text-brand-accent text-xs font-bold uppercase tracking-wide">{item.role}</span>
                                  </div>
                              </div>
                           </div>
                        </div>
                    </div>
                 ))}
              </div>
          </div>

          {/* Right Column: Static Text Content & Controls */}
          <div className="w-full lg:w-1/2 lg:pl-10 mt-10 lg:mt-0">
             <span className="text-brand-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-fade-in-up">
                CLIENTES
             </span>
             <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-white mb-8 animate-fade-in-up delay-100">
                O que nossos clientes <br />
                dizem sobre nós
             </h2>
             <p className="text-gray-400 text-lg leading-relaxed mb-12 animate-fade-in-up delay-200 font-medium">
                A satisfação de quem confia no nosso trabalho é o que nos move. Confira o impacto real das nossas soluções no dia a dia de empresas e profissionais que buscam excelência.
             </p>
             
             {/* Navigation Controls */}
             <div className="flex items-center gap-6 mb-8 animate-fade-in-up delay-300">
                <button 
                  onClick={handlePrev} 
                  className="w-14 h-14 rounded-full border border-white/20 hover:bg-brand-accent hover:border-brand-accent text-white flex items-center justify-center transition-all group"
                  aria-label="Previous testimonial"
                >
                    <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleNext} 
                  className="w-14 h-14 rounded-full border border-white/20 hover:bg-brand-accent hover:border-brand-accent text-white flex items-center justify-center transition-all group"
                  aria-label="Next testimonial"
                >
                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </div>

             <a href="#cotacao" className="inline-flex items-center gap-2 text-brand-accent font-bold uppercase tracking-wider hover:text-white transition-colors animate-fade-in-up delay-300 group">
                Falar com um especialista <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;