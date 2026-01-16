import React from 'react';
import { ArrowUpRight } from 'lucide-react';
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
    description: "Complete online store with payment integration and analytics dashboard.",
    image: EcomImage,
    category: "Web Development",
  },
  {
    title: "Brand Identity Suite",
    description: "Comprehensive brand development including logo, typography, and guidelines.",
    image: Brand,
    category: "Branding",
  },
  {
    title: "Mobile Application",
    description: "Cross-platform mobile app with real-time features and push notifications.",
    image: MobileImage,
    category: "Mobile Development",
  },
  {
    title: "Corporate Website",
    description: "Professional website with CMS integration and SEO optimization.",
    image: CorporateImage,
    category: "Web Development",
  },
  {
    title: "Marketing Campaign",
    description: "Integrated digital marketing strategy with social media and PPC.",
    image: Marketing,
    category: "Digital Marketing",
  },
  {
    title: "Creative Solutions",
    description: "Innovative digital solutions combining AR/VR with web technologies.",
    image: Digital,
    category: "Innovation",
  },
];

const Portfolio: React.FC = () => (
  <section id="portfolio" className="py-24 bg-[#11120D] relative overflow-hidden">
    <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#565449]/30 rounded-full border border-[#565449] mb-6">
          <span className="w-2 h-2 bg-[#D8CFBC] rounded-full"></span>
          <span className="text-[#D8CFBC] text-sm font-medium tracking-wide">OUR WORK</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#FFFBF4] leading-tight mb-6">
          Featured <span className="text-[#D8CFBC]">Projects</span>
        </h2>
        <p className="text-[#D8CFBC] text-lg max-w-2xl mx-auto font-sans">
          Discover our comprehensive range of digital solutions designed to accelerate your business growth.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {portfolioItems.map((item, idx) => (
          <div
            key={idx}
            className="group rounded-3xl bg-[#565449]/20 border border-[#565449]/50 overflow-hidden hover:border-[#D8CFBC]/50 transition-all duration-300 hover-lift"
          >
            {/* Image */}
            <div className="overflow-hidden h-48">
              <LazyImage
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                aspectRatio="16/9"
                containerClassName="h-full"
              />
            </div>
            
            {/* Content */}
            <div className="p-6">
              <span className="text-xs px-3 py-1 bg-[#D8CFBC]/20 text-[#D8CFBC] rounded-full font-medium uppercase tracking-wider">
                {item.category}
              </span>
              <h3 className="text-[#FFFBF4] font-display font-bold text-xl mt-4 mb-2 group-hover:text-[#D8CFBC] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#D8CFBC] text-sm font-sans leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-[#D8CFBC] group-hover:text-[#FFFBF4] transition-colors">
                <span className="text-sm font-medium">View Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="text-center bg-[#565449]/20 rounded-3xl p-12 border border-[#565449]/50">
        <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#FFFBF4] leading-tight mb-8">
          "Keep <span className="text-[#D8CFBC]">Creating</span> until you find your own <span className="text-[#D8CFBC]">Audience</span>."
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-14 h-14 bg-[#D8CFBC] rounded-2xl flex items-center justify-center">
            <span className="text-xl font-display font-black text-[#11120D]">Z</span>
          </div>
          <div className="text-left">
            <p className="text-[#FFFBF4] font-bold font-display">Zenko Team</p>
            <p className="text-[#D8CFBC] text-sm font-sans">Creative Directors</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
