import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Commodi veniam sit labore et.',
      excerpt: 'Omnis aut voluptates veritatis eum. Consequatur eum ea nam natus et. Accusamus voluptate amet corrupti. Aut et voluptates aspernatur.',
      image: 'https://images.unsplash.com/photo-1566576912906-600ace75c390?q=80&w=1470&auto=format&fit=crop' // Containers
    },
    {
      id: '2',
      title: 'Esse incidunt debitis consectetur.',
      excerpt: 'Ea error asperiores et eveniet. Ut eum eligendi officia facilis minus vel ducimus ipsum. Provident qui deleniti dignissimos harum.',
      image: 'https://images.unsplash.com/photo-1595246140625-573b715d1128?q=80&w=1635&auto=format&fit=crop' // Logistics/Port
    },
    {
      id: '3',
      title: 'Qui in et quos ut excepturi enim qui.',
      excerpt: 'Reiciendis iure autem cum. Aspernatur blanditiis quia ducimus voluptas voluptatem vel maxime. Est blanditiis autem accusamus.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop' // Data/Charts
    }
  ];

  return (
    <section id="blog" className="py-24 bg-[#0B1121]">
      <div className="container mx-auto px-6">
        
        {/* Header Section matching reference */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="text-brand-accent font-bold tracking-[0.2em] uppercase mb-4 block text-sm">Win Trading Posts</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          {posts.map((post, index) => (
            <article 
              key={post.id} 
              className={`
                group bg-[#0f172a] rounded-sm overflow-hidden border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-2 relative
                /* Escadinha Effect: Stagger vertical position based on index */
                ${index === 1 ? 'md:mt-8' : ''} 
                ${index === 2 ? 'md:mt-16' : ''}
              `}
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
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