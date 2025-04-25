import React, { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';
import OutputDisplay from './OutputDisplay';
import ControlPanel from './ControlPanel';
import MemoryVisualization from './MemoryVisualization';
import { runBrainfuck, BrainfuckInterpreter } from '../../utils/interpreter';
import { useAppContext } from '../../context/AppContext';

const PlaygroundPage: React.FC = () => {
  const { currentCode, setCurrentCode, setOutput, setMemory, setPointer } = useAppContext();
  
  const [input, setInput] = useState('');
  const [interpreter, setInterpreter] = useState<BrainfuckInterpreter | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isStepping, setIsStepping] = useState(false);
  const [stepDelay, setStepDelay] = useState(200);
  
  useEffect(() => {
    if (isStepping && interpreter) {
      const intervalId = setInterval(() => {
        const hasMore = interpreter.step();
        const state = interpreter.getState();
        
        setOutput(state.output);
        setMemory(state.memory);
        setPointer(state.pointer);
        
        if (!hasMore) {
          setIsStepping(false);
          setIsRunning(false);
        }
      }, stepDelay);
      
      return () => clearInterval(intervalId);
    }
  }, [isStepping, interpreter, stepDelay, setOutput, setMemory, setPointer]);
  
  const handleRun = () => {
    if (isRunning) return;
    
    try {
      const result = runBrainfuck(currentCode, input);
      setOutput(result.output);
      setMemory(result.memory);
      setPointer(result.pointer);
    } catch (error) {
      setOutput(`Error: ${(error as Error).message}`);
    }
  };
  
  const handleStep = () => {
    if (isRunning) return;
    
    if (!interpreter) {
      const newInterpreter = new BrainfuckInterpreter(currentCode, input);
      setInterpreter(newInterpreter);
      setIsStepping(true);
      setIsRunning(true);
    } else {
      setIsStepping(true);
      setIsRunning(true);
    }
  };
  
  const handleStop = () => {
    setIsStepping(false);
    setIsRunning(false);
    setInterpreter(null);
  };
  
  const handleReset = () => {
    setIsStepping(false);
    setIsRunning(false);
    setInterpreter(null);
    setOutput('');
    setMemory(Array(30).fill(0));
    setPointer(0);
  };
  
  const handleClear = () => {
    setCurrentCode('');
    handleReset();
  };
  
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-green-400">Interactive Brainfuck Playground</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <CodeEditor code={currentCode} setCode={setCurrentCode} isRunning={isRunning} />
          
          <div className="cyber-panel">
            <h3 className="text-lg font-bold mb-2 text-green-400">Input</h3>
            <textarea
              className="w-full bg-gray-950 text-green-400 p-3 border border-green-500/30 focus:border-green-500 outline-none rounded mb-2"
              placeholder="Enter input for your program here..."
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isRunning}
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <OutputDisplay />
          <MemoryVisualization />
        </div>
      </div>
      
      <ControlPanel
        onRun={handleRun}
        onStep={handleStep}
        onStop={handleStop}
        onReset={handleReset}
        onClear={handleClear}
        isRunning={isRunning}
        stepDelay={stepDelay}
        setStepDelay={setStepDelay}
      />
    </div>
  );
};

export default PlaygroundPage;