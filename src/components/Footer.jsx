import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useTheme } from '../ThemeContext';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <footer className={` px-8 md:px-16 lg:px-24 ${theme === 'dark' ? 'bg-black text-white' : theme === 'blue' ? 'bg-blue-500 text-white' : 'bg-white text-black'} text-center py-16'`} >
      
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Asep Saepuloh</h3>
            <p className="text-gray-400">
              Desain Grafis & Editor
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Ikuti
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Asep
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.instagram.com/saepulloh_as/profilecard/?igsh=NjRpM25kNGN6Mjlp" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/live/FFPCumodqv4?si=SeDsRlj38PTBrS-f" className="text-gray-400 hover:text-white">
              <FaYoutube />
            </a>
            <a href="https://wa.me/088224368530" className="text-gray-400 hover:text-white">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/asep023" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
