import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: string;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Parse the number from strings like "25 +", "800 +", "30 Mil +"
  const endValue = parseInt(end.replace(/[^0-9]/g, '')) || 0;
  const suffix = end.replace(/[0-9]/g, '').trim();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, endValue, duration]);

  return (
    <span ref={countRef}>
      {count} {suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { value: '25 +', label: 'Anos de experiência' },
    { value: '800 +', label: 'Clientes satisfeitos' },
    { value: '30 Mil +', label: 'Entregas realizadas' },
  ];

  return (
    <div className="relative z-30 container mx-auto px-6 -mt-16 md:-mt-20">
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
            
            <h3 className={`text-5xl md:text-6xl font-black mb-3 relative z-10 tracking-tighter ${index % 2 === 0 ? 'text-white' : 'text-white'}`}>
              <CountUp end={stat.value} />
            </h3>
            <p className={`
              text-[10px] font-bold uppercase tracking-[0.3em] relative z-10
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