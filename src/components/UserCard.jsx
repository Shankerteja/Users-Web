import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <Link to={`/user/${user.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg mb-4 shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-300">
              {user.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{user.name}</h3>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <Mail size={16} />
              <span className="text-sm">{user.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mt-1">
              <MapPin size={16} />
              <span className="text-sm">{user.address.city}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;