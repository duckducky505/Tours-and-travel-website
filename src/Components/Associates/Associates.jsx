import React, { useEffect } from 'react';
import './Associates.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const partners = [
  { id: 1, name: 'Mountain Expedition', logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Eco Travel', logo: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Alpine Gear', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Himalayan Trust', logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400' },
  { id: 5, name: 'Global Trails', logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=400' },
];

const Associates = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section className="associates-section">
      <div className="bg-blur-circle"></div>
      
      <div className="container">
        <div className="header-wrapper" data-aos="fade-right">
          <h4 className="partner-title">Our Network</h4>
          <h2 className="main-title">Trusted by Global <br/> <span>Adventure Authorities.</span></h2>
        </div>
        
        <div className="associates-display">
          {partners.map((partner, index) => (
            <div 
              key={partner.id} 
              className={`associate-blob blob-${index + 1}`}
              data-aos="zoom-in" 
              data-aos-delay={index * 150}
            >
              <div className="circle-orbit"></div>
              <div className="inner-card">
                <img src={partner.logo} alt={partner.name} />
                <span className="hover-name">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associates;