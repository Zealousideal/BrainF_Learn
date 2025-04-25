import React from 'react';
import { useAppContext } from '../../context/AppContext';

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
  isRunning: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode, isRunning }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  // Function to highlight Brainfuck syntax
  const highlightCode = (code: string): string => {
    return code
      .replace(/\+/g, '<span class="text-yellow-400">+</span>')
      .replace(/-/g, '<span class="text-red-400">-</span>')
      .replace(/\>/g, '<span class="text-blue-400">&gt;</span>')
      .replace(/\</g, '<span class="text-blue-400">&lt;</span>')
      .replace(/\./g, '<span class="text-purple-400">.</span>')
      .replace(/,/g, '<span class="text-purple-400">,</span>')
      .replace(/\[/g, '<span class="text-green-400">[</span>')
      .replace(/\]/g, '<span class="text-green-400">]</span>');
  };

  return (
    <div className="cyber-panel">
      <h3 className="text-lg font-bold mb-2 text-green-400">Code Editor</h3>
      <div className="relative">
        <textarea
          className="w-full bg-gray-950 text-green-400 p-3 border border-green-500/30 focus:border-green-500 outline-none rounded min-h-[300px] font-mono"
          placeholder="Enter your Brainfuck code here..."
          value={code}
          onChange={handleChange}
          disabled={isRunning}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <div className="absolute top-3 right-3 text-xs text-gray-500 bg-gray-950 px-2 rounded-md">
          {code.replace(/[^+\-><.,\[\]]/g, '').length} commands
        </div>
      </div>
      
      <div className="mt-2 text-sm text-gray-400">
        <p>Valid commands: <code className="bg-gray-800 px-1 rounded">+ - &gt; &lt; . , [ ]</code></p>
        <p className="mt-1">All other characters are ignored and can be used as comments.</p>
      </div>
    </div>
  );
};

export default CodeEditor;