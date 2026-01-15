import React from 'react';
import { ArrowRight, Play, Star, CheckCircle2 } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { useGujaratiAudience } from '@/hooks/useGujaratiAudience';
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  const audience = useGujaratiAudience();
  
  const marqueeContent = [
    "Digital Strategy",
    "Brand Identity",
    "Web Development",
    "UI/UX Design",
    "SEO Mastery",
    "Social Media",
    "Cloud Solutions",
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-background">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs tracking-widest uppercase">
              <Star className="w-3 h-3 fill-accent" />
              {audience.isGujarati ? 'નવીન ડિજિટલ એજન્સી' : 'Premium Digital Agency'}
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-foreground">
              WE BUILD <br />
              <span className="gradient-text">DIGITAL</span> <br />
              LEGACIES<span className="text-accent">.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {audience.isGujarati
                ? 'અમે ગુજરાતી વ્યવસાયો માટે આધુનિક ડિજિટલ સોલ્યુશન્સ બનાવીએ છીએ જે ખરેખર પરિણામ આપે છે.'
                : 'Elevating brands through strategic design and cutting-edge technology. We transform complex challenges into seamless digital experiences.'}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button className="btn btn-accent px-8 py-4 text-lg font-bold group">
                {audience.primaryCTA}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center gap-3 font-bold text-foreground hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                  <Play className="w-5 h-5 fill-foreground group-hover:fill-accent" />
                </div>
                {audience.isGujarati ? 'અમારા કામ જુઓ' : 'View Our Work'}
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center font-bold text-xs">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                  <span className="ml-2 font-bold text-foreground">5.0</span>
                </div>
                <p className="text-xs text-muted-foreground">From 200+ global clients</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Visual */}
          <div className="lg:col-span-5 relative lg:block">
            <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
              {/* Abstract Shape Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-3xl rotate-6 -z-10 opacity-20 blur-2xl animate-pulse-slow" />
              
              <div className="relative bg-card border border-border rounded-[2.5rem] p-8 shadow-2xl overflow-hidden h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Project Success</h3>
                  <p className="text-sm text-muted-foreground">Our data-driven approach ensures 100% project delivery rate and client satisfaction.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-2xl">
                    <div className="text-3xl font-black text-accent">98%</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold opacity-50">Retention</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-2xl">
                    <div className="text-3xl font-black text-foreground">150+</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold opacity-50">Launch</div>
                  </div>
                </div>
                
                {/* Visual element representing a website */}
                <div className="mt-6 h-32 w-full bg-muted rounded-xl p-4 space-y-2 border border-border/50">
                   <div className="h-2 w-1/2 bg-accent/20 rounded-full" />
                   <div className="h-2 w-full bg-foreground/10 rounded-full" />
                   <div className="h-2 w-3/4 bg-foreground/10 rounded-full" />
                   <div className="flex gap-2 pt-2">
                     <div className="w-6 h-6 rounded-md bg-accent/40" />
                     <div className="w-6 h-6 rounded-md bg-primary/40" />
                   </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl animate-float">
                <div className="text-4xl font-black">10+</div>
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Marquee Banner */}
      <div className="mt-24 border-y border-border py-8 bg-muted/30 -rotate-1">
        <Marquee speed={80} gradient={false}>
          {marqueeContent.map((text, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-2xl font-black uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity cursor-default">
                {text}
              </span>
              <div className="w-2 h-2 bg-accent rounded-full" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
