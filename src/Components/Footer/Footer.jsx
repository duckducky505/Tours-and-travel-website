import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FiArrowRight, FiInstagram, FiTwitter, FiYoutube, FiFacebook } from 'react-icons/fi';
import { MdOutlineTravelExplore, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import video2 from '../../assets/video1.mp4';
import './footer.css';

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <footer className="footer">
            {/* Background Section */}
            <div className="footer-bg">
                <video src={video2} loop autoPlay muted type='video/mp4'></video>
                <div className="footer-overlay"></div>
            </div>

            <div className="footer-container container">
                {/* Upper Section: Call to Action */}
                <div className="footer-cta" data-aos="fade-up">
                    <div className="cta-content">
                        <span className="cta-tagline">Begin your journey</span>
                        <h2 className="cta-title">Ready to explore the Himalayas?</h2>
                    </div>
                    <Link to="/quote" className="cta-button">
                        Get Your Free Quote <FiArrowRight />
                    </Link>
                </div>

                <hr className="footer-divider" />

                {/* Main Grid */}
                <div className="footer-main-grid">
                    {/* Brand Info */}
                    <div className="footer-brand" data-aos="fade-up">
                        <div className="brand-logo">
                            <MdOutlineTravelExplore className='icon' />
                            <span>TRAVEL.</span>
                        </div>
                        <p className="brand-desc">
                            Crafting purposeful journeys across Nepal. We specialize in 
                            high-altitude expeditions and cultural immersions that leave a 
                            lasting impact.
                        </p>
                        <div className="brand-socials">
                            <a href="#"><FiInstagram /></a>
                            <a href="#"><FiTwitter /></a>
                            <a href="#"><FiYoutube /></a>
                            <a href="#"><FiFacebook /></a>
                        </div>
                    </div>

                    {/* Links Groups */}
                    <div className="footer-links-group" data-aos="fade-up" data-aos-delay="100">
                        <h5>Explorer</h5>
                        <nav>
                            <Link to="/about-us">About Us</Link>
                            <Link to="/quite">Get a quote</Link>
                            <Link to="/sustainability">Sustainability</Link>
                            <Link to="/safety">Safety Protocols</Link>
                        </nav>
                    </div>

                    <div className="footer-links-group" data-aos="fade-up" data-aos-delay="200">
                        <h5>Destinations</h5>
                        <nav>
                            <Link to="/trip/everest-base-camp-classic">Everest Region</Link>
                            <Link to="/trip/annapurna-panorama-trek">Annapurna Circuit</Link>
                            <Link to="/mustang">Upper Mustang</Link>
                            <Link to="/pokhara">Pokhara Valley</Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-contact" data-aos="fade-up" data-aos-delay="300">
                        <h5>Contact Us</h5>
                        <div className="contact-item">
                            <MdLocationOn /> <span>Thamel, Kathmandu, Nepal</span>
                        </div>
                        <div className="contact-item">
                            <MdPhone /> <span>+977 1 45XX XXX</span>
                        </div>
                        <div className="contact-item">
                            <MdEmail /> <span>expeditions@travel.com</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="copyright">© 2026 TRAVEL. Built for Adventure.</p>
                    <div className="bottom-links">
                        <Link to="/terms">Terms and Conditions</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;