import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-[#f9fafc] to-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#23223a] mb-3 md:mb-4 lg:mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
            Get in <span className="bg-gradient-to-r from-[#ffd233] to-[#ffb347] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-[#6c6c80] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-4">
            Have questions about our Tom Brown? Want to place an order? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#23223a] mb-4 md:mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
                Let's Connect
              </h3>
              
              {/* Phone */}
              <div className="flex items-start space-x-3 sm:space-x-4 mb-4 md:mb-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ffd233] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#23223a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-[#6c6c80] font-medium mb-1">Phone</p>
                  <a href="tel:0555020816" className="text-sm sm:text-base md:text-lg font-bold text-[#23223a] hover:text-[#ffd233] transition-colors duration-300 block py-1">
                    055 502 0816 / 024 250 5140
                  </a>
                  <a href="tel:0242505140" className="text-sm sm:text-base md:text-lg font-bold text-[#23223a] hover:text-[#ffd233] transition-colors duration-300 block py-1">
                    
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3 sm:space-x-4 mb-4 md:mb-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ffd233] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#23223a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-[#6c6c80] font-medium mb-1">Location</p>
                  <div className="space-y-0.5 sm:space-y-1">
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-[#23223a]">Ayensu, UCC Campus</p>
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-[#23223a]">Gomoa Dominase</p>
                    <p className="text-xs text-[#6c6c80]">Off Kasoa - Wenniba Highway</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3 sm:space-x-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ffd233] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#23223a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-[#6c6c80] font-medium mb-1">Hours</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-[#23223a]">Mon - Sun: 6AM - 10PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100 order-1 lg:order-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#23223a] mb-4 md:mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Name and Phone - Stack on mobile, side by side on larger screens */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-[#6c6c80] mb-1.5 sm:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ffd233] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-[#6c6c80] mb-1.5 sm:mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ffd233] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-[#6c6c80] mb-1.5 sm:mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ffd233] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-[#6c6c80] mb-1.5 sm:mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ffd233] focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell us about your order or any questions..."
                  required
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#ffd233] text-[#23223a] font-semibold py-3 sm:py-4 md:py-3 px-4 sm:px-6 rounded-xl hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base md:text-lg touch-manipulation min-h-[44px] sm:min-h-[48px]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 