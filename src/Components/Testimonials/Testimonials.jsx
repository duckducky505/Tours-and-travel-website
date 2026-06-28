import React, { useEffect, useState, useCallback } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BsStarFill, BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { FaQuoteRight } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Sophia Andersson",
        role: "Travel Photographer",
        country: "Sweden",
        avatar: "SA",
        rating: 5,
        quote: "Standing at Annapurna Base Camp at sunrise, I genuinely forgot to take photos. That is how overwhelming the beauty was. This team understood exactly what I needed — solitude, access, and silence.",
        trip: "Annapurna Circuit",
        color: "#D4AF37",
    },
    {
        id: 2,
        name: "James & Priya Hendricks",
        role: "Honeymoon Travelers",
        country: "United Kingdom",
        avatar: "JH",
        rating: 5,
        quote: "We asked for something that felt otherworldly. They delivered a journey through living temples, monastery stays, and a candlelit dinner with Himalayan views. Nothing felt packaged. Everything felt personal.",
        trip: "Cultural Honeymoon",
        color: "#a8865c",
    },
    {
        id: 3,
        name: "Tomoko Murakami",
        role: "Wellness Retreat Seeker",
        country: "Japan",
        avatar: "TM",
        rating: 5,
        quote: "I came looking for rest. I found a complete reset. The meditation sessions in Pokhara, the silence of the mountains, the warmth of the guides — I have not felt this clear-headed in years.",
        trip: "Himalayan Wellness",
        color: "#5c8aa8",
    },
    {
        id: 4,
        name: "Rafael Montoya",
        role: "Adventure Trekker",
        country: "Colombia",
        avatar: "RM",
        rating: 5,
        quote: "Everest Base Camp was bucket-list. But the hidden yak pastures, the family-run teahouses, the guides who knew every rock by name — that was the real treasure. Beyond what any itinerary could promise.",
        trip: "Everest Base Camp",
        color: "#6a8a5c",
    },
];

const StarRating = ({ rating }) => (
    <div className="modern-tst-stars">
        {[...Array(5)].map((_, i) => (
            <BsStarFill key={i} className={`modern-tst-star ${i < rating ? 'filled' : ''}`} />
        ))}
    </div>
);

const Testimonials = () => {
    const [active, setActive] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const total = testimonials.length;

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    const goTo = useCallback((index) => {
        if (animating || index === active) return;
        setAnimating(true);
        setTimeout(() => {
            setActive((index + total) % total);
            setAnimating(false);
        }, 400); // Matches CSS transition duration
    }, [active, animating, total]);

    const prev = () => goTo(active - 1);
    const next = () => goTo(active + 1);

    // Auto-play functionality
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval);
    }, [isPaused, next]);

    const t = testimonials[active];

    return (
        <section className="modern-tst-section section">
            {/* Background glowing orbs */}
            <div className="modern-tst-glow glow-1"></div>
            <div className="modern-tst-glow glow-2"></div>

            <div className="container">
                <div className="modern-tst-layout">
                    
                    {/* Left/Top Header Area */}
                    <div className="modern-tst-header" data-aos="fade-right">
                        <span className="modern-tst-eyebrow">Client Stories</span>
                        <h2 className="modern-tst-title">What Travelers <br /> Remember Most</h2>
                        <p className="modern-tst-subtitle">
                            Don't just take our word for it. Read the experiences of those who have walked the trails and explored the valleys with us.
                        </p>
                        
                        <div className="modern-tst-controls">
                            <button className="modern-tst-nav-btn" onClick={prev} aria-label="Previous">
                                <BsArrowLeft />
                            </button>
                            <button className="modern-tst-nav-btn" onClick={next} aria-label="Next">
                                <BsArrowRight />
                            </button>
                        </div>
                    </div>

                    {/* Right/Bottom Stage Area */}
                    <div 
                        className="modern-tst-stage-wrapper" 
                        data-aos="fade-left"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="modern-tst-glass-card">
                            <FaQuoteRight className="modern-tst-quote-icon" />
                            
                            <div className={`modern-tst-content ${animating ? 'sliding-out' : 'sliding-in'}`}>
                                <StarRating rating={t.rating} />
                                <h3 className="modern-tst-quote-text">"{t.quote}"</h3>
                                
                                <div className="modern-tst-author-row">
                                    <div className="modern-tst-avatar-lrg" style={{ background: t.color }}>
                                        {t.avatar}
                                    </div>
                                    <div className="modern-tst-author-info">
                                        <h4>{t.name}</h4>
                                        <span>{t.role} — {t.country}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Pill Strip */}
                        <div className="modern-tst-indicators">
                            {testimonials.map((item, i) => (
                                <button
                                    key={item.id}
                                    className={`modern-tst-pill ${i === active ? 'active' : ''}`}
                                    onClick={() => goTo(i)}
                                >
                                    <div className="modern-tst-pill-avatar" style={{ background: item.color }}>
                                        {item.avatar}
                                    </div>
                                    <div className="modern-tst-pill-text">
                                        <span className="pill-name">{item.name}</span>
                                        <span className="pill-trip">{item.trip}</span>
                                    </div>
                                    {/* Progress line for active state */}
                                    <div className="modern-tst-pill-progress" style={{ background: item.color }}></div>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;