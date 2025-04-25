import React from 'react';
import { useAppContext } from '../../context/AppContext';

const MemoryVisualization: React.FC = () => {
  const { memory, pointer } = useAppContext();
  
  const visibleMemory = memory.slice(0, Math.max(30, pointer + 10));
  
  return (
    <div className="cyber-panel">
      <h3 className="text-lg font-bold mb-2 text-green-400">Memory Visualization</h3>
      <div className="overflow-x-auto pb-2">
        <div className="flex flex-nowrap min-w-max">
          {visibleMemory.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`memory-cell ${pointer === index ? 'active' : ''}`}
                title={`Cell ${index}: ${value} (ASCII: ${value ? String.fromCharCode(value) : 'N/A'})`}
              >
                {value}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {index}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-sm text-green-500 mt-2">
        <span className="bg-gray-800 px-1 rounded">Pointer: {pointer}</span>
        <span className="ml-4 bg-gray-800 px-1 rounded">Value: {memory[pointer] || 0}</span>
        <span className="ml-4 bg-gray-800 px-1 rounded">
          ASCII: {memory[pointer] ? String.fromCharCode(memory[pointer]) : 'N/A'}
        </span>
      </div>
    </div>
  );
};

export default MemoryVisualization;