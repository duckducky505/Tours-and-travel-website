import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BsPlus, BsDash } from 'react-icons/bs';
import { MdOutlineExplore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './FAQ.css';

const faqs = [
    {
        id: 1,
        category: "Planning",
        question: "What is the best time of year to travel to Nepal?",
        answer: "Nepal's prime trekking seasons are October–November and March–May. These months offer clear skies, stable trails, and spectacular mountain visibility. Winter (December–February) brings solitude and snow-dusted landscapes at lower altitudes. Monsoon season (June–September) is best avoided for high-altitude treks, though it's ideal for cultural exploration in the valleys.",
    },
    {
        id: 2,
        category: "Planning",
        question: "How far in advance should I book my Nepal journey?",
        answer: "We recommend booking at least 3–6 months ahead for peak season (October and March). Permits for restricted areas like Upper Mustang or Dolpo are limited and require additional lead time. For customized private journeys, 4–6 months gives us the ideal window to craft a truly personal itinerary.",
    },
    {
        id: 3,
        category: "Permits & Logistics",
        question: "What permits do I need to trek in Nepal?",
        answer: "Most treks require at minimum a TIMS card (Trekkers' Information Management System) and a national park or conservation area permit. High-altitude or restricted area treks — Manaslu, Upper Mustang, Dolpo — require special government permits with regulated group sizes. We handle all permit procurement as part of your package, so you arrive ready to walk.",
    },
    {
        id: 4,
        category: "Permits & Logistics",
        question: "Do I need a visa to visit Nepal?",
        answer: "Most nationalities can obtain a visa on arrival at Tribhuvan International Airport in Kathmandu. Visas are available for 15, 30, or 90 days. We provide full pre-arrival documentation and guidance, including the exact fees, photos required, and declaration forms to complete online before you fly.",
    },
    {
        id: 5,
        category: "Health & Safety",
        question: "How serious is altitude sickness, and how do you manage it?",
        answer: "Acute Mountain Sickness (AMS) is a real concern above 3,000m and must be taken seriously. Our itineraries are built with acclimatization days and gradual ascent profiles following the 'climb high, sleep low' principle. All our senior guides carry pulse oximeters and supplemental oxygen. We also brief every traveler on early symptoms and maintain direct contact with Kathmandu-based evacuation services throughout your trek.",
    },
    {
        id: 6,
        category: "Health & Safety",
        question: "What level of fitness is required for your treks?",
        answer: "It varies considerably by route. A cultural Kathmandu valley tour requires minimal fitness, while Everest Base Camp demands consistent cardiovascular conditioning over several months. Each package listing includes a frank fitness guide. We also offer a complimentary pre-trip consultation where our team matches you to the right trail based on your genuine current fitness — not aspirational fitness.",
    },
    {
        id: 7,
        category: "Experience",
        question: "Can you create a fully custom private itinerary?",
        answer: "Absolutely — and it is what we do best. Tell us your dates, interests, physical condition, travel style, and budget. We build an itinerary from scratch: private guide, curated accommodations from teahouses to heritage hotels, helicopter extensions, photography workshops, cooking classes with Sherpa families. No two private journeys look alike.",
    },
    {
        id: 8,
        category: "Experience",
        question: "What sets your guides apart from standard agencies?",
        answer: "Every lead guide we employ holds a Government of Nepal trekking license, has a minimum of eight years of field experience, and speaks conversational English. Many are from the communities you pass through — Sherpa, Tamang, Gurung — which means genuine local insight rather than rehearsed commentary. They are not just pathfinders; they are the soul of the journey.",
    },
];

const categories = [...new Set(faqs.map(f => f.category))];

const FAQ = () => {
    const [activeId, setActiveId] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    // Initialize AOS once
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    // Refresh AOS whenever a category changes or an accordion opens/closes
    // This recalculates page heights so elements don't randomly disappear
    useEffect(() => {
        Aos.refresh();
    }, [activeId, activeCategory]);

    const toggle = (id) => {
        setActiveId(prev => prev === id ? null : id);
    };

    const filtered = activeCategory === 'All'
        ? faqs
        : faqs.filter(f => f.category === activeCategory);

    return (
        <section className="faq-section section">
            <div className="container">

                {/* Header */}
                <div className="faq-header">
                    <span className="faq-eyebrow">Know Before You Go</span>
                    <h2 className="faq-title">Frequently Asked <br /> Questions</h2>
                    <div className="faq-title-line" />
                    <p className="faq-subtitle">
                        Every great journey begins with the right questions. Here are the ones we hear most — answered honestly.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="faq-filters">
                    {['All', ...categories].map(cat => (
                        <button
                            key={cat}
                            className={`faq-filter-btn ${activeCategory === cat ? 'faq-filter-btn--active' : ''}`}
                            onClick={() => { setActiveCategory(cat); setActiveId(null); }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Accordion List */}
                <div className="faq-list">
                    {filtered.map((item, index) => {
                        const isOpen = activeId === item.id;
                        return (
                            /* Wrap the animated properties in a static div so React state updates don't break AOS */
                            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 60}>
                                <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                                    <button
                                        className="faq-question"
                                        onClick={() => toggle(item.id)}
                                        aria-expanded={isOpen}
                                    >
                                        <span className="faq-q-index">0{index + 1}</span>
                                        <span className="faq-q-text">{item.question}</span>
                                        <span className="faq-icon">
                                            {isOpen ? <BsDash /> : <BsPlus />}
                                        </span>
                                    </button>

                                    <div className={`faq-answer-wrap ${isOpen ? 'faq-answer-wrap--open' : ''}`}>
                                        <div className="faq-answer">
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA strip */}
                <div className="faq-cta" data-aos="fade-up">
                    <div className="faq-cta-inner">
                        <MdOutlineExplore className="faq-cta-icon" />
                        <div className="faq-cta-text">
                            <strong>Still have questions?</strong>
                            <span>Our travel specialists are available seven days a week.</span>
                        </div>
                        <Link to="/contact" className="faq-cta-btn">Speak to Us</Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FAQ;