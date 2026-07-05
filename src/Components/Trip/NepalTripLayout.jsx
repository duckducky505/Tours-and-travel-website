import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    MdTimer,
    MdFlightLand,
    MdCheck,
    MdClose,
    MdLocationOn,
    MdLocalActivity,
} from 'react-icons/md';
import { BsArrowRightShort, BsPlus, BsDash } from 'react-icons/bs';
import Data from './TripData';
import './NepalTripLayout.css';

const NepalTripLayout = () => {
    const { slug } = useParams();
    const [activeTab, setActiveTab] = useState('overview');
    const [openDays, setOpenDays] = useState({});

    const trip = Data.find(item => item.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
        setOpenDays({});
    }, [slug]);

    const toggleDay = (day) => {
        setOpenDays(prev => ({ ...prev, [day]: !prev[day] }));
    };

    if (!trip) {
        return (
            <div className="ntl-error">
                <h2>Trip not found</h2>
                <Link to="/" className="ntl-back-btn">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="ntl-page">

            {/* ── Hero ── */}
            <header
                className="ntl-hero"
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(13,27,42,0.35) 0%, rgba(13,27,42,0.72) 100%), url(${trip.imgSrc})` }}
            >
                <div className="container">
                    <div className="ntl-hero-content">
                        <span className="ntl-badge">{trip.tagline}</span>
                        <h1 className="ntl-hero-title">{trip.destTitle}</h1>

                        <div className="ntl-hero-meta">
                            <span className="ntl-meta-item">
                                <MdLocationOn className="ntl-meta-icon" /> {trip.location}
                            </span>
                            <span className="ntl-meta-divider" />
                            <span className="ntl-meta-item">
                                <MdTimer className="ntl-meta-icon" /> {trip.duration}
                            </span>
                            <span className="ntl-meta-divider" />
                            <span className="ntl-meta-item">
                                <MdFlightLand className="ntl-meta-icon" /> {trip.grade}
                            </span>
                        </div>

                        {trip.activities && (
                            <div className="ntl-activity-chips">
                                {trip.activities.map(act => (
                                    <span key={act} className="ntl-chip">
                                        <MdLocalActivity className="ntl-chip-icon" /> {act}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div className="container">

                {/* ── Floating bar ── */}
                <div className="ntl-floating-bar">
                    <div className="ntl-bar-item">
                        <div className="ntl-bar-icon-wrap"><MdTimer /></div>
                        <div>
                            <small>Duration</small>
                            <p>{trip.duration}</p>
                        </div>
                    </div>
                    <div className="ntl-bar-item">
                        <div className="ntl-bar-icon-wrap"><MdFlightLand /></div>
                        <div>
                            <small>Category</small>
                            <p>{trip.grade}</p>
                        </div>
                    </div>
                    <div className="ntl-bar-price">
                        <div className="ntl-price-text">
                            <small>Starting from</small>
                            <h3>{trip.fees}</h3>
                        </div>
                        <Link className="ntl-book-btn" to="/quote">
                            Book Now <BsArrowRightShort className="ntl-book-arrow" />
                        </Link>
                    </div>
                </div>

                {/* ── Tab nav ── */}
                <nav className="ntl-tab-nav">
                    {['Overview', 'Itinerary', 'Inclusions'].map(tab => (
                        <button
                            key={tab}
                            className={`ntl-tab-btn ${activeTab === tab.toLowerCase() ? 'ntl-tab-btn--active' : ''}`}
                            onClick={() => setActiveTab(tab.toLowerCase())}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>

                {/* ── Tab panels ── */}
                <main className="ntl-card">

                    {/* Overview */}
                    {activeTab === 'overview' && (
                        <section className="ntl-panel ntl-fade-in">
                            <div className="ntl-overview-grid">
                                <div className="ntl-overview-img-wrap">
                                    <img src={trip.imgSrc} alt={trip.destTitle} className="ntl-overview-img" />
                                    <div className="ntl-overview-price-tag">{trip.fees}</div>
                                </div>
                                <div className="ntl-overview-body">
                                    <span className="ntl-section-eyebrow">About This Trip</span>
                                    <h3 className="ntl-section-title">{trip.destTitle}</h3>
                                    <div className="ntl-title-line" />
                                    <p className="ntl-desc-text">{trip.description}</p>
                                    {trip.activities && (
                                        <div className="ntl-activity-tags">
                                            <strong>Activities:</strong>
                                            <div className="ntl-tags-row">
                                                {trip.activities.map(act => (
                                                    <span key={act} className="ntl-tag">{act}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Itinerary — accordion */}
                    {activeTab === 'itinerary' && (
                        <section className="ntl-panel ntl-fade-in">
                            <span className="ntl-section-eyebrow">Day by Day</span>
                            <h3 className="ntl-section-title">Your Journey</h3>
                            <div className="ntl-title-line" />

                            <div className="ntl-accordion">
                                {trip.itinerary?.map((item, i) => {
                                    const isOpen = !!openDays[item.day];
                                    return (
                                        <div
                                            key={item.day}
                                            className={`ntl-acc-item ${isOpen ? 'ntl-acc-item--open' : ''}`}
                                        >
                                            <button
                                                className="ntl-acc-header"
                                                onClick={() => toggleDay(item.day)}
                                                aria-expanded={isOpen}
                                            >
                                                <div className="ntl-acc-left">
                                                    <span className="ntl-acc-day">Day {item.day}</span>
                                                    <span className="ntl-acc-title">{item.title}</span>
                                                </div>
                                                <span className="ntl-acc-icon">
                                                    {isOpen ? <BsDash /> : <BsPlus />}
                                                </span>
                                            </button>

                                            <div className={`ntl-acc-body ${isOpen ? 'ntl-acc-body--open' : ''}`}>
                                                <ul className="ntl-acc-points">
                                                    {item.points?.map((pt, idx) => (
                                                        <li key={idx} className="ntl-acc-point">
                                                            <span className="ntl-acc-bullet" />
                                                            {pt}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    )}

                    {/* Inclusions */}
                    {activeTab === 'inclusions' && (
                        <section className="ntl-panel ntl-fade-in">
                            <span className="ntl-section-eyebrow">What's Covered</span>
                            <h3 className="ntl-section-title">Package Details</h3>
                            <div className="ntl-title-line" />
                            <div className="ntl-inc-grid">
                                <div className="ntl-inc-col">
                                    <div className="ntl-inc-header ntl-inc-header--green">
                                        <MdCheck /> Included
                                    </div>
                                    <ul className="ntl-inc-list">
                                        {trip.includes?.map(item => (
                                            <li key={item} className="ntl-inc-item">
                                                <MdCheck className="ntl-inc-check" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="ntl-inc-col">
                                    <div className="ntl-inc-header ntl-inc-header--red">
                                        <MdClose /> Excluded
                                    </div>
                                    <ul className="ntl-inc-list">
                                        {trip.excludes?.map(item => (
                                            <li key={item} className="ntl-exc-item">
                                                <MdClose className="ntl-exc-close" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    )}
                </main>

                {/* ── Help strip ── */}
                <section className="ntl-help">
                    <div className="ntl-help-text">
                        <h2>Still have questions?</h2>
                        <p>Our travel experts are ready to help you plan your perfect trip to {trip.destTitle}.</p>
                    </div>
                    <Link to="/contact" className="ntl-contact-btn">
                        Speak to a Specialist <BsArrowRightShort className="ntl-contact-arrow" />
                    </Link>
                </section>

            </div>
        </div>
    );
};

export default NepalTripLayout;