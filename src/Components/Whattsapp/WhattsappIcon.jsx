import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhattsappIcon.css';

const WhattsappIcon = () => {
  const phoneNumber = "9779800000000"; // Replace with your number
  const message = "Hello! I'd like to inquire about a travel package.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-sticky" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="tooltip">Chat with us</span>
    </a>
  );
};

export default WhattsappIcon;