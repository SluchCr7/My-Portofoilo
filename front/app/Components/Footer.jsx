import React from "react";

const Footer = ({setIsOpen}) => {
  return (
    <footer className="w-full bg-Black-100 text-white mt-20">
      {/* Call to Action */}
      <div className="w-full flex flex-col items-center text-center px-4 md:px-10 py-16  rounded-t-3xl shadow-inner">
        <h2 className="text-2xl md:text-4xl font-bold max-w-2xl leading-snug">
          Ready To Take Your Business To The Next Level?
        </h2>
        <p className="text-Gray-400 mt-4 text-sm md:text-base max-w-xl">
          Reach out to us today and see how we can help you grow and succeed with confidence.
        </p>
        <button onClick={() => setIsOpen(true)} className="mt-6 px-8 py-3 rounded-full bg-Accent-100 text-Black font-semibold shadow-md hover:bg-Accent-200 transition-all duration-300">
          Contact Us
        </button>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-Gray-200 w-full py-6 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center bg-Black-100 text-sm">
        <p className="text-Gray-300 mb-2 md:mb-0">&copy; 2025. All rights reserved.</p>
        <p className="text-Gray-300">
          Powered by <span className="text-white font-medium">Sluch</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
