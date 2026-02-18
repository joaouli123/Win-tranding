import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '25 +', label: 'Anos de experiência' },
    { value: '800 +', label: 'Clientes satisfeitos' },
    { value: '30 Mil +', label: 'Entregas realizadas' },
  ];

  return (
    <div className="relative z-30 container mx-auto px-6">
      {/* Removed the large negative top margin (-mt-20) here because we are using negative bottom margin on Hero now */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-brand-darker">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`
              relative p-10 flex flex-col items-center justify-center text-center group overflow-hidden
              ${index % 2 === 0 ? 'bg-brand-card' : 'bg-brand-secondary'}
            `}
          >
            {/* Hover effect background */}
            <div className="absolute inset-0 bg-brand-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            
            <h3 className={`text-5xl md:text-6xl font-black mb-2 relative z-10 tracking-tighter ${index % 2 === 0 ? 'text-white' : 'text-white'}`}>
              {stat.value}
            </h3>
            <p className={`
              text-sm font-bold uppercase tracking-widest relative z-10
              ${index % 2 === 0 ? 'text-brand-accent' : 'text-blue-100'}
            `}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;