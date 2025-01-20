import React from 'react';
import { useUsers } from '../context/UserContext';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { Loader } from 'lucide-react';

const HomePage = () => {
  const { users, loading, error } = useUsers();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="w-12 h-12 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 dark:text-red-400 mt-8">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 heading">User Directory</h1>
      <SearchBar />
      <div className="space-y-4">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default HomePage;