import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdTimer, MdHotel, MdGroups, MdFlightLand, MdCheck, MdClose, MdLocationOn } from 'react-icons/md';
import Data from './TripData'; 
import './NepalTripLayout.scss';

const NepalTripLayout = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const trip = Data.find(item => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!trip) {
    return (
      <div className="error-container">
        <h2>Trip not found!</h2>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="trip-page">
      <header className="trip-hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">{trip.tagline}</span>
            <h1>{trip.destTitle}</h1>
            <div className="hero-meta">
              <span><MdLocationOn /> {trip.location}</span>
              <span className="divider">|</span>
              <span>{trip.duration}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="floating-bar">
          <div className="bar-item">
            <MdTimer className="icon" />
            <div>
              <small>Duration</small>
              <p>{trip.duration}</p>
            </div>
          </div>
          <div className="bar-item">
            <MdFlightLand className="icon" />
            <div>
              <small>Difficulty</small>
              <p>{trip.grade}</p>
            </div>
          </div>
          <div className="bar-item price-item">
            <div className="price-text">
              <small>Starting from</small>
              <h3>{trip.fees}</h3>
            </div>
            <button className="book-btn">Book Now</button>
          </div>
        </div>

        <nav className="tab-nav">
          {['Overview', 'Itinerary', 'Inclusions'].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab.toLowerCase() ? 'active' : ''}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </button>
          ))}
        </nav>

        <main className="main-content-card">
          {activeTab === 'overview' && (
            <section className="tab-panel fade-in">
              <h3>About this Trip</h3>
              <p className="description-text">{trip.description}</p>
            </section>
          )}

          {activeTab === 'itinerary' && (
            <section className="tab-panel fade-in">
              <h3>Detailed Itinerary</h3>
              <div className="timeline">
                {trip.itinerary?.map((item) => (
                  <div className="timeline-item" key={item.day}>
                    <div className="day-circle">Day {item.day}</div>
                    <div className="timeline-text">
                      <h4>{item.title}</h4>
                      <p>Experience the scenic beauty and cultural richness of the region.</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'inclusions' && (
            <section className="tab-panel inclusions-split fade-in">
              <div className="inc-column">
                <h4>What's Included</h4>
                <ul>
                  {trip.includes?.map((i) => (
                    <li key={i}><MdCheck className="check-icon" /> {i}</li>
                  ))}
                </ul>
              </div>
              <div className="exc-column">
                <h4>What's Excluded</h4>
                <ul>
                  {trip.excludes?.map((i) => (
                    <li key={i}><MdClose className="close-icon" /> {i}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </main>

        <section className="help-section">
          <div className="help-content">
            <h2>Still have questions?</h2>
            <p>Our travel experts are ready to help you plan your perfect trek to {trip.destTitle}.</p>
          </div>
          <button className="contact-btn">Contact Specialist</button>
        </section>
      </div>
    </div>
  );
};

export default NepalTripLayout;