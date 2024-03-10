import React, { useState, useEffect } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const ThemeSwitcher = () => {
    
    const [darkMode, setDarkMode] =  useState(localStorage.getItem('darkMode') === 'true' || false);
    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="mx-3"
    >
      {darkMode ? <SunIcon className='h-6 w-6 text-gray-100'/> : <MoonIcon className='h-6 w-6 text-gray-500'/> }
    </button>
  );
};

export default ThemeSwitcher;