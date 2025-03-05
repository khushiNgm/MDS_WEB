
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons from lucide-react

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0b1120] fixed w-full top-0 left-0 p-5 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-green-400 text-3xl">MANDSAUR</h1>

        {/* Menu Button (Hamburger) - Visible only on small screens */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-xl">
          <li className="text-white hover:text-green-400">
            <Link to="/">HOME</Link>
          </li>
          <li className="text-white hover:text-green-400">
            <Link to="/Places">PLACES</Link>
          </li>
          <li className="text-white hover:text-green-400">
            <Link to="/AllLink">LINKS</Link>
          </li>
          <li className="text-white hover:text-green-400">
            <Link to="/Contact">CONTACT</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu - Shows when isOpen is true */}
      {isOpen && (
        <ul className="flex flex-col gap-4 text-xl text-center bg-[#0b1120] p-5 md:hidden">
          <li className="text-white hover:text-green-400">
            <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
          </li>
          <li className="text-white hover:text-green-400">
            <Link to="/Places" onClick={() => setIsOpen(false)}>PLACES</Link>
          </li>
          <li className="text-white hover:text-green-400">
            <Link to="/AllLink" onClick={() => setIsOpen(false)}>LINKS</Link>
          </li>
          <li className="text-white hover:text-green-400">
            <Link to="/Contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
