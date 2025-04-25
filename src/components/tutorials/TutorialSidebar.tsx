import React, { useState } from 'react';
import { TutorialSection } from '../../data/tutorials';
import { ChevronRight } from 'lucide-react';

interface TutorialSidebarProps {
  sections: TutorialSection[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const TutorialSidebar: React.FC<TutorialSidebarProps> = ({ 
  sections, 
  activeSection, 
  setActiveSection 
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="cyber-panel lg:w-64 w-full">
      <h2 className="text-xl font-bold mb-6 text-green-400 border-b border-green-400/30 pb-2">
        Tutorial Sections
      </h2>
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <div className="relative">
                <button
                  onClick={() => handleSectionClick(section.id)}
                  className={`flex items-center w-full px-3 py-2 rounded-md transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-green-900/30 text-green-400 border-l-2 border-green-400'
                      : 'text-gray-400 hover:text-green-400 hover:bg-gray-800/50'
                  }`}
                >
                  <ChevronRight className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                    expandedSection === section.id ? 'transform rotate-90' : ''
                  }`} />
                  {section.title}
                </button>
                
                {expandedSection === section.id && (
                  <div className="mt-2 ml-6 pl-2 border-l-2 border-green-500/30">
                    <div className="text-sm text-gray-400 space-y-2">
                      {section.content.split('##').slice(1).map((subsection, index) => {
                        const title = subsection.split('\n')[0].trim();
                        return (
                          <button
                            key={index}
                            onClick={() => {
                              const element = document.getElementById(`section-${section.id}-${index}`);
                              element?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="block w-full text-left px-2 py-1 hover:text-green-400 hover:bg-green-900/20 rounded"
                          >
                            {title}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TutorialSidebar;