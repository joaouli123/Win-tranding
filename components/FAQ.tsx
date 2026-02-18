import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: '1',
      question: 'O que é Importação por Conta e Ordem?',
      answer: 'É o modelo em que a empresa importadora mantém a titularidade da operação enquanto nós conduzimos as etapas técnicas e fiscais.'
    },
    {
      id: '2',
      question: 'Qual a diferença entre Importação por Conta e Ordem e Importação por Encomenda?',
      answer: 'Na Conta e Ordem, o cliente é o importador legal e nós prestamos serviço. Na Encomenda, a Win realiza a compra, a importação e revende a mercadoria nacionalizada para sua empresa.'
    },
    {
      id: '3',
      question: 'Vocês atendem empresas iniciantes?',
      answer: 'Sim! Temos soluções escaláveis e consultoria especializada para quem está começando a importar.'
    },
    {
      id: '4',
      question: 'É possível importar sem ter um setor interno exclusivo?',
      answer: 'Com certeza. A Win Trading atua como seu departamento de comércio exterior terceirizado, cuidando de toda a operação.'
    },
    {
      id: '5',
      question: 'Como iniciar uma cotação?',
      answer: 'Basta preencher o formulário na seção de Cotação acima ou clicar no botão "Falar com um especialista" para ser atendido pelo nosso time comercial.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-darker">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h4 className="text-brand-accent font-bold tracking-[0.2em] uppercase mb-4">FAQ</h4>
          <h2 className="text-4xl font-bold mb-6">Dúvidas frequentes</h2>
          <a href="#cotacao" className="bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider inline-block transition-colors">
            Falar com um especialista
          </a>
        </div>

        <div className="md:w-2/3">
          <div className="divide-y divide-gray-800">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="py-4">
                <button 
                  className="w-full flex justify-between items-center py-4 text-left group"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`text-xl font-bold transition-colors ${openIndex === index ? 'text-brand-accent' : 'text-white group-hover:text-gray-300'}`}>
                    {faq.question}
                  </span>
                  <span className={`ml-4 p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-accent text-white' : 'bg-gray-800 text-gray-400'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-400 leading-relaxed pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;