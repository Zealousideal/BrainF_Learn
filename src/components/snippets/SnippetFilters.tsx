import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SnippetFiltersProps {
  filter: string;
  setFilter: (filter: any) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SnippetFilters: React.FC<SnippetFiltersProps> = ({
  filter,
  setFilter,
  searchQuery,
  setSearchQuery
}) => {
  return (
    <div className="cyber-panel">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search snippets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-950 text-green-400 pl-10 pr-4 py-2 border border-green-500/30 focus:border-green-500 outline-none rounded w-full"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-950 text-green-400 px-3 py-2 border border-green-500/30 focus:border-green-500 outline-none rounded appearance-none cursor-pointer"
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SnippetFilters;