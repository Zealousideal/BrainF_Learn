import React from 'react';
import { Play, Pause, RotateCcw, X, StepForward } from 'lucide-react';

interface ControlPanelProps {
  onRun: () => void;
  onStep: () => void;
  onStop: () => void;
  onReset: () => void;
  onClear: () => void;
  isRunning: boolean;
  stepDelay: number;
  setStepDelay: (delay: number) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  onRun,
  onStep,
  onStop,
  onReset,
  onClear,
  isRunning,
  stepDelay,
  setStepDelay
}) => {
  return (
    <div className="cyber-panel">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={onRun}
            disabled={isRunning}
            className={`cyber-button flex items-center ${
              isRunning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            title="Run the code"
          >
            <Play className="h-4 w-4 mr-1" />
            Run
          </button>
          
          <button
            onClick={onStep}
            disabled={isRunning}
            className={`cyber-button flex items-center ${
              isRunning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            title="Step through the code"
          >
            <StepForward className="h-4 w-4 mr-1" />
            Step
          </button>
          
          <button
            onClick={onStop}
            disabled={!isRunning}
            className={`cyber-button flex items-center ${
              !isRunning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            title="Stop execution"
          >
            <Pause className="h-4 w-4 mr-1" />
            Stop
          </button>
          
          <button
            onClick={onReset}
            className="cyber-button flex items-center"
            title="Reset the execution state"
          >
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </button>
          
          <button
            onClick={onClear}
            className="cyber-button flex items-center"
            title="Clear the code editor"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </button>
        </div>
        
        <div className="flex items-center">
          <span className="text-sm mr-2 text-gray-400">Step Delay:</span>
          <input
            type="range"
            min="50"
            max="1000"
            step="50"
            value={stepDelay}
            onChange={(e) => setStepDelay(parseInt(e.target.value))}
            className="w-32 accent-green-500"
            title={`${stepDelay}ms between steps`}
          />
          <span className="text-sm ml-2 text-gray-400">{stepDelay}ms</span>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;