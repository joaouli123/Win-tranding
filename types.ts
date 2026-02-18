
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string; // Added image property
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
