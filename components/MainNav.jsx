'use client'
import React from 'react';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { MdFileDownload } from 'react-icons/md';

const MainNav = () => {
  const handleDownload = () => {
    const fileUrl = '/cv.pdf'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank'; 
    link.download = 'cv.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className='w-full py-16'>
      <div className='flex flex-col h-full items-center justify-between'>
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6" />
        <button
          onClick={handleDownload}
          className='btn btn-lg btn-tertiary mb-16'
        >
          <div className='flex items-center gap-3'>
            <span>Download CV</span>
            <MdFileDownload className='text-xl' />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default MainNav;
