import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import UserDetailPage from './pages/UserDetailPage';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Router>
            <ThemeToggle />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user/:id" element={<UserDetailPage />} />
            </Routes>
          </Router>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;