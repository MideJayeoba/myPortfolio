import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary shadow-lg transition-all">
      <ul className="flex gap-6 justify-center p-3 text-light font-semibold">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active bg-secondary shadow-lg rounded-lg p-2' : ''}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active bg-secondary shadow-lg rounded-lg p-2' : ''}>About Me</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active bg-secondary shadow-lg rounded-lg p-2' : ''}>Contact Me</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
