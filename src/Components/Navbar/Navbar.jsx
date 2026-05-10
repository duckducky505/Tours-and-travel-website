// components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import './navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import logo from '../../assets/nodescpimg.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="navBarSection">
      <header className="header">
        <div className="container header__inner flex">

          <div className="logoDiv">
            <Link to="/" className="logo flex">
              <img src={logo} alt="Logo" className="logoImg" />
            </Link>
          </div>

          <div className={`navBar${isOpen ? ' activeNavbar' : ''}`}>
            <ul className="navLists flex">
              <li className="navItem">
                <Link to="/"             className="navLink" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className="navItem">
                <Link to="/packages"     className="navLink" onClick={() => setIsOpen(false)}>Packages</Link>
              </li>
              <li className="navItem">
                <Link to="/about-us"     className="navLink" onClick={() => setIsOpen(false)}>About Us</Link>
              </li>
              <li className="navItem">
                <Link to="/team-members" className="navLink" onClick={() => setIsOpen(false)}>Meet Our Team</Link>
              </li>
              <li className="navItem">
                <Link to="/tailor-made"  className="navLink" onClick={() => setIsOpen(false)}>Tailor Made</Link>
              </li>
            </ul>

            <div className="closeNavbar" onClick={() => setIsOpen(false)}>
              <AiFillCloseCircle className="icon" />
            </div>
          </div>

          <div className="toggleNavbar" onClick={() => setIsOpen(true)}>
            <TbGridDots className="icon" />
          </div>

        </div>
      </header>
    </section>
  );
};

export default Navbar;