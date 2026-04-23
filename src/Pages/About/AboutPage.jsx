import React from 'react';
import { MdVerified, MdPublic, MdAutoGraph, MdVolunteerActivism } from 'react-icons/md';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-hero">
        <div className="container">
          <span className="badge">Our Journey</span>
          <h1>Defining the Future of <br/>Travel in Nepal</h1>
          <p className="hero-sub">We don't just organize trips; we curate life-changing experiences.</p>
        </div>
      </header>

      <div className="container">
        <section className="story-section">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Founded in the heart of Kathmandu, <strong>COMPANY NAME</strong> began with a simple 
              vision: to provide authentic, safe, and sustainable access to the Himalayas. 
              What started as a small team of passionate guides has grown into a premier 
              travel collective recognized for excellence and innovation.
            </p>
            <p>
              We believe that travel should be more than just sightseeing. It should be a 
              bridge between cultures and a catalyst for personal growth. Over the last decade, 
              we have helped thousands of adventurers find their path in the mountains.
            </p>
          </div>
          <div className="story-stats">
            <div className="stat-card">
              <h3>15+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-card">
              <h3>200+</h3>
              <p>Expert Local Guides</p>
            </div>
            <div className="stat-card">
              <h3>10k+</h3>
              <p>Happy Travelers</p>
            </div>
          </div>
        </section>

        {/* Priorities & Values Section */}
        <section className="values-section">
          <div className="section-title">
            <h2>Our Priorities</h2>
            <p>The core pillars that drive every expedition we lead.</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <MdVerified className="icon" />
              <h4>Safety First</h4>
              <p>Our guides are international-standard first-aid certified. We never compromise on equipment or acclimatization protocols.</p>
            </div>
            
            <div className="value-card">
              <MdVolunteerActivism className="icon" />
              <h4>Sustainable Impact</h4>
              <p>We practice "Leave No Trace" tourism and reinvest a portion of our profits into local mountain communities.</p>
            </div>

            <div className="value-card">
              <MdPublic className="icon" />
              <h4>Authenticity</h4>
              <p>We bypass the "tourist traps" to give you genuine cultural immersion and off-the-beaten-path discovery.</p>
            </div>

            <div className="value-card">
              <MdAutoGraph className="icon" />
              <h4>Constant Innovation</h4>
              <p>By leveraging modern technology and local insights, we create smarter, more comfortable travel itineraries.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="cta-box">
            <h3>Ready to see the world with us?</h3>
            <p>Join our next expedition and experience the difference of traveling with experts.</p>
            <button className="btn-primary">Explore Our Trips</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;