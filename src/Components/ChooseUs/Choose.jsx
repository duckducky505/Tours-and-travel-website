import React, { useEffect } from 'react';
import { MdOutlineSecurity, MdOutlinePriceCheck, MdOutlineVerifiedUser, MdOutlineSupportAgent, MdFlight, MdHotel, MdDirectionsCar, MdHiking } from 'react-icons/md';
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
      icon: <MdFlight />,
      title: "Flight Booking",
      desc: "Hassle-free domestic and international flight arrangements tailored to your Nepal itinerary."
    },
    {
      id: 2,
      icon: <MdHotel />,
      title: "Luxury Hotels",
      desc: "Hand-picked luxury accommodations offering comfort and authentic Himalayan hospitality."
    },
    {
      id: 3,
      icon: <MdDirectionsCar />,
      title: "Private Vehicle Tour",
      desc: "Explore at your own pace with our private, comfortable, and reliable vehicle services."
    },
    {
      id: 4,
      icon: <MdHiking />,
      title: "Adventure Activities",
      desc: "From trekking to helicopter tours, we curate the ultimate adventure experiences."
    }
  ];

  return (
    <section className="why-choose-us section">
      <div className="container">
        <div className="grid main-layout">
          
          {/* Left Side: Content */}
          <div className="content-side" data-aos="fade-right">
            <span className="subtitle">What We Offer</span>
            <h2 className="title">Your <span>Complete</span> Travel Experience.</h2>
            <p>
              From the moment you land to the peak of your adventure, we handle every detail 
              with precision, luxury, and professional care.
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