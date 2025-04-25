export interface CodeSnippet {
  id: string;
  title: string;
  description: string;
  code: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const snippets: CodeSnippet[] = [
  {
    id: 'hello-world',
    title: 'Hello World',
    description: 'The classic Hello World program written in Brainfuck.',
    code: '++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.',
    difficulty: 'beginner'
  },
  {
    id: 'cat-program',
    title: 'Cat Program',
    description: 'A simple program that reads input and echoes it back (Ctrl+D to exit).',
    code: ',[.,]',
    difficulty: 'beginner'
  },
  {
    id: 'addition',
    title: 'Addition',
    description: 'Takes two single-digit numbers as input and outputs their sum.',
    code: ',>,[<+>-]<------------------------------------------------.',
    difficulty: 'beginner'
  },
  {
    id: 'subtraction',
    title: 'Subtraction',
    description: 'Takes two single-digit numbers as input and outputs their difference.',
    code: ',>,[<->-]<++++++++++++++++++++++++++++++++++++++++++++++++.',
    difficulty: 'beginner'
  },
  {
    id: 'alphabet',
    title: 'Print Alphabet',
    description: 'Prints the entire alphabet from A to Z.',
    code: '+++++++++++++++++++++++++++++++++++++++++++++++.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.',
    difficulty: 'beginner'
  },
  {
    id: 'multiplication',
    title: 'Multiplication',
    description: 'Multiplies two single-digit numbers (enter as ASCII characters).',
    code: ',>,>++++++++[<------<------>>-]<<[>[>+>+<<-]>>[<<+>>-]<<<-]>>>++++++++++++++++++++++++++++++++++++++++++++++++.',
    difficulty: 'intermediate'
  },
  {
    id: 'fibonacci',
    title: 'Fibonacci Sequence',
    description: 'Calculates and prints the first 10 Fibonacci numbers.',
    code: '+++++++++++\n>+>>>>++++++++++++++++++++++++++++++++++++++++++++\n>++++++++++++++++++++++++++++++++<<<<<<[>[>>>>>>+>+\n<<<<<<<-]>>>>>>>[<<<<<<<+>>>>>>>-]<[>++++++++++[-\n<-[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<[>>>+<<<\n-]>>[-]]<<]>>>[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]\n>[<<+>>[-]]<<<<<<<]>>>>>[+++++++++++++++++++++++++\n+++++++++++++++++++++++.[-]]++++++++++<[->-<]>++++\n++++++++++++++++++++++++++++++++++++++++++++.[-]<<\n<<<<<<<<<<[>>>+>+<<<<-]>>>>[<<<<+>>>>-]<-[>>.>.<<<\n[-]]<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+>-]>[<+>-]<<<-]',
    difficulty: 'advanced'
  },
  {
    id: 'squares',
    title: 'Print Squares',
    description: 'Prints the square of numbers from 0 to 9.',
    code: '++++[>+++++<-]>[<+++++>-]+<+[>[>+>+<<-]++>>[<<+>>-]>>>[-]++>[-]+>>>+[[-]++++++>>>]<<<[[<++++++++<++>>-]+<.<[>----<-]<]<<[>>>>>[>>>[-]+++++++++<[>-<-]+++++++++>[-[<->-]+[<<<]]<[>+<-]>]<<-]<<-]',
    difficulty: 'advanced'
  },
  {
    id: 'rot13',
    title: 'ROT13 Cipher',
    description: 'Implements the ROT13 cipher - each letter is replaced by the letter 13 positions after it.',
    code: '-,+[-[>>++++[>++++++++<-]<+<-[>+>+>-[>>>]<[[>+<-]>>+>]<<<<<-]]>>>[-]+>--[-[<->+++[-]]]<[++++++++++++<[>-[>+>>]>[+[<+>-]>+>>]<<<<<-]>>[<+>-]>[-[-<<[-]>>]<<[<<->>-]>>]<<[<<+>>-]]<[-]<.[-]<-,+]',
    difficulty: 'advanced'
  },
  {
    id: 'reverse-string',
    title: 'Reverse String',
    description: 'Takes a string input and prints it in reverse.',
    code: '>,[>,]<[.<]',
    difficulty: 'beginner'
  },
  {
    id: 'count-to-ten',
    title: 'Count to Ten',
    description: 'Prints numbers from 1 to 10, each on a new line.',
    code: '++++++++++[>++++++++++<-]>++++++++++[<+>-]<[.+>.<]',
    difficulty: 'beginner'
  },
  {
    id: 'division',
    title: 'Division',
    description: 'Divides two single-digit numbers and outputs the result.',
    code: ',>,>++++++++[<------<------>>-]<<[>[>+>+<<-]>>[<<+>>-]<<<[>>+>+<<<-]>>>[<<<+>>>-]<<[>[>+<-]<-]>.',
    difficulty: 'intermediate'
  },
  {
    id: 'factorial',
    title: 'Factorial Calculator',
    description: 'Calculates the factorial of a single-digit number.',
    code: '>>+>,[<[>>+>+<<<-]>>>[<<<+>>>-]<<-]>++++++++++[<++++++++++>-]<-[>+<-]>.',
    difficulty: 'intermediate'
  },
  {
    id: 'bubble-sort',
    title: 'Bubble Sort',
    description: 'Implements bubble sort algorithm for a short sequence of numbers.',
    code: '>,[>,]<<[>[>+>+<<-]>>[<<+>>-]<<<-]>>>[<<<[>[>+>+<<-]>>[<<+>>-]<[>+<-]<-]>>>]<<<[.[>]>>[>]<<]',
    difficulty: 'advanced'
  },
  {
    id: 'ascii-art',
    title: 'ASCII Art Heart',
    description: 'Prints a simple heart shape using ASCII characters.',
    code: '++++++++[>++++[>++>+++>+++>+<<<<-]>+>->+>>+[<]<-]>>.>>>---.+++++++..+++.<<++.>>+.>+++++.<<<.+++.------.<-.>>+.',
    difficulty: 'intermediate'
  },
  {
    id: 'prime-check',
    title: 'Prime Number Checker',
    description: 'Checks if a given number is prime (works for small numbers).',
    code: ',>++++++++[<------>-]<[[>+>+<<-]>>[<<+>>-]<[>+<-]<-]>>+.',
    difficulty: 'advanced'
  }
];