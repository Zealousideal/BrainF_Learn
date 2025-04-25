import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-green-500/30 py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} BrainHack | 
              <span className="text-green-400 ml-1">
                Learning Brainf*ck with style
              </span>
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-green-400 flex items-center transition-colors duration-300"
              aria-label="Support"
            >
              <Heart className="h-5 w-5 mr-1" />
              <span className="text-sm">Support</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;