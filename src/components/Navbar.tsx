import React from 'react';
import { Terminal, BookOpen, Code } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const activeTab = location.pathname.substring(1) || 'tutorials';

  return (
    <header className="bg-gray-950 border-b border-green-500 shadow-lg shadow-green-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Terminal className="h-8 w-8 text-green-400 mr-2" />
            <h1 className="text-2xl font-bold text-green-400">
              <span className="glitch-text" data-text="BrainHack">BrainHack</span>
            </h1>
          </div>
          
          <nav className="w-full md:w-auto">
            <ul className="flex justify-between w-full space-x-1">
              <li>
                <Link
                  to="/tutorials"
                  className={`cyber-button px-4 py-2 rounded flex items-center ${
                    activeTab === 'tutorials' 
                      ? 'bg-green-900/30 text-green-400 border border-green-500 shadow-md shadow-green-500/20' 
                      : 'text-gray-400 hover:text-green-400 hover:bg-gray-800/50'
                  }`}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/playground"
                  className={`cyber-button px-4 py-2 rounded flex items-center ${
                    activeTab === 'playground' 
                      ? 'bg-green-900/30 text-green-400 border border-green-500 shadow-md shadow-green-500/20' 
                      : 'text-gray-400 hover:text-green-400 hover:bg-gray-800/50'
                  }`}
                >
                  <Terminal className="h-4 w-4 mr-2" />
                  Playground
                </Link>
              </li>
              <li>
                <Link
                  to="/snippets"
                  className={`cyber-button px-4 py-2 rounded flex items-center ${
                    activeTab === 'snippets' 
                      ? 'bg-green-900/30 text-green-400 border border-green-500 shadow-md shadow-green-500/20' 
                      : 'text-gray-400 hover:text-green-400 hover:bg-gray-800/50'
                  }`}
                >
                  <Code className="h-4 w-4 mr-2" />
                  Snippets
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;