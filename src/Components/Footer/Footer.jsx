import React, { useEffect } from 'react';
import './footer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

import video2 from '../../assets/video1.mp4';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore, MdOutlineMailOutline, MdLocationOn, MdPhoneInTalk } from 'react-icons/md';
import { AiFillYoutube, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, []);

    return (
        <footer className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type='video/mp4'></video>
            </div>

            <div className="secContent container">
                {/* 1. Newsletter Floating Section */}
                <div className="contactDiv" data-aos="fade-up">
                    <div className="text">
                        <small>STAY INSPIRED</small>
                        <h2>Join Our Community</h2>
                    </div>

                    <div className="inputDiv">
                        <input type="email" placeholder='Email address...' />
                        <button className="btn" type='submit'>
                            SUBSCRIBE <FiSend className='icon' />
                        </button>
                    </div>
                </div>

                <div className="footerCard">
                    <div className="footerGrid">
                        
                        <div className="footerIntro" data-aos="fade-up">
                            <div className="logoDiv">
                                <a href="/" className='logo'> 
                                    <MdOutlineTravelExplore className='icon' /> 
                                    <span>Travel.</span>
                                </a>
                            </div>
                            <p className="footerParagraph">
                                Government-authorized adventure experts. We bridge the gap between 
                                modern comfort and the raw majesty of the Himalayas.
                            </p>
                            <div className="footerSocials">
                                <AiOutlineTwitter className='icon' />
                                <AiFillYoutube className='icon' />
                                <AiFillInstagram className='icon' />
                                <FaTripadvisor className='icon' />
                            </div>
                        </div>

                        {/* Link Group 1 */}
                        <div className="linkGroup" data-aos="fade-up" data-aos-delay="200">
                            <span className="groupTitle">Company</span>
                            <ul>
                                <li><FiChevronRight className='icon' /> About Us</li>
                                <li><FiChevronRight className='icon' /> Our Guides</li>
                                <li><FiChevronRight className='icon' /> Sustainability</li>
                                <li><FiChevronRight className='icon' /> Safety First</li>
                            </ul>
                        </div>

                        {/* Link Group 2 */}
                        <div className="linkGroup" data-aos="fade-up" data-aos-delay="400">
                            <span className="groupTitle">Destination</span>
                            <ul>
                                <li><FiChevronRight className='icon' /> Everest Region</li>
                                <li><FiChevronRight className='icon' /> Annapurna Base</li>
                                <li><FiChevronRight className='icon' /> Upper Mustang</li>
                                <li><FiChevronRight className='icon' /> Pokhara Valley</li>
                            </ul>
                        </div>

                        <div className="linkGroup" data-aos="fade-up" data-aos-delay="600">
                            <span className="groupTitle">Contact</span>
                            <div className="contactInfo">
                                <p><MdLocationOn className='icon' /> Thamel, Kathmandu, NP</p>
                                <p><MdPhoneInTalk className='icon' /> +977 1 4XXXXXX</p>
                                <p><MdOutlineMailOutline className='icon' /> hello@brand.com</p>
                            </div>
                        </div>

                    </div>

                    <div className="footerBottom">
                        <small>© 2026 BRANDNAME - ADVENTURE REIMAGINED</small>
                        <div className="bottomLinks">
                            <small>Terms & Conditions</small>
                            <small>Privacy Policy</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;