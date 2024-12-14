import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// Logo Component
const Logo = () => (
  <h1 className="text-3xl font-bold bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 text-transparent bg-clip-text m-4">
   <a href='/#'>Mohamed Oueslati
    </a> 
  </h1>
);

// Menu Component
const Menu = ({ className, onClick }) => (
  <ul className={className}>
    {['About', 'Work', 'Contact'].map((item) => (
      <li key={item} className="p-5" onClick={onClick}>
        <a href={`#${item.toLowerCase()}`}>{item}</a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav); // Toggle navigation
  };

  return (
    <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center px-4 sticky top-0 z-50">
      {/* Logo */}
      <Logo />

      {/* Desktop Menu */}
      <Menu className="hidden md:flex" />

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full bg-[#202121] text-gray-400 ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <Logo />
        <Menu className="p-2" onClick={handleNav} />
      </div>
    </div>
  );
};

export default Navbar;
