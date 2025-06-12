import React from "react";

const categories = [
  {
    name: "Starters",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    icon: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#23223a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 36c0 8.837 7.163 16 16 16s16-7.163 16-16H16z"/>
          <path d="M32 36V20"/>
          <path d="M24 28h16"/>
          <circle cx="32" cy="16" r="6"/>
        </g>
        <circle cx="32" cy="56" r="10" fill="#FFD233"/>
      </svg>
    ),
  },
  {
    name: "Main dishes",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    icon: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#23223a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="16" y="32" width="32" height="16" rx="8"/>
          <path d="M24 32V24a8 8 0 0 1 16 0v8"/>
          <path d="M32 40v8"/>
        </g>
        <circle cx="32" cy="56" r="10" fill="#FFD233"/>
      </svg>
    ),
  },
  {
    name: "Drinks",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    icon: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#23223a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="20" y="20" width="24" height="28" rx="8"/>
          <path d="M32 48v8"/>
          <path d="M24 20V12h16v8"/>
          <circle cx="48" cy="20" r="4"/>
        </g>
        <circle cx="32" cy="56" r="10" fill="#FFD233"/>
      </svg>
    ),
  },
  {
    name: "Desserts",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    icon: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#23223a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="32" cy="40" rx="16" ry="8"/>
          <path d="M32 40V24"/>
          <path d="M24 32h16"/>
          <circle cx="32" cy="20" r="6"/>
        </g>
        <circle cx="32" cy="56" r="10" fill="#FFD233"/>
      </svg>
    ),
  },
];

const ProductSection = () => {
  return (
    <section className="py-16 px-4 bg-white" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#23223a] mb-4" style={{fontFamily: 'Inter, sans-serif'}}>What do you like today?</h2>
            <p className="text-[#6c6c80] text-lg max-w-xl">Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.</p>
          </div>
          <a href="#products" className="inline-flex items-center gap-3 bg-[#FFD233] hover:bg-yellow-400 text-[#23223a] font-semibold px-8 py-4 shadow transition text-lg self-start md:self-auto">
            <span>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#23223a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </span>
            Go shopping now
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={cat.name} className="flex items-start gap-6 bg-[#fafbfc] p-8 shadow-sm">
              <div className="shrink-0">{cat.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-[#23223a] mb-2" style={{fontFamily: 'Inter, sans-serif'}}>{cat.name}</h3>
                <p className="text-[#6c6c80] text-base md:text-lg">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection; 