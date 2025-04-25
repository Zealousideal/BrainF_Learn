import React, { useState } from 'react';
import { snippets } from '../../data/snippets';
import SnippetCard from './SnippetCard';
import SnippetFilters from './SnippetFilters';

type Difficulty = 'all' | 'beginner' | 'intermediate' | 'advanced';

const SnippetsPage: React.FC = () => {
  const [filter, setFilter] = useState<Difficulty>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredSnippets = snippets.filter((snippet) => {
    const matchesDifficulty = filter === 'all' || snippet.difficulty === filter;
    const matchesSearch = snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          snippet.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDifficulty && matchesSearch;
  });
  
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-green-400">Code Snippets Library</h1>
      
      <SnippetFilters 
        filter={filter}
        setFilter={setFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSnippets.map((snippet) => (
          <SnippetCard key={snippet.id} snippet={snippet} />
        ))}
        
        {filteredSnippets.length === 0 && (
          <div className="col-span-3 cyber-panel text-center py-10">
            <h3 className="text-xl text-gray-400">No snippets found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SnippetsPage;