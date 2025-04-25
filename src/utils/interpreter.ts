/**
 * Brainfuck interpreter implementation
 */
export class BrainfuckInterpreter {
  private code: string;
  private memory: number[];
  private pointer: number;
  private codeIndex: number;
  private output: string;
  private input: string;
  private inputIndex: number;
  private maxIterations: number;
  private paused: boolean;
  private brackets: Map<number, number>;

  constructor(
    code: string, 
    input: string = '', 
    memorySize: number = 30000, 
    maxIterations: number = 100000
  ) {
    this.code = this.sanitizeCode(code);
    this.memory = Array(memorySize).fill(0);
    this.pointer = 0;
    this.codeIndex = 0;
    this.output = '';
    this.input = input;
    this.inputIndex = 0;
    this.maxIterations = maxIterations;
    this.paused = false;
    this.brackets = this.mapBrackets();
  }

  private sanitizeCode(code: string): string {
    // Remove any characters that are not valid Brainfuck commands
    return code.replace(/[^\+\-\>\<\.\,\[\]]/g, '');
  }

  private mapBrackets(): Map<number, number> {
    const map = new Map<number, number>();
    const stack: number[] = [];
    
    for (let i = 0; i < this.code.length; i++) {
      if (this.code[i] === '[') {
        stack.push(i);
      } else if (this.code[i] === ']') {
        if (stack.length === 0) {
          throw new Error(`Unmatched closing bracket at position ${i}`);
        }
        const openBracketIndex = stack.pop()!;
        map.set(openBracketIndex, i);
        map.set(i, openBracketIndex);
      }
    }
    
    if (stack.length > 0) {
      throw new Error(`Unmatched opening bracket at position ${stack[stack.length - 1]}`);
    }
    
    return map;
  }

  public step(): boolean {
    if (this.paused || this.codeIndex >= this.code.length) {
      return false;
    }

    const command = this.code[this.codeIndex];
    
    switch (command) {
      case '>':
        this.pointer++;
        if (this.pointer >= this.memory.length) {
          this.memory.push(0); // Expand memory if needed
        }
        break;
      case '<':
        this.pointer = Math.max(0, this.pointer - 1);
        break;
      case '+':
        this.memory[this.pointer] = (this.memory[this.pointer] + 1) % 256;
        break;
      case '-':
        this.memory[this.pointer] = (this.memory[this.pointer] + 255) % 256; // Add 255 is equivalent to subtract 1 with wrapping
        break;
      case '.':
        this.output += String.fromCharCode(this.memory[this.pointer]);
        break;
      case ',':
        if (this.inputIndex < this.input.length) {
          this.memory[this.pointer] = this.input.charCodeAt(this.inputIndex++);
        } else {
          this.memory[this.pointer] = 0;
        }
        break;
      case '[':
        if (this.memory[this.pointer] === 0) {
          this.codeIndex = this.brackets.get(this.codeIndex) || this.codeIndex;
        }
        break;
      case ']':
        if (this.memory[this.pointer] !== 0) {
          this.codeIndex = this.brackets.get(this.codeIndex) || this.codeIndex;
        }
        break;
    }
    
    this.codeIndex++;
    return true;
  }

  public run(): { output: string; memory: number[]; pointer: number } {
    let iterations = 0;
    
    while (this.codeIndex < this.code.length && iterations < this.maxIterations) {
      if (!this.step()) break;
      iterations++;
    }
    
    if (iterations >= this.maxIterations) {
      this.output += "\n[Execution halted: maximum iteration limit reached]";
    }
    
    return {
      output: this.output,
      memory: this.memory.slice(0, Math.max(30, this.pointer + 10)),
      pointer: this.pointer
    };
  }

  public pause(): void {
    this.paused = true;
  }

  public resume(): void {
    this.paused = false;
  }

  public reset(code?: string, input?: string): void {
    if (code !== undefined) {
      this.code = this.sanitizeCode(code);
      this.brackets = this.mapBrackets();
    }
    
    if (input !== undefined) {
      this.input = input;
    }
    
    this.memory = Array(30).fill(0);
    this.pointer = 0;
    this.codeIndex = 0;
    this.output = '';
    this.inputIndex = 0;
    this.paused = false;
  }

  public getState(): { 
    memory: number[]; 
    pointer: number; 
    output: string;
    codeIndex: number;
  } {
    return {
      memory: [...this.memory],
      pointer: this.pointer,
      output: this.output,
      codeIndex: this.codeIndex
    };
  }
}

export const runBrainfuck = (
  code: string, 
  input: string = ''
): { output: string; memory: number[]; pointer: number } => {
  const interpreter = new BrainfuckInterpreter(code, input);
  return interpreter.run();
};