const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4 gap-6">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400">
            {/* Simple star icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" fill="#FACC15" />
            </svg>
          </span>
          <span className="font-bold text-xl text-gray-900">Starbelly</span>
        </div>

        {/* Social icons */}
        <div className="flex items-center space-x-6 text-gray-900">
          <a href="#" aria-label="Twitter" className="hover:text-yellow-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 2a4.48 4.48 0 00-4.5 4.5c0 .35.04.7.1 1.03A12.93 12.93 0 013 3.1s-4 9 5 13a13 13 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-yellow-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3a5.75 5.75 0 110 11.5 5.75 5.75 0 010-11.5zm0 1.5a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm6.88-.38a1.13 1.13 0 11-2.25 0 1.13 1.13 0 012.25 0z" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-yellow-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2.2c0-2 1.2-3.1 3-3.1.88 0 1.8.16 1.8.16v2h-1c-1 0-1.3.63-1.3 1.3V12h2.2l-.4 3h-1.8v7A10 10 0 0022 12z" />
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-yellow-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.6 3.2a2.51 2.51 0 011.77 1.78 26.57 26.57 0 010 14.04A2.51 2.51 0 0119.6 20.8 84.21 84.21 0 0112 21.5a84.21 84.21 0 01-7.6-.7 2.51 2.51 0 01-1.77-1.78 26.57 26.57 0 010-14.04A2.51 2.51 0 014.4 3.2a84.21 84.21 0 017.6-.7 84.21 84.21 0 017.6.7zm-9.1 5.26v7.08l6.14-3.54-6.14-3.54z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">&copy; {year} Starbelly. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer 