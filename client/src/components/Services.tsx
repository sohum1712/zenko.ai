import React from 'react';
import { ArrowUpRight, Zap, Target, BarChart3, Globe, Shield, Smartphone } from 'lucide-react';

// Professional service images - using local assets for better performance
import BrandImage from '@/components/assets/Brand.jpg';
import MarketingImage from '@/components/assets/Marketing.png';
import DigitalImage from '@/components/assets/Digital.png';

const Services: React.FC = () => {
  const services = [
    {
      title: "Brand Strategy",
      desc: "We build identities that resonate. From logo design to brand voice, we ensure your message is clear and compelling.",
      icon: <Target className="w-6 h-6" />,
      image: BrandImage,
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "Digital Solutions",
      desc: "Cutting-edge web and mobile development tailored to your business needs. Fast, secure, and scalable.",
      icon: <Smartphone className="w-6 h-6" />,
      image: DigitalImage,
      color: "bg-indigo-500/10 text-indigo-500"
    },
    {
      title: "Growth Marketing",
      desc: "Data-driven campaigns that drive ROI. SEO, PPC, and social media strategies that actually convert.",
      icon: <BarChart3 className="w-6 h-6" />,
      image: MarketingImage,
      color: "bg-emerald-500/10 text-emerald-500"
    }
  ];

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest">
              <Zap className="w-3 h-3 fill-accent" />
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-none">
              WE SOLVE <span className="text-accent">PROBLEMS</span> <br />
              WITH DESIGN.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            Comprehensive digital services designed to help modern brands navigate the complexities of the digital landscape and achieve sustainable growth.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-card border border-border rounded-3xl p-8 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-12">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.color}`}>
                  {service.icon}
                </div>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
