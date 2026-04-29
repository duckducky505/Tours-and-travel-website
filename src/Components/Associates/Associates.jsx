import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Associates.css';

const partners = [
  { id: 1, name: 'Mountain Expedition', logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=600', website: '#' },
  { id: 2, name: 'Eco Travel', logo: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=400', website: '#' },
  { id: 3, name: 'Alpine Gear', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=400', website: '#' },
  { id: 4, name: 'Himalayan Trust', logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400', website: '#' },
  { id: 5, name: 'Global Trails', logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=400', website: '#' },
];

const Associates = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <section className="associatesSection">
      <div className="container">
        
        <div className="headerWrapper" data-aos="fade-up">
          <h2 className="title">
            Our Trusted <span>Network</span>
          </h2>
          <div className="accentBar"></div>
        </div>

        <div className="partnersGrid">
          {partners.map((partner) => (
            <a 
              key={partner.id} 
              href={partner.website} 
              target="_blank" 
              rel="noreferrer"
              className="partnerCard"
              data-aos="zoom-in"
            >
              <div className="logoWrapper">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="partnerLogo"
                />
              </div>
              <div className="cardFooter">
                <span className="partnerName">
                  {partner.name}
                </span>
                <p className="visitText">
                  Official Partner
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Associates;