const CTASection = () => (
  <div className="bg-[#f9fafc]">
  <section className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-screen-xl mx-auto px-4 md:px-[5vw] overflow-x-clip">
    {/* Text / CTA */}
    <div className="max-w-xl text-left">
      <h2 className="text-[2.5rem] md:text-[4rem] font-bold leading-tight text-[#23223a] " style={{fontFamily: 'Inter, sans-serif'}}>
        Free delivery
        <br className="hidden md:block" />
        service.
      </h2>
      <p className="text-[#6c6c80] italic text-base md:text- mb-10 max-w-md">
      Free delivery across Ghana


      </p>
      <div className="flex items-center gap-6">
        {/* Order delivery button */}
        <a
          href="https://wa.me/233000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#ffd233] text-[#23223a] font-semibold px-7 py-4 rounded-md shadow-sm hover:bg-yellow-300 transition text-base"
        >
          {/* Bag icon */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 7l1-4h10l1 4" />
            <rect x="3" y="7" width="18" height="14" rx="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11a4 4 0 01-8 0" />
          </svg>
          Order delivery
        </a>

        {/* Menu button */}
        <a href="#menu" className="flex items-center gap-3 group">
          <span className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#f3f4f8] bg-white group-hover:bg-[#f3f4f8] transition shadow-sm">
          
          </span>
        </a>
      </div>
    </div>

    {/* Image / Illustration */}
    <div className="relative w-full md:w-1/2 h-[340px] md:h-[420px]">
      {/* Replace the image source below with your product/packaging image */}
      <img
        src="/images/05.png"
        alt="Product packaging"
        className="absolute inset-0 w-full h-full object-contain md:object-cover drop-shadow-xl"
      />

      {/* Decorative shapes */}
      <div className="absolute w-6 h-6 bg-[#ffd233] rounded-full z-20 top-5 right-10 md:top-10 md:right-12"></div>
      <div className="absolute w-5 h-5 bg-[#ffd233] rounded-full z-20 bottom-8 left-8 md:bottom-12 md:left-12"></div>
      <div className="absolute w-24 h-24 md:w-[110px] md:h-[110px] border-[10px] border-white rounded-full z-30 bottom-0 right-0 translate-x-1/3 translate-y-1/3"></div>
    </div>
  </section>
  </div>
)

export default CTASection 