import React from 'react';
import LazyImage from '@/components/LazyImage';
import Digital from "@/components/assets/Digital.png";
import Brand from "@/components/assets/Brand_Building.png";
import Marketing from "@/components/assets/Marketing.png";
import EcomImage from "@/components/assets/Ecom.jpg";
import MobileImage from "@/components/assets/Mobile.jpg";
import CorporateImage from "@/components/assets/Corporate.jpg";

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    description: "Complete online store with payment integration, inventory management, and customer analytics dashboard.",
    image: EcomImage,
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB"],
    isPrimary: false,
  },
  {
    title: "Brand Identity Suite",
    description: "Comprehensive brand development including logo design, color palette, typography, and brand guidelines.",
    image: Brand,
    category: "Branding",
    technologies: ["Adobe Suite", "Figma", "After Effects"],
    isPrimary: true,
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile application with real-time features, push notifications, and offline capabilities.",
    image: MobileImage,
    category: "Mobile Development",
    technologies: ["React Native", "Firebase", "TypeScript"],
    isPrimary: false,
  },
  {
    title: "Corporate Website",
    description: "Professional corporate website with CMS integration, SEO optimization, and multi-language support.",
    image: CorporateImage,
    category: "Web Development",
    technologies: ["Next.js", "Strapi", "Tailwind CSS"],
    isPrimary: true,
  },
  {
    title: "Digital Marketing Campaign",
    description: "Integrated digital marketing strategy including social media, PPC advertising, and content marketing.",
    image: Marketing,
    category: "Digital Marketing",
    technologies: ["Google Ads", "Facebook Ads", "Analytics"],
    isPrimary: false,
  },
  {
    title: "Creative Solutions",
    description: "Innovative digital solutions combining AR/VR technologies with traditional web development approaches.",
    image: Digital,
    category: "Innovation",
    technologies: ["Three.js", "WebXR", "Progressive Web Apps"],
    isPrimary: true,
  },
];

const Portfolio: React.FC = () => (
  <section id="portfolio" className="py-20 bg-[#171717] relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-[#F25C23] rounded-full flex items-center justify-center">
              <span className="block w-3 h-3 bg-black rounded-full"></span>
            </div>
            <span className="uppercase text-sm font-bold tracking-widest text-[#F25C23] font-sans">OUR WORK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#DEDEDE] mb-6 leading-tight font-display">
            Our <span className="text-[#F25C23]">Creative</span> Portfolio
          </h2>
          <p className="text-[#DEDEDE]/80 max-w-3xl mx-auto text-lg leading-relaxed font-sans">
            Discover our comprehensive range of digital solutions designed to accelerate your business growth and create lasting impact in your industry.
          </p>
        </div>
      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {portfolioItems.map((item, idx) => (
          <div
            key={item.title + idx}
            className={`
              group relative rounded-3xl border-2 transition-all duration-500 hover-lift cursor-pointer overflow-hidden
              ${item.isPrimary 
                ? 'bg-[#4D4D4D] border-[#4D4D4D] hover:border-[#F25C23]' 
                : 'bg-[#171717] border-[#171717] hover:border-[#F25C23]'
              } p-8 flex flex-col min-h-[420px]
            `}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 bg-[#F25C23]/20 text-[#F25C23] rounded-full font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <h3 className={`text-xl font-black mb-2 font-display group-hover:text-[#F25C23] transition-colors duration-300 ${
                    item.isPrimary ? 'text-[#DEDEDE]' : 'text-[#DEDEDE]'
                  }`}>
                    {item.title}
                  </h3>
                </div>
                <div className={`
                  w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45
                  ${item.isPrimary ? 'bg-[#F25C23]' : 'bg-[#4D4D4D]'}
                `}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7" className={item.isPrimary ? 'stroke-[#171717]' : 'stroke-[#F25C23]'} />
                    <path d="M7 7h10v10" className={item.isPrimary ? 'stroke-[#171717]' : 'stroke-[#F25C23]'} />
                  </svg>
                </div>
              </div>
              
              {/* Description */}
              <p className={`text-sm mb-6 leading-relaxed flex-grow font-sans ${
                item.isPrimary ? 'text-[#DEDEDE]/90' : 'text-[#DEDEDE]/80'
              }`}>
              {item.description}
            </p>
            
            {/* Technologies */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIdx) => (
                  <span 
                    key={techIdx}
                    className="text-xs px-2 py-1 bg-[#DEDEDE]/10 text-[#DEDEDE]/70 rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Image */}
            <div className="mt-auto overflow-hidden rounded-xl">
              <LazyImage
                src={item.image}
                alt={`${item.title} - ${item.category} project showcase`}
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                aspectRatio="16/10"
                containerClassName="rounded-xl"
              />
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F25C23]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
      {/* Inspirational Quote Section */}
      <div className="text-center bg-[#171717] rounded-3xl p-12 border border-[#4D4D4D]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-2 h-2 bg-[#F25C23] rounded-full"></div>
            <div className="w-3 h-3 bg-[#F25C23] rounded-full" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-[#F25C23] rounded-full" style={{animationDelay: '0.4s'}}></div>
          </div>
        <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#DEDEDE] leading-tight mb-8 font-display">
              "Keep <span className="bg-[#F25C23] px-3 py-1 rounded-xl text-[#171717] inline-block transform -rotate-1">Creating</span><br className="md:hidden" /> 
              until you find your own <span className="text-[#F25C23] relative">
                Audience
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#F25C23] rounded-full transform -rotate-1"></div>
              </span>."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-[#4D4D4D] rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-black text-[#DEDEDE] font-display">Z</span>
              </div>
              <div className="text-left">
                <p className="text-[#F25C23] font-bold text-lg font-display">Zenko Team</p>
                <p className="text-[#DEDEDE]/70 text-sm font-sans">Creative Directors & Founders</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
