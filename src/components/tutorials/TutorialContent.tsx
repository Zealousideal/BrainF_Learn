import React from 'react';
import { TutorialSection } from '../../data/tutorials';

interface TutorialContentProps {
  section: TutorialSection;
}

const TutorialContent: React.FC<TutorialContentProps> = ({ section }) => {
  const renderMarkdown = (content: string) => {
    // Split content into sections
    const sections = content.split('##').filter(Boolean);
    
    return sections.map((sectionContent, index) => {
      const lines = sectionContent.split('\n');
      const title = lines[0].trim();
      const content = lines.slice(1).join('\n');
      
      let html = content
        .replace(/### (.*?)$/gm, '<h3 class="text-lg font-bold text-blue-400 mt-5 mb-2">$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-400">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
        
      // Parse code blocks
      html = html.replace(/```([\s\S]*?)```/g, (match, code) => {
        return `<pre class="bg-gray-950 text-green-400 p-4 rounded-md my-4 overflow-x-auto font-mono">${code.trim()}</pre>`;
      });
      
      // Parse inline code
      html = html.replace(/`(.*?)`/g, '<code class="bg-gray-950 text-green-400 px-1 rounded">$1</code>');
      
      // Parse tables
      html = html.replace(/\|(.*)\|\n\|([-|]*)\|\n((.*\|.*\n)*)/g, (match, header, separator, rows) => {
        const headerCells = header.split('|').map(cell => cell.trim()).filter(Boolean);
        const headerHTML = headerCells.map(cell => `<th class="border border-green-400/30 px-4 py-2 text-green-400">${cell}</th>`).join('');
        
        let rowsHTML = '';
        rows.split('\n').forEach(row => {
          if (row.trim() === '') return;
          
          const cells = row.split('|').map(cell => cell.trim()).filter(Boolean);
          rowsHTML += '<tr>' + cells.map(cell => `<td class="border border-green-400/30 px-4 py-2">${cell}</td>`).join('') + '</tr>';
        });
        
        return `
          <div class="overflow-x-auto my-4">
            <table class="min-w-full bg-gray-900/50 border border-green-400/30">
              <thead>
                <tr>${headerHTML}</tr>
              </thead>
              <tbody>
                ${rowsHTML}
              </tbody>
            </table>
          </div>
        `;
      });
      
      // Parse paragraphs and list items
      const paragraphs = html.split('\n\n');
      html = paragraphs.map(p => {
        if (p.trim() === '') return '';
        if (p.startsWith('<h2') || p.startsWith('<h3') || p.startsWith('<pre') || p.startsWith('<div')) {
          return p;
        }
        
        // Parse numbered lists
        if (/^\d\./.test(p)) {
          const items = p.split('\n').map(item => {
            if (/^\d\./.test(item)) {
              return `<li class="ml-5 my-1">${item.replace(/^\d\.\s/, '')}</li>`;
            }
            return item;
          });
          return `<ol class="list-decimal my-3 pl-5">${items.join('')}</ol>`;
        }
        
        // Parse bullet lists
        if (p.includes('\n- ')) {
          const items = p.split('\n- ').map((item, index) => {
            if (index === 0 && !item.startsWith('- ')) {
              return `<p class="my-3">${item}</p>`;
            }
            return `<li class="ml-5 my-1">${item}</li>`;
          });
          return `<ul class="list-disc my-3 pl-5">${items.join('')}</ul>`;
        }
        
        return `<p class="my-3">${p}</p>`;
      }).join('\n');

      return (
        <section key={index} id={`section-${section.id}-${index}`} className="mb-8">
          <h2 className="text-xl font-bold text-blue-400 mb-4">{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      );
    });
  };

  return (
    <div className="tutorial-content">
      <h1 className="text-2xl font-bold mb-6 text-blue-400">
        {section.title}
      </h1>
      <div className="prose prose-invert prose-blue max-w-none">
        {renderMarkdown(section.content)}
      </div>
    </div>
  );
};

export default TutorialContent;