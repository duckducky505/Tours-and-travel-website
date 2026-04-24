import React, { useEffect } from 'react';
import { MdOutlineTravelExplore, MdOutlineBeachAccess } from 'react-icons/md';
import { AiOutlineSafetyCertificate, AiOutlineHeart } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';
import img from "../../assets/annapurna.jpg"; 
import './Intro.css';

const Intro = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, []);

    return (
        <section className="intro-section section">
            <div className="container">
                <div className="intro-wrapper">
                    
                    <div className="visual-block" data-aos="fade-right">
                        <div className="image-container">
                            <img src={img} alt="Annapurna Mountain" className="main-img" />
                            <div className="experience-tag">
                                <strong>10+</strong>
                                <span>Years Experience</span>
                            </div>
                        </div>
                        <div className="decorative-shape"></div>
                    </div>

                    <div className="content-block" data-aos="fade-left">
                        <span className="subtitle">Discover Your Path</span>
                        <h2 className="title">Nature’s Grandest <br/> Stage Awaits.</h2>
                        
                        <p className="highlight-text">
                            We don’t just show you Nepal; we help you feel the heartbeat of the Himalayas.
                        </p>
                        
                        <p className="main-para">
                            From the golden temples of Kathmandu to the silent, snow-capped peaks of the Annapurna Range, 
                            our curated journeys are designed for the conscious traveler. We blend luxury with 
                            authenticity to ensure your soul returns home refreshed.
                        </p>

                        <div className="trust-grid">
                            <div className="trust-item" data-aos="zoom-in" data-aos-delay="100">
                                <MdOutlineTravelExplore className="icon" />
                                <span>Curated Paths</span>
                            </div>
                            <div className="trust-item" data-aos="zoom-in" data-aos-delay="200">
                                <MdOutlineBeachAccess className="icon" />
                                <span>Pure Comfort</span>
                            </div>
                            <div className="trust-item" data-aos="zoom-in" data-aos-delay="300">
                                <AiOutlineSafetyCertificate className="icon" />
                                <span>Certified Safety</span>
                            </div>
                            <div className="trust-item" data-aos="zoom-in" data-aos-delay="400">
                                <AiOutlineHeart className="icon" />
                                <span>Local Love</span>
                            </div>
                        </div>

                        <button className="cta-btn">Learn More About Us</button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Intro;