import React from 'react';
import { useAppContext } from '../../context/AppContext';

const OutputDisplay: React.FC = () => {
  const { output } = useAppContext();

  return (
    <div className="cyber-panel flex-1">
      <h3 className="text-lg font-bold mb-2 text-green-400">Output</h3>
      <div className="min-h-[150px] max-h-[300px] overflow-auto bg-gray-950 text-green-400 p-3 border border-green-500/30 rounded font-mono whitespace-pre-wrap">
        {output || <span className="text-gray-500">Program output will appear here...</span>}
      </div>
    </div>
  );
};

export default OutputDisplay;