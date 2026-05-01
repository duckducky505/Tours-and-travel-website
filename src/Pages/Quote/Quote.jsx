import React from 'react';
import { HiOutlineDocumentText, HiOutlineUser, HiOutlineGlobe, HiOutlineChatAlt2 } from 'react-icons/hi';
import './Quote.css';

import Data from '../../Components/Trip/TripData';

const Quote = () => {

    return (
        <section className="quoteSection section">
        <div className="container">
            <div className="quoteWrapper grid">
            
            <aside className="quoteSidebar">
                <div className="sidebarHeader">
                <span className="subtitle">Request a Quote</span>
                <h2 className="title">Plan Your Trip</h2>
                </div>
                <div className="stepList">
                <div className="stepItem active"><HiOutlineDocumentText className="icon"/> <p>Package Selection</p></div>
                <div className="stepItem"><HiOutlineUser className="icon"/> <p>Personal Details</p></div>
                <div className="stepItem"><HiOutlineGlobe className="icon"/> <p>Travel Preferences</p></div>
                </div>
            </aside>

            <main className="quoteContent">
                <form>
                <div className="formStep">
                    <h3>Select Your Package</h3>
                    <div className="inputBox">
                    <label>Choose a Travel Package*</label>
                    <select name="package" className="customSelect">
                        <option value="">Select an option...</option>
                        <option value="luxury">Luxury Expedition (5-Star)</option>
                        <option value="adventure">Adventure Trekking</option>
                        <option value="cultural">Cultural Heritage Tour</option>
                        <option value="family">Family Getaway</option>
                    </select>
                    </div>
                </div>

                <div className="formStep">
                    <h3>Personal Information</h3>
                    <div className="inputRow grid">
                    <div className="inputBox">
                        <label>First Name*</label>
                        <input type="text" placeholder="John" />
                    </div>
                    <div className="inputBox">
                        <label>Middle Name</label>
                        <input type="text" placeholder="Optional" />
                    </div>
                    <div className="inputBox">
                        <label>Last Name*</label>
                        <input type="text" placeholder="Doe" />
                    </div>
                    </div>
                    <div className="inputRow grid">
                    <div className="inputBox">
                        <label>Phone Number*</label>
                        <input type="tel" placeholder="+977 980..." />
                    </div>
                    <div className="inputBox">
                        <label>Email Address*</label>
                        <input type="email" placeholder="john@example.com" />
                    </div>
                    </div>
                </div>

                <div className="formStep">
                    <h3>Travel Preferences</h3>
                    <div className="inputBox">
                    <label>Departure City*</label>
                    <input type="text" placeholder="e.g. Kathmandu, London" />
                    </div>
                    <div className="inputRow grid">
                    <div className="inputBox">
                        <label>Departure Date*</label>
                        <input type="date" />
                    </div>
                    <div className="inputBox">
                        <label>Return Date*</label>
                        <input type="date" />
                    </div>
                    <div className="inputBox">
                        <label>No. of Travelers*</label>
                        <input type="number" min="1" placeholder="1" />
                    </div>
                    </div>
                    <div className="inputBox">
                    <label>Special Requirements & Requests</label>
                    <textarea rows="6" placeholder="Tell us about dietary needs, medical requirements, or specific places you want to visit..."></textarea>
                    </div>
                </div>

                <div className="formFooter">
                    <button type="button" className="btn submitBtn">Request Custom Quote</button>
                </div>
                </form>
            </main>
            </div>
        </div>
        </section>
    );
};

export default Quote;