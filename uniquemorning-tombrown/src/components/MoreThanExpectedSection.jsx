import React, { useEffect, useRef } from "react";

const MoreThanExpectedSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative flex flex-col md:flex-row items-center justify-center gap-x-12 max-w-screen-xl mx-auto min-h-[70vh] px-4 md:px-[5vw] py-16 overflow-x-clip"
    >
      {/* Background Clipart Elements */}
      
      {/* Floating Grain/Seed Icons */}
      <div className="absolute top-10 left-10 w-8 h-8 text-[#ffd233] opacity-20 animate-float">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      
      <div className="absolute top-20 right-20 w-6 h-6 text-[#ffd233] opacity-15 animate-float" style={{animationDelay: '1s'}}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      {/* Coffee Cup Icon */}
      <div className="absolute bottom-20 left-16 w-12 h-12 text-[#8B4513] opacity-10 animate-float" style={{animationDelay: '2s'}}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3h-2V5h2zm-4 0v3h-2V5h2zm-4 0v3H6V5h2zm12 0c.83 0 1.5.67 1.5 1.5S20.83 8 20 8h-2V5h2z"/>
        </svg>
      </div>

      {/* Bowl Icon */}
      <div className="absolute top-32 right-8 w-10 h-10 text-[#D2691E] opacity-15 animate-float" style={{animationDelay: '0.5s'}}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-[#ffd233] opacity-10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
      
      <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border-2 border-[#ffd233] opacity-8 rotate-45 animate-pulse"></div>

      {/* Small Decorative Dots */}
      <div className="absolute top-1/2 left-8 w-3 h-3 bg-[#ffd233] rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-1/4 right-12 w-2 h-2 bg-[#ffd233] rounded-full opacity-15 animate-pulse"></div>
      <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-[#ffd233] rounded-full opacity-12 animate-bounce" style={{animationDelay: '0.7s'}}></div>

      {/* Leaf/Plant Icons */}
      <div className="absolute bottom-10 right-1/3 w-8 h-8 text-[#228B22] opacity-15 animate-float" style={{animationDelay: '1.5s'}}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25z"/>
        </svg>
      </div>

      {/* Utensil Icons */}
      <div className="absolute top-1/3 right-1/6 w-6 h-6 text-[#696969] opacity-10 animate-float" style={{animationDelay: '0.3s'}}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
        </svg>
      </div>

      {/* Wheat/Grain Pattern */}
      <div className="absolute top-1/6 left-1/2 w-24 h-24 opacity-5">
        <div className="flex flex-wrap justify-center">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 h-4 bg-[#ffd233] mx-0.5 mb-1 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
          ))}
        </div>
      </div>

      {/* Left: Image and Experience Card */}
      <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-start animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
        <div className="relative w-full max-w-[420px] aspect-square rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105">
          <img
            src="/images/04.jpg"
            alt="Restaurant interior"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Decorative Dots & Circle */}
          <div className="absolute w-6 h-6 bg-[#ffd233] rounded-full z-20 bottom-[-18px] left-[-18px] animate-bounce transition-all duration-300 hover:scale-125"></div>
          <div className="absolute w-5 h-5 bg-[#ffd233] rounded-full z-20 top-1/2 right-[-12px] -translate-y-1/2 animate-pulse transition-all duration-300 hover:scale-125"></div>
          <div className="absolute w-16 h-16 border-[8px] border-white rounded-full z-30 top-[-24px] left-[-24px] transition-all duration-300 hover:rotate-12 hover:scale-110"></div>
        </div>
        {/* Experience Card */}
        <div className="absolute left-1/2 md:left-60 bottom-[-40px] md:bottom-[-75px] transform -translate-x-1/2 md:translate-x-4/5 bg-white rounded-lg shadow-lg px-8 py-6 flex flex-col items-center z-40 hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2">
          <div className="text-4xl md:text-5xl font-extrabold text-[#23223a] mb-2 tracking-tight transition-all duration-300 hover:text-[#ffd233]" style={{fontFamily: 'Inter, sans-serif', letterSpacing: '-2px'}}>17</div>
          <div className="text-lg font-semibold text-[#23223a]"></div>
        </div>
      </div>
      {/* Right: Features List */}
      <div className="w-full md:w-1/2 mt-16 md:mt-0 flex flex-col justify-center animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000 ease-out delay-300">
        <h2 className="text-[2rem] md:text-[2.5rem] font-extrabold text-[#23223a] leading-tight mb-10 transition-all duration-300 hover:text-[#ffd233]" style={{fontFamily: 'Inter, sans-serif'}}>We do more than just breakfast</h2>
        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="flex items-start gap-6 group hover:transform hover:translate-x-2 transition-all duration-300 ease-out">
            <span className="text-3xl font-extrabold text-[#ffd233] font-mono transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">01</span>
            <div>
              <div className="font-bold text-lg md:text-xl text-[#23223a] mb-1 transition-all duration-300 group-hover:text-[#ffd233]">We're located at the heart of Campus</div>
              <div className="text-[#6c6c80] text-base md:text-lg transition-all duration-300 group-hover:text-[#23223a]">Quick access and friendly customer service wherever you are in Ghana.</div>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start gap-6 group hover:transform hover:translate-x-2 transition-all duration-300 ease-out">
            <span className="text-3xl font-extrabold text-[#ffd233] font-mono transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">02</span>
            <div>
              <div className="font-bold text-lg md:text-xl text-[#23223a] mb-1 transition-all duration-300 group-hover:text-[#ffd233]">Made with 100% organic ingredients</div>
              <div className="text-[#6c6c80] text-base md:text-lg transition-all duration-300 group-hover:text-[#23223a]">Sourced from trusted Ghanaian farmers, with no additives or preservatives.</div>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-start gap-6 group hover:transform hover:translate-x-2 transition-all duration-300 ease-out">
            <span className="text-3xl font-extrabold text-[#ffd233] font-mono transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">03</span>
            <div>
              <div className="font-bold text-lg md:text-xl text-[#23223a] mb-1 transition-all duration-300 group-hover:text-[#ffd233]">Fast and reliable delivery</div>
              <div className="text-[#6c6c80] text-base md:text-lg transition-all duration-300 group-hover:text-[#23223a]">Get your Tom Brown delivered to your doorstep — fresh and on time.</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MoreThanExpectedSection; 