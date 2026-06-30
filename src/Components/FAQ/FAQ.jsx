import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BsPlus, BsDash } from 'react-icons/bs';
import { MdOutlineExplore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './FAQ.css';

// Updated data to include only the questions from 6007b16b-d1ba-48b8-8dbc-68003e0d9973_2.jpg
const faqs = [
    {
        id: 1,
        question: "How much does a Nepal tour cost?",
        answer: "The cost depends completely on your travel tier and duration. Standard teahouse trekking itineraries typically range from $40 to $80 per day. Mid-range packaged cultural tours average $100 to $180 per day, while bespoke luxury options utilizing premium heritage accommodations, private ground transfers, and domestic charter flights can range from $250 to over $600 per day.",
    },
    {
        id: 2,
        question: "Which package is best for families?",
        answer: "For family groups with younger children or older adults, our multi-city cultural packages covering Kathmandu, Pokhara, and Chitwan National Park are ideal. These itineraries focus on scenic exploration, light day hikes, wildlife safaris, and comfortable boutique lodging with zero altitude risk. For families determined to trek, short routes like Ghorepani Poon Hill offer manageable daily steps.",
    },
    {
        id: 3,
        question: "How many days for Pokhara + Kathmandu?",
        answer: "To experience both cities fully without a rushed itinerary, we highly recommend a timeframe of 7 to 9 days. This allocation allows roughly 3 days to experience the historic UNESCO heritage architecture of the Kathmandu Valley, 1 day for transit or a short internal flight, and 3 to 4 days exploring the lakeside, caves, and mountain vantage points around Pokhara.",
    },
    {
        id: 4,
        question: "Can Indian travelers visit without a passport?",
        answer: "Yes, Indian nationals can enter Nepal without a passport. To satisfy immigration rules when entering by air or land cross-borders, you must present either a valid original Indian Passport or a valid Voter Identity Card issued by the Election Commission of India. Please keep in mind that Aadhaar cards, PAN cards, and driving licenses are not recognized as valid travel documents.",
    }
];

const FAQ = () => {

        const phoneNumber = "9779856089339"; 
        const message = "Hello! I'd like to inquire about a travel package.";
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        const [activeId, setActiveId] = useState(null);

    // Initialize AOS once
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    // Refresh AOS whenever an accordion opens or closes
    useEffect(() => {
        Aos.refresh();
    }, [activeId]);

    const toggle = (id) => {
        setActiveId(prev => prev === id ? null : id);
    };

    return (
        <section className="faq-section section">
            <div className="container">

                <div className="faq-header">
                    <span className="faq-eyebrow">Know Before You Go</span>
                    <h2 className="faq-title">Frequently Asked <br /> Questions</h2>
                    <div className="faq-title-line" />
                    <p className="faq-subtitle">
                        Every great journey begins with the right questions. Here are the ones we hear most — answered honestly.
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((item, index) => {
                        const isOpen = activeId === item.id;
                        return (
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
                        <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="faq-cta-btn">Speak to Us</Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FAQ;