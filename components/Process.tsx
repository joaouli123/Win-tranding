import React from 'react';
import { PackageCheck, Ship, Truck } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      id: '1',
      title: 'Recebimento da Carga',
      description: 'Coletamos sua mercadoria no fornecedor e iniciamos a conferência documental e física.',
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1470&auto=format&fit=crop" // Warehouse/Forklift
    },
    {
      id: '2',
      title: 'Embarque Internacional',
      description: 'Gerenciamos todo o trâmite aduaneiro e transporte com monitoramento em tempo real.',
      image: "https://images.unsplash.com/photo-1577712399650-6c9c45014605?q=80&w=1470&auto=format&fit=crop" // Ship at Sea
    },
    {
      id: '3',
      title: 'Entrega Final',
      description: 'Após a nacionalização, realizamos a entrega rodoviária no seu centro de distribuição.',
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1470&auto=format&fit=crop" // Truck on Highway
    }
  ];

  return (
    <section className="py-24 bg-brand-darker relative overflow-hidden">
       {/* Background subtle texture */}
       <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
            Nós seguimos o melhor <span className="text-brand-accent">Processo</span> <br/>
            Para entregar resultados
          </h2>
          <p className="text-gray-400 text-lg">
            Transparência e metodologia validada em cada etapa da sua importação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
           {/* Connecting Line (Desktop) - Dark Mode style */}
           <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-0 -translate-y-1/2"></div>
           
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 group">
              {/* Card Dark Mode */}
              <div className="bg-[#0f172a] p-5 rounded-lg border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,182,255,0.15)] hover:border-brand-accent/50">
                
                {/* Image Container */}
                <div className="relative h-64 rounded-md overflow-hidden mb-8">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                  
                  {/* Number Badge */}
                  <div className="absolute -bottom-5 -left-2 w-12 h-12 bg-brand-accent text-white font-bold text-xl flex items-center justify-center rounded-full border-4 border-[#0f172a] shadow-lg group-hover:bg-white group-hover:text-brand-accent transition-colors">
                    {step.id}
                  </div>
                </div>
                
                <div className="mt-4 px-2 pb-4">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;