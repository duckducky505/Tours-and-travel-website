import React, { useState } from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    const showNav   = () => setActive('navBar activeNavbar');
    const removeNav = () => setActive('navBar');

    return (
        <section className="navBarSection">
            <header className="header">
                <div className="container header__inner flex">

                    <div className="logoDiv">
                        <Link to="/" className="logo flex">
                            <h1><MdOutlineTravelExplore className="icon" /> Travel</h1>
                        </Link>
                    </div>

                    <div className={active}>
                        <ul className="navLists flex">
                            <li className="navItem">
                                <Link to="/" className="navLink">Home</Link>
                            </li>
                            <li className="navItem">
                                <Link to="/packages" className="navLink">Packages</Link>
                            </li>
                            <li className="navItem">
                                <Link to="/about-us" className="navLink">About Us</Link>
                            </li>
                            <li className="navItem">
                                <Link to="/team-members" className="navLink">Meet Our Team</Link>
                            </li>
                            <li className="navItem">
                                <Link to="/tailor-made" className="navLink">Tailor Made</Link>
                            </li>
                        </ul>

                        <div onClick={removeNav} className="closeNavbar">
                            <AiFillCloseCircle className="icon" />
                        </div>
                    </div>

                    <div onClick={showNav} className="toggleNavbar">
                        <TbGridDots className="icon" />
                    </div>

                </div>
            </header>
        </section>
    );
};

export default Navbar;