import React, { useEffect, useRef, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
    MdGroups,
    MdTour,
    MdSupportAgent,
    MdVerified,
    MdOutlineShield,
    MdOutlineHandshake,
    MdOutlineEmojiNature,
} from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Trust.css';

const stats = [
    { id: 1, icon: <MdGroups />, count: "10,000+", label: "Travelers Served" },
    { id: 2, icon: <MdTour />, count: "500+", label: "Successful Tours" },
    { id: 3, icon: <MdSupportAgent />, count: "24 HR", label: "Support Team" },
    { id: 4, icon: <MdVerified />, count: "Licensed", label: "Nepal Tour Operator" },
];

const pillars = [
    {
        id: 1,
        icon: <MdOutlineShield />,
        title: "Safety First",
        body: "Every route we operate is continuously risk-assessed. From acclimatization protocols to evacuation plans, your wellbeing is never an afterthought.",
    },
    {
        id: 2,
        icon: <MdOutlineHandshake />,
        title: "Honest Transparency",
        body: "No hidden fees, no itinerary surprises. What we quote is what you pay — and what we promise is what you experience.",
    },
    {
        id: 3,
        icon: <MdOutlineEmojiNature />,
        title: "Responsible Travel",
        body: "We operate under Leave No Trace principles, employ local communities, and donate a portion of every booking to Himalayan conservation initiatives.",
    },
];

// Animated counter hook
const useCounter = (target, isVisible) => {
    const [count, setCount] = useState(0);
    const isNumeric = /^\d/.test(target);

    useEffect(() => {
        if (!isVisible || !isNumeric) return;
        const numeric = parseInt(target.replace(/\D/g, ''));
        const duration = 1800;
        const steps = 50;
        const increment = numeric / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= numeric) {
                setCount(numeric);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isVisible, target]);

    if (!isNumeric) return target;
    const suffix = target.replace(/[\d,]/g, '');
    return count.toLocaleString() + suffix;
};

const StatCard = ({ stat, index, isVisible }) => {
    const displayCount = useCounter(stat.count, isVisible);
    return (
        <div
            className="tr-stat-card"
            data-aos="fade-up"
            data-aos-delay={index * 80}
        >
            <div className="tr-stat-icon">{stat.icon}</div>
            <strong className="tr-stat-count">{displayCount}</strong>
            <span className="tr-stat-label">{stat.label}</span>
            <div className="tr-stat-line" />
        </div>
    );
};

const Trust = () => {
    const statsRef = useRef(null);
    const [statsVisible, setStatsVisible] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
            { threshold: 0.3 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="tr-section section">

            {/* ── Top band: stats ── */}
            <div className="tr-stats-band" ref={statsRef}>
                <div className="container">
                    <div className="tr-stats-grid">
                        {stats.map((stat, i) => (
                            <StatCard key={stat.id} stat={stat} index={i} isVisible={statsVisible} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Body ── */}
            <div className="container">

                {/* Header */}
                <div className="tr-header" data-aos="fade-up">
                    <span className="tr-eyebrow">Why Travel With Us</span>
                    <h2 className="tr-title">A Standard You Can <br /> Measure Us Against</h2>
                    <div className="tr-title-line" />
                </div>

                {/* Pillars */}
                <div className="tr-pillars" data-aos="fade-up" data-aos-delay="80">
                    {pillars.map((p, i) => (
                        <div
                            key={p.id}
                            className="tr-pillar"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="tr-pillar-icon">{p.icon}</div>
                            <div className="tr-pillar-body">
                                <strong>{p.title}</strong>
                                <p>{p.body}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA row */}
                <div className="tr-bottom" data-aos="fade-up" data-aos-delay="120">
                    <p className="tr-bottom-copy">
                        Over a decade of journeys. Thousands of lives changed. One unwavering standard.
                    </p>
                    <Link to="/about-us" className="tr-cta-btn">
                        Our Full Story <BsArrowRightShort className="tr-cta-arrow" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Trust;