import React from 'react';
import { CodeSnippet } from '../../data/snippets';
import { useAppContext } from '../../context/AppContext';
import { Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SnippetCardProps {
  snippet: CodeSnippet;
}

const SnippetCard: React.FC<SnippetCardProps> = ({ snippet }) => {
  const { loadSnippet } = useAppContext();
  const navigate = useNavigate();
  
  const codePreview = snippet.code.length > 50 
    ? snippet.code.slice(0, 50) + '...' 
    : snippet.code;
  
  const handleLoadSnippet = () => {
    loadSnippet(snippet);
    navigate('/playground');
  };
  
  const getBadgeColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };
  
  return (
    <div className="cyber-panel hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-green-400">{snippet.title}</h3>
        <span className={`text-xs px-2 py-1 rounded border ${getBadgeColor(snippet.difficulty)}`}>
          {snippet.difficulty}
        </span>
      </div>
      
      <p className="text-gray-400 mb-4">{snippet.description}</p>
      
      <div className="bg-gray-950 p-3 rounded border border-green-500/20 font-mono text-sm text-gray-300 mb-4 overflow-x-auto">
        <code>{codePreview}</code>
      </div>
      
      <div className="flex justify-between items-center">
        <button
          onClick={handleLoadSnippet}
          className="cyber-button flex items-center text-sm"
        >
          <Code className="h-4 w-4 mr-1" />
          Load to Playground
        </button>
        
        <span className="text-xs text-gray-500">
          {snippet.code.replace(/[^+\-><.,\[\]]/g, '').length} commands
        </span>
      </div>
    </div>
  );
};

export default SnippetCard;