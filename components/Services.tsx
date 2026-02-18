import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: '1',
      title: 'Importação por Conta e Ordem',
      description: 'Mantenha o controle fiscal da operação enquanto nós gerenciamos toda a burocracia e logística para você.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1470&auto=format&fit=crop' // Warehouse/Boxes
    },
    {
      id: '2',
      title: 'Importação por Encomenda',
      description: 'Simplifique sua gestão: a Win realiza a compra, a importação e revende a mercadoria nacionalizada para sua empresa.',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1471&auto=format&fit=crop' // Cargo Ship Deck
    },
    {
      id: '3',
      title: 'Despacho Aduaneiro',
      description: 'Liberação de cargas com organização, precisão documental e acompanhamento próximo.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1511&auto=format&fit=crop' // Documents/Office
    },
    {
      id: '4',
      title: 'Sourcing (Busca de Fornecedores)',
      description: 'Identificação e validação de fornecedores globais para garantir a melhor qualidade e custo.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop' // Handshake
    },
    {
      id: '5',
      title: 'Mentoria Estratégica',
      description: 'Orientação completa para otimizar seus processos de importação e exportação.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop' // Team Strategy
    },
    {
      id: '6',
      title: 'Inteligência Tributária e Financeira',
      description: 'Análise aprofundada para redução de carga tributária e maximização de resultados.',
      image: 'https://images.unsplash.com/photo-1554224154-260327c00c19?q=80&w=1465&auto=format&fit=crop' // Finance/Graphs
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Initialize and track itemsPerView state based on resize
  useEffect(() => {
    const handleResize = () => {
      // Logic for "Peek" effect:
      // Desktop (>1024px): 2.25 items (Shows 2 full + 25% of the next one)
      // Tablet (>768px): 2 items (Standard)
      // Mobile: 1.1 items (Shows 1 full + 10% peek)
      let newItemsPerView = 1.1; 
      
      if (window.innerWidth >= 1024) {
        newItemsPerView = 2.25; 
      } else if (window.innerWidth >= 768) {
        newItemsPerView = 2;
      }
      
      setItemsPerView(newItemsPerView);
    };

    // Call once on mount
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = services.length - Math.floor(itemsPerView);

  // Validate index on resize
  useEffect(() => {
    // When resizing, ensure we don't get stuck in empty space
    if (currentIndex > services.length - itemsPerView) {
      setCurrentIndex(0);
    }
  }, [itemsPerView, services.length, currentIndex]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!isPaused) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, itemsPerView]);

  const handleNext = () => {
    // If we are at the end (allowing for fractional view), loop back to 0
    // The threshold is slightly loose to allow the last item to be fully viewed before looping
    setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        // Check if the next slide would push us past the total items minus the view
        if (nextIndex > services.length - Math.floor(itemsPerView)) {
            return 0;
        }
        return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
        if (prev <= 0) {
            // Loop to the end
            return Math.floor(services.length - itemsPerView); 
        }
        return prev - 1;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) handleNext();
    if (touchStartX.current - touchEndX.current < -50) handlePrev();
    setIsPaused(false);
  };

  return (
    <section id="servicos" className="py-24 bg-[#0B1121] relative overflow-hidden">
      {/* Dark background to harmonize */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column - Fixed Info */}
          <div className="lg:w-[40%] flex flex-col justify-center shrink-0 pr-0 lg:pr-4">
            <div className="bg-brand-card border border-white/5 hover:border-brand-accent/30 p-8 md:p-10 rounded-sm shadow-xl h-full flex flex-col justify-center transition-colors duration-500">
                <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent mb-4">
                NOSSOS SERVIÇOS
                </h4>
                <h2 className="text-3xl md:text-4xl font-black mb-8 text-white leading-[1.1]">
                Soluções em <br />
                <span className="text-brand-accent">comércio exterior</span>
                </h2>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
                Toda importação tem um ponto de partida, um propósito e um destino. A Win Trading atua para que esse caminho aconteça com clareza.
                </p>
                
                <a href="#cotacao" className="w-fit bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,182,255,0.2)] hover:shadow-[0_0_20px_rgba(0,80,187,0.5)]">
                Quero solicitar uma cotação <ArrowRight size={18} />
                </a>

                <div className="hidden lg:flex gap-4 mt-12">
                <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-brand-accent hover:border-brand-accent flex items-center justify-center transition-all">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={handleNext} className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-brand-accent hover:border-brand-accent flex items-center justify-center transition-all">
                    <ChevronRight size={24} />
                </button>
                </div>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div 
            className="lg:w-[60%] overflow-hidden relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* 
              Fractional Width Calculation:
              We allow the container to slide based on the fractional itemsPerView.
            */}
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="flex-shrink-0 px-3 transition-all duration-300"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-[#0f172a] rounded-lg overflow-hidden h-full border border-white/5 hover:border-brand-accent transition-all group/card flex flex-col">
                    {/* Image Area - Increased Height */}
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                      <div className="absolute inset-0 bg-brand-dark/20 group-hover/card:bg-transparent transition-all"></div>
                    </div>
                    
                    {/* Content Area - Dark Background */}
                    <div className="p-8 flex-1 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover/card:text-brand-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <span className="text-brand-accent text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover/card:translate-x-2 transition-transform">
                         Saiba mais <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls (Visible only on mobile) */}
          <div className="lg:hidden flex gap-4 mt-6 justify-center w-full">
              <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-gray-700 text-white flex items-center justify-center"><ChevronLeft size={20} /></button>
              <button onClick={handleNext} className="w-10 h-10 rounded-full border border-gray-700 text-white flex items-center justify-center"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;