import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Blur Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}
      
      <header className="w-full border-b border-gray-200 bg-white max-w-screen-xl mx-auto flex items-center justify-between px-8 py-12 relative">
        {/* Logo and Brand */}
        <div className="flex items-center justify-center space-x-2">
          <img src="/images/logo.png" alt="logo" className="w-15 h-15" />
          <span className="font-bold text-xl text-gray-900">Uniquemorning</span>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="flex items-center text-sm font-medium text-gray-900 hover:text-yellow-500">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>Home
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-sm font-medium text-gray-900 hover:text-yellow-500">About</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }} className="text-sm font-medium text-gray-900 hover:text-yellow-500">Menu</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }} className="text-sm font-medium text-gray-900 hover:text-yellow-500">Reviews</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-sm font-medium text-gray-900 hover:text-yellow-500">Contact</a>
        </nav>
        {/* Cart and Menu */}
        <div className="hidden md:block flex items-center space-x-4">
        
          <button className="bg-transparent p-2 rounded-full hover:bg-gray-100 focus:outline-none">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-gray-900"><circle cx="12" cy="5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/></svg>
          </button>
        </div>
        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            className="p-2 rounded focus:outline-none hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-gray-900"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </header>
      
      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <span className="font-bold text-xl text-gray-900">Menu</span>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-gray-900">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1 py-6">
            <a href="#" className="flex items-center px-6 py-4 text-sm font-medium text-gray-900 hover:text-yellow-500 hover:bg-gray-50 border-l-4 border-transparent hover:border-yellow-400">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Home
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="flex items-center px-6 py-4 text-sm font-medium text-gray-900 hover:text-yellow-500 hover:bg-gray-50 border-l-4 border-transparent hover:border-yellow-400">
              About
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }} className="flex items-center px-6 py-4 text-sm font-medium text-gray-900 hover:text-yellow-500 hover:bg-gray-50 border-l-4 border-transparent hover:border-yellow-400">
              Menu
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }} className="flex items-center px-6 py-4 text-sm font-medium text-gray-900 hover:text-yellow-500 hover:bg-gray-50 border-l-4 border-transparent hover:border-yellow-400">
              Reviews
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="flex items-center px-6 py-4 text-sm font-medium text-gray-900 hover:text-yellow-500 hover:bg-gray-50 border-l-4 border-transparent hover:border-yellow-400">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
