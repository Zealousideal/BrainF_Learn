import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Snippet {
  id: string;
  title: string;
  description: string;
  code: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface AppContextType {
  currentCode: string;
  setCurrentCode: (code: string) => void;
  output: string;
  setOutput: (output: string) => void;
  memory: number[];
  setMemory: (memory: number[]) => void;
  pointer: number;
  setPointer: (pointer: number) => void;
  loadSnippet: (snippet: Snippet) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentCode, setCurrentCode] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [memory, setMemory] = useState<number[]>(Array(30).fill(0));
  const [pointer, setPointer] = useState<number>(0);

  const loadSnippet = (snippet: Snippet) => {
    setCurrentCode(snippet.code);
    setOutput('');
    setMemory(Array(30).fill(0));
    setPointer(0);
  };

  return (
    <AppContext.Provider 
      value={{ 
        currentCode, 
        setCurrentCode, 
        output, 
        setOutput,
        memory, 
        setMemory,
        pointer, 
        setPointer,
        loadSnippet 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};