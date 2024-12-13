import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Nueva ubicación

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-500 dark:bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Tienda de Ropa</h1>
      <button
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded transition"
      >
        {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </nav>
  );
};

export default Navbar;
