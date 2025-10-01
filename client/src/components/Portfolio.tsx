import React from 'react';
import Digital from "@/components/assets/Digital.png";
import Brand from "@/components/assets/Brand_Building.png";
import Marketing from "@/components/assets/Marketing.png";

const portfolioItems = [
  {
    title: "Beginner Class",
    description: "For those of you who are just learning design.",
    image: Marketing,
    accent: "bg-[#2563eb]",
  },
  {
    title: "Expert Class",
    description: "For those of you who want to upgrade your skill.",
    image: Digital,
    accent: "bg-[#2563eb]",
    isPrimary: true,
  },
  {
    title: "Employee Class",
    description: "For those of you who are just busy but want to learn.",
    image: Brand,
    accent: "bg-white",
  },
  {
    title: "Expert Class",
    description: "For those of you who want to upgrade your skill.",
    image: Digital,
    accent: "bg-[#2563eb]",
    isPrimary: true,
  },
  {
    title: "Employee Class",
    description: "For those of you who are just busy but want to learn.",
    image: Brand,
    accent: "bg-white",
  },
  {
    title: "Expert Class",
    description: "For those of you who want to upgrade your skill.",
    image: Digital,
    accent: "bg-[#2563eb]",
    isPrimary: true,
  },
];

const Portfolio: React.FC = () => (
  <section id="portfolio" className="py-16 bg-[#1b1b1b] font-[Montserrat,sans-serif] min-h-[80vh]">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Portfolio</h2>
        <p className="text-[#e3e3e3] max-w-xl mt-4 md:mt-0 text-base text-center md:text-right">
          Here's our types of design classes that will accompany you in learning graphic design
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioItems.map((item, idx) => (
          <div
            key={item.title + idx}
            className={`
              relative rounded-2xl border-2 ${item.isPrimary ? 'bg-[#111ac3] border-[#111ac3]' : 'bg-[#242424] border-[#111ac3]'}
              shadow-md p-5 flex flex-col min-h-[340px]
            `}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className={`text-xl font-bold ${item.isPrimary ? 'text-white' : 'text-[#D1FF00]'}`}>{item.title}</h3>
              <span className={`
                rounded-full w-7 h-7 flex items-center justify-center absolute top-4 right-4
                ${item.isPrimary ? 'bg-[#D1FF00]' : 'bg-[#111ac3]'}
              `}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="none"/>
                  <path d="M8 12l4-4M10 8h2v2" stroke={item.isPrimary ? "#111ac3" : "#D1FF00"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <p className={`mb-3 ${item.isPrimary ? 'text-white/90' : 'text-[#e3e3e3]'}`}>{item.description}</p>
            <div className="mt-auto w-full flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl object-cover h-50 w-30 max-w-[300px]"
              />
            </div>
          </div>
        ))}
      </div>
      {/* Statement Row */}
      <div className="mt-10 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <span className="text-[#D1FF00] text-3xl font-extrabold">*</span>
          <span className="text-2xl md:text-3xl font-extrabold text-white text-center uppercase">
            Keep <span className="bg-[#D1FF00] px-2 rounded font-extrabold text-black">Creating</span> until you<br className="md:hidden"/> find your own <span className="text-[#D1FF00]">Audience.</span>
          </span>
          <span className="text-[#D1FF00] text-3xl font-extrabold hidden md:inline">*</span>
        </div>
        <span className="text-center mt-3 text-[#e3e3e3] font-medium">Defri Muhammad Fahrul Habiebi<br />
          <span className="font-black text-white">Ruang Edit Founder</span>
        </span>
      </div>
    </div>
  </section>
);

export default Portfolio;
