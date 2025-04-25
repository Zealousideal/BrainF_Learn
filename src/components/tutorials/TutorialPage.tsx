import React, { useState } from 'react';
import { tutorialSections } from '../../data/tutorials';
import TutorialSidebar from './TutorialSidebar';
import TutorialContent from './TutorialContent';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TutorialPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState(tutorialSections[0].id);

  const currentSection = tutorialSections.find(section => section.id === activeSection);
  const currentIndex = tutorialSections.findIndex(section => section.id === activeSection);
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setActiveSection(tutorialSections[currentIndex - 1].id);
    }
  };
  
  const handleNext = () => {
    if (currentIndex < tutorialSections.length - 1) {
      setActiveSection(tutorialSections[currentIndex + 1].id);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-green-400">Learning Brainf*ck</h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-80 lg:shrink-0">
          <div className="cyber-panel h-[calc(100vh-12rem)] overflow-y-auto sticky top-6">
            <h2 className="text-xl font-bold mb-6 text-green-400 border-b border-green-400/30 pb-2 sticky top-0 bg-gray-950 z-10">
              Contents
            </h2>
            <nav className="pr-2">
              <ul className="space-y-2">
                {tutorialSections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-blue-500/20 text-blue-400 border-l-2 border-blue-400'
                          : 'text-gray-400 hover:text-blue-400 hover:bg-blue-900/20'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex-grow">
          <div className="cyber-panel">
            {currentSection && (
              <>
                <TutorialContent section={currentSection} />
                <div className="flex justify-between items-center mt-8 pt-4 border-t border-green-500/30">
                  <button
                    onClick={handlePrevious}
                    className={`cyber-button flex items-center ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex === 0}
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className={`cyber-button flex items-center ${currentIndex === tutorialSections.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex === tutorialSections.length - 1}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;