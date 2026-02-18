import React from 'react';
import { Send, MapPin, Weight, Mail, Box, ArrowRight } from 'lucide-react';

const Quotation: React.FC = () => {
  return (
    <section id="cotacao" className="relative bg-brand-dark py-24">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-darker"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row rounded-sm overflow-hidden shadow-[0_0_50px_rgba(0,182,255,0.15)]">
          
          {/* Left Side: Call to Action */}
          <div className="lg:w-2/5 relative bg-gradient-to-br from-brand-secondary to-brand-accent min-h-[500px] flex flex-col justify-between p-12 text-white overflow-hidden">
             
             {/* Background Image - RESTORED VISIBILITY with NEW URL */}
             <div className="absolute inset-0 bg-[url('https://pglbr.com.br/wp-content/uploads/2022/05/20210728-362a.jpeg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>

             {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-black/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm border border-white/10">
                Logística Integrada
              </div>
              <h2 className="text-3xl lg:text-4xl font-black mb-6 leading-tight">
                Realize uma <br/>
                cotação
              </h2>
              <p className="opacity-90 leading-relaxed text-lg font-light">
                Solicite uma cotação personalizada. Nossa equipe de especialistas analisará a melhor rota e modalidade para reduzir custos e otimizar prazos.
              </p>
            </div>

            <div className="relative z-10 mt-12">
               <div className="p-6 bg-black/20 backdrop-blur-md rounded-sm border border-white/10">
                  <h4 className="font-bold mb-2 flex items-center gap-2"><MapPin size={18}/> Atendimento Nacional</h4>
                  <p className="text-sm opacity-80">Nossa matriz em Itajaí-SC conecta sua empresa aos principais portos do mundo.</p>
               </div>
            </div>
          </div>

          {/* Right Side: Form (Dark Mode) */}
          <div className="lg:w-3/5 bg-brand-card p-8 md:p-12 border-l border-white/5">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-1.5 h-8 bg-brand-accent block rounded-full"></span>
              Dados da Carga
            </h3>
            
            <form className="flex flex-col md:grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-[10px] font-bold uppercase text-brand-gray mb-1.5 tracking-widest group-focus-within:text-brand-accent transition-colors">Partida</label>
                <div className="flex items-center bg-brand-dark/50 border border-white/10 rounded-sm px-4 py-3 group-focus-within:border-brand-accent group-focus-within:bg-brand-dark transition-all duration-300">
                  <MapPin size={16} className="text-gray-500 mr-3 group-focus-within:text-brand-accent" />
                  <input type="text" placeholder="Cidade/País de partida" className="w-full outline-none bg-transparent text-white placeholder-gray-600 text-sm" />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] font-bold uppercase text-brand-gray mb-1.5 tracking-widest group-focus-within:text-brand-accent transition-colors">Destino</label>
                <div className="flex items-center bg-brand-dark/50 border border-white/10 rounded-sm px-4 py-3 group-focus-within:border-brand-accent group-focus-within:bg-brand-dark transition-all duration-300">
                  <MapPin size={16} className="text-gray-500 mr-3 group-focus-within:text-brand-accent" />
                  <input type="text" placeholder="Cidade/Estado de entrega" className="w-full outline-none bg-transparent text-white placeholder-gray-600 text-sm" />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] font-bold uppercase text-brand-gray mb-1.5 tracking-widest group-focus-within:text-brand-accent transition-colors">Modalidade</label>
                <div className="flex items-center bg-brand-dark/50 border border-white/10 rounded-sm px-4 py-3 group-focus-within:border-brand-accent group-focus-within:bg-brand-dark transition-all duration-300">
                  <Box size={16} className="text-gray-500 mr-3 group-focus-within:text-brand-accent" />
                  <select className="w-full outline-none bg-transparent text-white text-sm cursor-pointer [&>option]:text-black appearance-none">
                    <option value="" className="text-gray-500">Selecione o tipo...</option>
                    <option>Container FCL</option>
                    <option>Carga Solta LCL</option>
                    <option>Aéreo</option>
                    <option>Rodoviário</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] font-bold uppercase text-brand-gray mb-1.5 tracking-widest group-focus-within:text-brand-accent transition-colors">Peso (KG)</label>
                <div className="flex items-center bg-brand-dark/50 border border-white/10 rounded-sm px-4 py-3 group-focus-within:border-brand-accent group-focus-within:bg-brand-dark transition-all duration-300">
                  <Weight size={16} className="text-gray-500 mr-3 group-focus-within:text-brand-accent" />
                  <input type="number" placeholder="0.00" className="w-full outline-none bg-transparent text-white placeholder-gray-600 text-sm" />
                </div>
              </div>

              <div className="md:col-span-2 group">
                <label className="block text-[10px] font-bold uppercase text-brand-gray mb-1.5 tracking-widest group-focus-within:text-brand-accent transition-colors">Seu e-mail</label>
                <div className="flex items-center bg-brand-dark/50 border border-white/10 rounded-sm px-4 py-3 group-focus-within:border-brand-accent group-focus-within:bg-brand-dark transition-all duration-300">
                  <Mail size={16} className="text-gray-500 mr-3 group-focus-within:text-brand-accent" />
                  <input type="email" placeholder="seu.nome@empresa.com.br" className="w-full outline-none bg-transparent text-white placeholder-gray-600 text-sm" />
                </div>
              </div>

              <div className="md:col-span-2 mt-2">
                <button type="submit" className="w-full bg-brand-accent hover:bg-brand-accentHover text-white font-bold uppercase tracking-widest py-4 rounded-sm transition-all shadow-[0_4px_20px_0_rgba(0,182,255,0.3)] hover:shadow-[0_8px_30px_rgba(0,182,255,0.4)] hover:-translate-y-1 flex justify-center items-center gap-2 group">
                  Solicitar Cotação
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotation;