import React from 'react';
import { Search, ArrowUpDown } from 'lucide-react';
import { useUsers } from '../context/UserContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm, sortOrder, setSortOrder } = useUsers();

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      <button
        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        className="flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200"
      >
        <ArrowUpDown size={20} className="mr-2" />
        Sort {sortOrder === 'asc' ? 'Z-A' : 'A-Z'}
      </button>
    </div>
  );
};

export default SearchBar;