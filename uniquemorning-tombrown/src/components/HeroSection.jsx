import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-x-12 max-w-screen-xl mx-auto min-h-[80vh] px-4 md:px-[5vw] pb-8 md:pb-0 overflow-x-clip relative">
      <div className={`md:w-auto text-left md:-mt-30 mt-8 z-10 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
      }`}>
        <span className={`inline-block text-xs md:text-sm text-[#6c6c80] bg-[#f3f4f8] px-2.5 py-1 rounded mb-5 font-medium transition-all duration-700 delay-200 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        } hover:bg-[#ffd233] hover:text-[#23223a] hover:scale-105 transition-all duration-300 cursor-pointer`}>
          Hi, new friend!
        </span>
       
        <h1 className={`text-[2.5rem] md:text-[3.5rem] font-extrabold text-[#23223a] leading-[1.1] mb-6 tracking-tight transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{fontFamily: 'Inter, sans-serif'}}>
          Fuel your day with <span className="bg-gradient-to-r from-[#ffd233] to-[#ffb347] bg-clip-text text-transparent animate-pulse">Unique Morning Tom Brown!</span>
        </h1>
     
        <p className={`text-[#6c6c80] text-base md:text-lg mb-8 max-w-md transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          A wholesome blend of millet, maize, soya & peanuts, crafted to keep you energized all morning.
        </p>
        <div className={`flex gap-4 items-center mt-2 transition-all duration-1000 delay-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button className="group flex items-center gap-2 bg-[#ffd233] text-[#23223a] font-semibold px-7 py-3 rounded-md shadow-sm hover:bg-yellow-300 transition-all duration-300 text-base hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            Our menu
          </button>
          <button className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#f3f4f8] bg-white hover:bg-[#f3f4f8] transition-all duration-300 shadow-sm hover:scale-110 hover:shadow-lg transform hover:-translate-y-1">
            <svg className="w-6 h-6 text-[#23223a] group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
          <span className="ml-2 text-[#23223a] font-medium text-base hover:text-[#ffd233] transition-colors duration-300 cursor-pointer">About us</span>
        </div>
      </div>
      
      <div className={`relative overflow-hidden h-[calc(85vh-150px)] md:-mt-25 mt-[80px] w-full float-right rounded-b-[400px] shadow-[0_8px_8px_-9px_rgba(0,0,0,0.4)] transition-all duration-1000 delay-500 transform ${
        isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'
      } hover:scale-105 transition-transform duration-700`}>
        <img
          src="/images/02-bg.png"
          alt="Happy woman with salad"
          className="absolute w-full h-full object-cover object-top bottom-0 right-0 transition-transform duration-700 hover:scale-110"
        />
        
        {/* Animated Decorative Dots */}
        <div className="absolute w-6 h-6 bg-[#ffd233] rounded-full z-20 top-8 right-16 md:top-16 md:right-24 animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-xl"></div>
        <div className="absolute w-5 h-5 bg-[#ffd233] rounded-full z-20 bottom-10 left-8 md:bottom-16 md:left-16 animate-pulse hover:scale-125 transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-xl"></div>
        
        {/* Floating Decorative Circle */}
        <div className="absolute w-24 h-24 md:w-[110px] md:h-[110px] border-[10px] border-white rounded-full z-30 bottom-4 right-2 md:bottom-8 md:right-8 animate-float hover:scale-110 transition-transform duration-500 shadow-lg hover:shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffd233] to-[#ffb347] opacity-20 animate-ping"></div>
        </div>
        
        {/* Additional floating elements */}
        <div className="absolute w-3 h-3 bg-[#ffd233] rounded-full z-20 top-1/4 left-1/4 animate-float-delayed opacity-60"></div>
        <div className="absolute w-2 h-2 bg-[#ffb347] rounded-full z-20 top-1/3 right-1/3 animate-float-slow opacity-80"></div>
      </div>
      
      {/* Enhanced background angle with gradient */}
      <div className="hidden md:block absolute right-0 top-0 w-[60vw] h-full bg-gradient-to-br from-[#f9fafc] to-[#f0f2f5] -z-10 transition-all duration-1000" 
           style={{clipPath: 'polygon(20% 0, 100% 0, 100% 85%, 0 30%)'}}></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute w-2 h-2 bg-[#ffd233] rounded-full top-20 left-20 animate-float-slow opacity-30"></div>
        <div className="absolute w-1 h-1 bg-[#ffb347] rounded-full top-40 right-40 animate-float-delayed opacity-40"></div>
        <div className="absolute w-1.5 h-1.5 bg-[#ffd233] rounded-full bottom-20 left-1/3 animate-float opacity-25"></div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
