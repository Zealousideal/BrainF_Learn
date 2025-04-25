export interface TutorialSection {
  id: string;
  title: string;
  content: string;
}

export const tutorialSections: TutorialSection[] = [
  {
    id: 'introduction',
    title: 'Introduction to BrainF*ck',
    content: `
## Welcome to BrainF*ck

BrainF*ck is an esoteric programming language created in 1993 by Urban Müller. It was designed to challenge and amuse programmers with its minimalism. Despite having only 8 commands, BrainF*ck is Turing complete - meaning it can compute any algorithm that can be computed by any other programming language (though not always efficiently).

## Why Learn BrainF*ck?

You might wonder why anyone would learn such an impractical language. Here are a few reasons:

1. **Mental Exercise**: It forces you to think about programming at a fundamental level
2. **Understanding Computer Architecture**: It operates similar to a Turing machine
3. **Appreciation for High-Level Languages**: You'll never take modern programming languages for granted again
4. **Bragging Rights**: Knowing BrainF*ck is a badge of honor among programmers
5. **Fun Challenge**: It's like solving an extreme programming puzzle

BrainF*ck programs can be difficult to read and write, but that's part of the appeal for many enthusiasts. The language is minimalist but complete, frustrating but rewarding.
    `
  },
  {
    id: 'basics',
    title: 'BrainF*ck Basics',
    content: `
## Memory Model

Before diving into the commands, you need to understand BrainF*ck's memory model:

- BrainF*ck operates on an array of memory cells, each initially set to zero
- There's a pointer that starts at the first cell
- Each cell can hold an integer value (typically 0-255 in most implementations)
- The pointer can move left and right to access different cells

Think of it as a tape with cells that you can navigate and modify.

## The 8 Commands

BrainF*ck uses only 8 commands, each represented by a single character:

| Command | Description |
|---------|-------------|
| \`>\` | Move the pointer to the right |
| \`<\` | Move the pointer to the left |
| \`+\` | Increment the value at the pointer |
| \`-\` | Decrement the value at the pointer |
| \`.\` | Output the value at the pointer as an ASCII character |
| \`,\` | Input a character and store its ASCII value at the pointer |
| \`[\` | If the value at the pointer is zero, jump to the matching \`]\` |
| \`]\` | If the value at the pointer is non-zero, jump back to the matching \`[\` |

That's it! Any other characters in a BrainF*ck program are considered comments and ignored.
    `
  },
  {
    id: 'commands',
    title: 'Command Reference',
    content: `
## Detailed Command Reference

### Pointer Movement

- **\`>\`** - Move the pointer one cell to the right
  - Example: \`>>\` moves the pointer two cells to the right

- **\`<\`** - Move the pointer one cell to the left
  - Example: \`<<\` moves the pointer two cells to the left

### Cell Manipulation

- **\`+\`** - Increment the current cell value by 1
  - Example: \`+++++\` adds 5 to the current cell

- **\`-\`** - Decrement the current cell value by 1
  - Example: \`-----\` subtracts 5 from the current cell

### Input/Output

- **\`.\`** - Output the ASCII character represented by the current cell value
  - Example: \`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+.+.+.\` outputs "ABCD"

- **\`,\`** - Read one character from input and store its ASCII value in the current cell
  - Example: \`,.\` reads a character and immediately outputs it (like a basic "echo" program)

### Control Flow

- **\`[\`** - Begin a loop (if the current cell value is zero, jump to the matching \`]\`)
  - Essentially this is like "while (current_cell != 0) {"

- **\`]\`** - End a loop (if the current cell value is non-zero, jump back to the matching \`[\`)
  - This completes the "}" of the while loop

## Important Notes About Loops

The \`[\` and \`]\` commands form BrainF*ck's only control structure - the loop. It's critical to understand:

1. Loops execute as long as the current cell value is **not zero**
2. If the current cell is zero when reaching a \`[\`, execution jumps to after the matching \`]\`
3. If the current cell is non-zero when reaching a \`]\`, execution jumps back to after the matching \`[\`
4. Loops can be nested just like in other languages

Loops are what make BrainF*ck Turing complete despite its minimal command set.
    `
  },
  {
    id: 'examples',
    title: 'Simple Examples',
    content: `
## Hello World

The classic first program in any language. In BrainF*ck, it's a bit more complex:

\`\`\`
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.
\`\`\`

This may look incomprehensible, but it systematically builds up the ASCII values for each character in "Hello World!".

## Add Two Numbers

A program that adds two single-digit numbers:

\`\`\`
,>,<[>+<-]>------------------------------------------------.
\`\`\`

How it works:
1. \`,>\` - Read first digit into cell 0, move right
2. \`,\` - Read second digit into cell 1
3. \`<\` - Move back to cell 0
4. \`[>+<-]\` - Add cell 0's value to cell 1 and clear cell 0
5. \`>\` - Move to cell 1 which now has the sum
6. \`------------------------------------------------.\` - Convert from ASCII to digit character and output

## Infinite Cat Program

A program that echoes back whatever is typed:

\`\`\`
,[.,]
\`\`\`

How it works:
1. \`,\` - Read a character
2. \`[\` - Start a loop (that continues until a null character is read)
3. \`.\` - Output the character
4. \`,\` - Read the next character
5. \`]\` - If the character just read isn't null (0), go back to step 3

These examples demonstrate how even simple programs can be implemented, albeit with some creative thinking.
    `
  },
  {
    id: 'techniques',
    title: 'Programming Techniques',
    content: `
## Common BrainF*ck Patterns

Learning common patterns will help you write more complex programs:

### Clearing a Cell (Set to Zero)
\`\`\`
[-]
\`\`\`
This loops until the current cell becomes zero.

### Setting a Cell to a Specific Value
\`\`\`
[-]++++++  // Set cell to 6
\`\`\`
Clear the cell first, then add the desired value.

### Multiplication
\`\`\`
[>[>+>+<<-]>>[<<+>>-]<<<-]
\`\`\`
This multiplies two values using nested loops.

### Moving Values
\`\`\`
[->+<]
\`\`\`
Moves value from current cell to the next cell.

### Copying Values
\`\`\`
[->+>+<<]>>[-<<+>>]
\`\`\`
Copies value from the current cell to the next two cells.

## Debugging Tips

Debugging BrainF*ck can be challenging:

1. **Use Visualization Tools**: Our playground helps you see memory changes
2. **Add Output Checkpoints**: Insert \`.\` at strategic points to see cell values
3. **Comment Your Code**: Use non-command characters to document your logic
4. **Modular Development**: Build and test small parts before combining them
5. **Memory Management**: Keep track of your pointer position and cell values

## Optimization Techniques

Optimizing BrainF*ck code:

1. **Minimize Loops**: Each loop adds complexity
2. **Efficient Cell Usage**: Plan your memory layout
3. **Arithmetic Shortcuts**: For example, \`++++++++++\` can be rewritten as \`+++++[>++<-]\`
4. **Use Multiplication**: For large values, multiplication loops are more efficient than repeated addition

With practice, you'll develop an intuition for efficient BrainF*ck programming.
    `
  },
  {
    id: 'advanced',
    title: 'Advanced Concepts',
    content: `
## Advanced BrainF*ck Concepts

Once you've mastered the basics, explore these advanced concepts:

### BrainF*ck Algorithms

Complex algorithms are possible in BrainF*ck, including:

- Sorting algorithms
- Mathematical functions (square root, exponentiation)
- Text processing
- Data structures (simple ones)

### Self-Modifying Code

BrainF*ck doesn't directly support self-modifying code, but you can simulate it by:

1. Using memory cells to track "instruction pointers"
2. Implementing a BrainF*ck interpreter in BrainF*ck itself

### Extended Variants

Several extended versions of BrainF*ck exist:

- **BrainF*ck++**: Adds additional commands for more complex operations
- **Extended Type**: Extends cell size beyond 8 bits
- **Ook!**: Replaces BrainF*ck symbols with "Ook." and "Ook?"
- **TrollScript**: A humorous variant with emojis as commands

### Compiler Writing

Creating a BrainF*ck compiler or transpiler is an excellent exercise in:

- Parsing
- Code generation
- Optimization techniques
- Understanding execution models

### Turing Completeness Proof

Understanding why BrainF*ck is Turing complete requires knowledge of:

- Turing machines
- Computational theory
- Formal language theory

This is a fascinating theoretical aspect of this minimalist language.

## Final Thoughts

BrainF*ck pushes the boundaries of minimalism while remaining computationally complete. It's a reminder that programming languages don't need to be complex to be powerful - though they certainly can be more practical!

As you continue your journey, remember that the difficulty is part of the fun. Embrace the challenge!
    `
  }
];