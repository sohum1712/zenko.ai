import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import Digital from "@/assets/Digital.png";
import Brand from "@/assets/Brand_Building.png";
import Marketing from "@/assets/Marketing.png";
import EcomImage from "@/assets/Ecom.jpg";
import MobileImage from "@/assets/Mobile.jpg";
import CorporateImage from "@/assets/Corporate.jpg";

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
  <section id="portfolio" className="py-20 md:py-28 bg-[#f8fbfe] relative overflow-hidden">
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4d8af0]/10 rounded-full border border-[#4d8af0]/20 mb-6">
          <span className="w-2 h-2 bg-[#4d8af0] rounded-full"></span>
          <span className="text-[#4d8af0] text-sm font-medium tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>OUR WORK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1a2e] leading-tight mb-6" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
          Featured <span className="text-[#4d8af0]">Projects</span>
        </h2>
        <p className="text-[#6b7280] text-base md:text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
          Discover our comprehensive range of digital solutions designed to accelerate your business growth.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
        {portfolioItems.map((item, idx) => (
          <div
            key={idx}
            className="group rounded-2xl md:rounded-3xl bg-white border border-gray-100 overflow-hidden hover:border-[#4d8af0]/30 transition-all duration-300 hover:shadow-xl shadow-sm"
          >
            {/* Image */}
            <div className="overflow-hidden h-40 md:h-48">
              <LazyImage
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                aspectRatio="16/9"
                containerClassName="h-full"
              />
            </div>
            
            {/* Content */}
            <div className="p-5 md:p-6">
              <span className="text-xs px-3 py-1 bg-[#4d8af0]/10 text-[#4d8af0] rounded-full font-medium uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.category}
              </span>
              <h3 className="text-[#1a1a2e] font-semibold text-lg md:text-xl mt-3 md:mt-4 mb-2 group-hover:text-[#4d8af0] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-[#4d8af0] group-hover:text-[#1a1a2e] transition-colors">
                <span className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>View Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="text-center bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
        <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#1a1a2e] leading-tight mb-6 md:mb-8" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
          "Keep <span className="text-[#4d8af0]">Creating</span> until you find your own <span className="text-[#4d8af0]">Audience</span>."
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#4d8af0] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200/50">
            <span className="text-lg md:text-xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Z</span>
          </div>
          <div className="text-left">
            <p className="text-[#1a1a2e] font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Zenko Team</p>
            <p className="text-[#6b7280] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Creative Directors</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
