import React, { useEffect } from 'react';
import { MdOutlineSecurity, MdOutlinePriceCheck, MdOutlineVerifiedUser, MdOutlineSupportAgent } from 'react-icons/md';
import { GiMountainRoad } from 'react-icons/gi';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Choose.css';

const Choose = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const features = [
    {
      id: 1,
      icon: <MdOutlineSecurity />,
      title: "Safety Intelligence",
      desc: "Our expeditions are backed by satellite communication and medical-grade oxygen protocols."
    },
    {
      id: 2,
      icon: <MdOutlinePriceCheck />,
      title: "Transparent Pricing",
      desc: "No hidden permits or surprise costs. We provide a full breakdown before you commit."
    },
    {
      id: 3,
      icon: <GiMountainRoad />,
      title: "Expert Logistics",
      desc: "Decades of experience in high-altitude planning ensures seamless transitions from city to summit."
    },
    {
      id: 4,
      icon: <MdOutlineSupportAgent />,
      title: "24/7 Ground Support",
      desc: "Our Kathmandu-based operations team is always active, ensuring real-time support during your trek."
    }
  ];

  return (
    <section className="why-choose-us section">
      <div className="container">
        <div className="grid main-layout">
          
          {/* Left Side: Content */}
          <div className="content-side" data-aos="fade-right">
            <span className="subtitle">The Difference</span>
            <h2 className="title">Why <span>Thousands</span> Trust Our Expeditions.</h2>
            <p>
              We don't just guide; we partner with you to ensure your Himalayan 
              story is told with safety, authenticity, and respect for the local culture.
            </p>
            
            <div className="trust-badge flex">
              <MdOutlineVerifiedUser className="badge-icon" />
              <div className='badge-text'>
                <strong>Government Authorized</strong>
                <p>Fully licensed by the Nepal Ministry of Tourism.</p>
              </div>
            </div>
          </div>

          <div className="features-side">
            <div className="features-grid grid">
              {features.map(({ id, icon, title, desc }) => (
                <div key={id} className="feature-card" data-aos="zoom-in" data-aos-delay={id * 100}>
                  <div className="icon-box flex">{icon}</div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Choose;