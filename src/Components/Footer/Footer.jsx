import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore, MdOutlineMailOutline, MdLocationOn, MdPhoneInTalk } from 'react-icons/md';
import { AiFillYoutube, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import video2 from '../../assets/video1.mp4';
import './footer.css';

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, []);

    return (
        <footer className="footerMain">
            <div className="videoOverlay">
                <video src={video2} loop autoPlay muted type='video/mp4'></video>
            </div>

            <div className="container contentWrapper">
                {/* Glassmorphism Newsletter Section */}
                <div className="newsletterBox flex" data-aos="fade-up">
                    <div className="textSide">
                        <small>READY FOR ADVENTURE?</small>
                        <h2>Get a personalized trip quote</h2>
                    </div>

                    <div className="quoteActionSide">
                        <button className="btn flex quoteBtn">
                            REQUEST A QUOTE <FiSend className='icon' />
                        </button>
                    </div>
                </div>

                <div className="mainFooterCard">
                    <div className="footerGrid grid">
                        
                        {/* Company Intro */}
                        <div className="introColumn" data-aos="fade-up">
                            <div className="logoGroup flex">
                                <MdOutlineTravelExplore className='logoIcon' />
                                <span>Travel.</span>
                            </div>
                            <p className="para">
                                Authorized Himalayan experts. Crafting luxury adventures that 
                                respect nature and celebrate local culture.
                            </p>
                            <div className="socialIcons flex">
                                <AiOutlineTwitter className='s-icon' />
                                <AiFillYoutube className='s-icon' />
                                <AiFillInstagram className='s-icon' />
                                <FaTripadvisor className='s-icon' />
                            </div>
                        </div>

                        {/* Navigation Columns */}
                        <div className="linkColumn" data-aos="fade-up" data-aos-delay="200">
                            <h4 className="title">Explorer</h4>
                            <ul>
                                <li><FiChevronRight /> About Our Team</li>
                                <li><FiChevronRight /> Private Guides</li>
                                <li><FiChevronRight /> Sustainable Travel</li>
                                <li><FiChevronRight /> Safety Protocols</li>
                            </ul>
                        </div>

                        <div className="linkColumn" data-aos="fade-up" data-aos-delay="400">
                            <h4 className="title">Destinations</h4>
                            <ul>
                                <li><FiChevronRight /> Everest Region</li>
                                <li><FiChevronRight /> Annapurna Circuit</li>
                                <li><FiChevronRight /> Upper Mustang</li>
                                <li><FiChevronRight /> Pokhara Valley</li>
                            </ul>
                        </div>

                        <div className="linkColumn" data-aos="fade-up" data-aos-delay="600">
                            <h4 className="title">Contact Us</h4>
                            <div className="contactDetails">
                                <p><MdLocationOn className='c-icon' /> Kathmandu, Nepal</p>
                                <p><MdPhoneInTalk className='c-icon' /> +977 1 45XXX</p>
                                <p><MdOutlineMailOutline className='c-icon' /> info@travel.com</p>
                            </div>
                        </div>

                    </div>

                    <div className="footerLegal flex">
                        <small>© 2026 TRAVEL. ALL RIGHTS RESERVED.</small>
                        <div className="legalLinks flex">
                            <small>Terms and Conditions</small>
                            <small>Privacy Policy</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;