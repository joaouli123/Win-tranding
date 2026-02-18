import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Estratégias para Redução de Custos na Importação',
      excerpt: 'Descubra como a inteligência tributária e a escolha correta do porto podem impactar drasticamente sua margem de lucro.',
      image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1470&auto=format&fit=crop'
    },
    {
      id: '2',
      title: 'O Futuro do Comércio Exterior em 2026',
      excerpt: 'Tendências tecnológicas e novas regulamentações que estão moldando o cenário global de logística e trading.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1470&auto=format&fit=crop'
    },
    {
      id: '3',
      title: 'Gestão de Riscos Documentais',
      excerpt: 'Evite multas e atrasos desnecessários com um checklist rigoroso para seu despacho aduaneiro.',
      image: '/images/blog-fix.png'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-[#0B1121]">
      <div className="container mx-auto px-6">
        
        {/* Header Section matching reference */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="text-brand-accent font-bold tracking-[0.2em] uppercase mb-4 block text-sm">Win Trading Posts</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Acompanhe nossos posts <br/> mais recentes:
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-xl">
              Conteúdo técnico e direto sobre comércio exterior para quem importa ou deseja iniciar no setor.
            </p>
          </div>
          
          <a 
            href="#" 
            className="bg-brand-secondary hover:bg-brand-accent text-white font-bold uppercase text-sm tracking-wider px-8 py-4 rounded-sm transition-all shadow-lg flex items-center gap-2 group whitespace-nowrap"
          >
            Acessar Blog <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Blog Grid with "Escadinha" (Staggered) Effect & Badges */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-12 snap-x snap-mandatory scrollbar-hide">
          {posts.map((post, index) => (
            <article 
              key={post.id} 
              className={`
                group bg-[#0f172a] rounded-sm overflow-hidden border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-2 relative
                min-w-[85vw] md:min-w-0 snap-center
                /* Escadinha Effect: Stagger vertical position based on index */
                ${index === 1 ? 'md:mt-8' : ''} 
                ${index === 2 ? 'md:mt-16' : ''}
              `}
            >
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                
                {/* Number Badge - Overlapping Image & Content */}
                <div className="absolute -bottom-5 left-8 w-12 h-12 bg-brand-secondary text-white font-bold text-sm flex items-center justify-center rounded-full border-4 border-[#0f172a] shadow-lg z-10 group-hover:bg-brand-accent transition-colors">
                  0{index + 1}
                </div>
              </div>

              {/* Content Section */}
              <div className="pt-10 px-8 pb-8 relative">
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-brand-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="border-t border-white/5 pt-6">
                  <a href="#" className="inline-flex items-center text-white font-bold text-sm hover:text-brand-accent transition-colors group/link decoration-brand-accent/30 underline-offset-4 hover:underline">
                    Leia mais <span className="ml-1 group-hover/link:translate-x-1 transition-transform">»</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;