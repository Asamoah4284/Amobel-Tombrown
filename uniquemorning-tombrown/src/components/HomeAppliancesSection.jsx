import React from "react";

const HomeAppliancesSection = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="inline-block bg-[#FFD233] text-[#23223a] font-bold px-4 py-2 rounded-full text-sm">
                NEW PRODUCT CATEGORY
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#23223a] leading-tight" style={{fontFamily: 'Inter, sans-serif'}}>
                Transform Your <span className="bg-[#f3f4f8] px-2">Home</span> with Modern Appliances
              </h2>
              <p className="text-[#6c6c80] text-base lg:text-lg leading-relaxed">
                Beyond our delicious Tom Brown products, we now offer premium home appliances 
                to make your daily life easier and more efficient. From smart refrigerators 
                to kitchen essentials, we've got everything you need.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div className="flex items-start gap-3 lg:gap-4">
                <div className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#FFD233] rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" className="lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#23223a] mb-1 text-sm lg:text-base">Smart Technology</h3>
                  <p className="text-[#6c6c80] text-xs lg:text-sm">Energy-efficient appliances with modern features</p>
                </div>
              </div>

              <div className="flex items-start gap-3 lg:gap-4">
                <div className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#FFD233] rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" className="lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#23223a] mb-1 text-sm lg:text-base">Best Prices</h3>
                  <p className="text-[#6c6c80] text-xs lg:text-sm">Competitive pricing with quality guarantee</p>
                </div>
              </div>

              <div className="flex items-start gap-3 lg:gap-4">
                <div className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#FFD233] rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" className="lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#23223a] mb-1 text-sm lg:text-base">Fast Delivery</h3>
                  <p className="text-[#6c6c80] text-xs lg:text-sm">Quick delivery and professional installation</p>
                </div>
              </div>

              <div className="flex items-start gap-3 lg:gap-4">
                <div className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#FFD233] rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" className="lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#23223a] mb-1 text-sm lg:text-base">Warranty</h3>
                  <p className="text-[#6c6c80] text-xs lg:text-sm">Extended warranty and customer support</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="tel:+2330555020816" className="bg-[#23223a] hover:bg-[#FFD233] hover:text-[#23223a] text-white font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 text-sm lg:text-base">
                <svg width="18" height="18" className="lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>Call to Order</span>
              </a>
              <button className="border-2 border-[#23223a] text-[#23223a] hover:bg-[#23223a] hover:text-white font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-lg transition-all duration-300 text-sm lg:text-base">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" className="lg:w-5 lg:h-5" fill="#FFD233" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                </svg>
                <span className="text-xs lg:text-sm text-[#6c6c80]">Trusted by 1000+ customers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" className="lg:w-5 lg:h-5" fill="#FFD233" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-xs lg:text-sm text-[#6c6c80]">Quality Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
              {/* Home Appliances Image */}
              <img 
                src="/images/appliance.jpg" 
                alt="Home Appliances Collection" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-16 h-16 lg:w-24 lg:h-24 bg-[#FFD233] rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-12 h-12 lg:w-16 lg:h-16 bg-[#23223a] rounded-full opacity-10"></div>
              
              {/* Price tag overlay */}
              <div className="absolute top-4 right-4 lg:top-6 lg:right-6 bg-white rounded-lg shadow-lg p-3 lg:p-4">
                <div className="text-center">
                  <p className="text-xs lg:text-sm text-[#6c6c80]">Starting from</p>
                  <p className="text-lg lg:text-2xl font-bold text-[#23223a]">₵120</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAppliancesSection; 