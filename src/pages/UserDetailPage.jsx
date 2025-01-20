import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUsers } from '../context/UserContext';
import { ArrowLeft, Building, Globe, Mail, Phone } from 'lucide-react';

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useUsers();

  const user = users.find(u => u.id === Number(id));

  if (!user) {
    return (
      <div className="text-center mt-8 h-screen flex flex-col items-center justify-center ">
        <p className="text-red-600 dark:text-red-400 text-2xl">User not found</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <ArrowLeft size={20} className="mr-2" />
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="mb-6 inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Users
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-4">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">
              {user.name.charAt(0)}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
            <p className="text-gray-600 dark:text-gray-300">{user.company.name}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <Mail className="w-5 h-5 mr-3" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <Phone className="w-5 h-5 mr-3" />
            <span>{user.phone}</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <Globe className="w-5 h-5 mr-3" />
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {user.website}
            </a>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <Building className="w-5 h-5 mr-3" />
            <div>
              <p>{user.address.street}, {user.address.suite}</p>
              <p>{user.address.city}, {user.address.zipcode}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Company Details</h2>
          <p className="text-gray-600 dark:text-gray-300 italic">"{user.company.catchPhrase}"</p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{user.company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;