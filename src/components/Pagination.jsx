import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useUsers } from '../context/UserContext';

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages } = useUsers();

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
      >
        <ChevronLeft size={20} />
      </button>
      <span className="text-gray-700 dark:text-gray-300">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;