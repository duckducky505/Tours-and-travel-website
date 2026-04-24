import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HiOutlineUser, HiOutlineMail, HiOutlineCash, HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { BiWorld, BiHotel, BiMessageDetail, BiCheck } from 'react-icons/bi';
import './TailorPage.css';

const TailorPage = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    Aos.init({ duration: 800 });
    window.scrollTo(0, 0);
  }, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <section className="tailorBuilder section">
      <div className="container">
        <div className="builderWrapper grid">
          
          {/* SIDEBAR NAVIGATION */}
          <aside className="builderSidebar">
            <div className="sidebarHeader">
              <span className="subtitle">Itinerary Architect</span>
              <h2 className="title">Design Your Trip</h2>
            </div>

            <div className="stepIndicator">
              {[
                { id: 1, title: 'Personal', icon: <HiOutlineUser/> },
                { id: 2, title: 'Destination', icon: <BiWorld/> },
                { id: 3, title: 'Comfort', icon: <BiHotel/> }
              ].map((item) => (
                <div key={item.id} className={`stepItem ${step === item.id ? 'active' : ''} ${step > item.id ? 'completed' : ''}`}>
                  <div className="iconCircle">
                    {step > item.id ? <BiCheck /> : item.icon}
                  </div>
                  <div className="stepLabel">
                    <small>Step 0{item.id}</small>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* FORM CONTENT */}
          <main className="builderContent">
            <form onSubmit={(e) => e.preventDefault()}>
              
              {step === 1 && (
                <div className="stepFade" data-aos="fade-right">
                  <h3>Tell us who you are</h3>
                  <div className="inputRow grid">
                    <div className="inputBox">
                      <label>First Name</label>
                      <input type="text" placeholder="John" required />
                    </div>
                    <div className="inputBox">
                      <label>Middle Name</label>
                      <input type="text" placeholder="Optional" />
                    </div>
                    <div className="inputBox">
                      <label>Last Name</label>
                      <input type="text" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="inputBox">
                    <label>Email Address</label>
                    <div className="innerInput flex">
                       <HiOutlineMail className="icon"/>
                       <input type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="inputBox">
                    <label>Preferred Contact</label>
                    <div className="chipGroup flex">
                       {['Email', 'WhatsApp', 'Phone'].map(mode => (
                         <label key={mode} className="chip">
                            <input type="radio" name="contact" value={mode} />
                            <span>{mode}</span>
                         </label>
                       ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="stepFade" data-aos="fade-right">
                  <h3>Where & When?</h3>
                  <div className="inputBox">
                    <label>Dream Destination</label>
                    <select className="customSelect">
                      <option>Everest Region</option>
                      <option>Annapurna Circuit</option>
                      <option>Pokhara Valley</option>
                    </select>
                  </div>
                  <div className="inputRow grid dateRow">
                    <div className="inputBox">
                      <label>Arrival Date</label>
                      <input type="date" />
                    </div>
                    <div className="inputBox">
                      <label>Departure Date</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="inputBox">
                    <label>Budget (USD)</label>
                    <div className="innerInput flex">
                       <HiOutlineCash className="icon"/>
                       <input type="number" placeholder="1500" />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="stepFade" data-aos="fade-right">
                  <h3>Final Touches</h3>
                  <div className="inputBox">
                    <label>Accommodation Category</label>
                    <div className="starGroup flex">
                       {[3, 4, 5].map(star => (
                         <label key={star} className="starCard">
                            <input type="radio" name="star" />
                            <div className="cardContent">
                              <span>{star} Star</span>
                              <p>Luxury Level</p>
                            </div>
                         </label>
                       ))}
                    </div>
                  </div>
                  <div className="inputBox">
                    <label>Special Requests</label>
                    <div className="innerInput flex textareaItem">
                      <BiMessageDetail className="icon topIcon" />
                      <textarea rows="4" placeholder="Dietary needs, honeymoon setups, etc..."></textarea>
                    </div>
                  </div>
                </div>
              )}

              <div className="builderFooter flex">
                {step > 1 && (
                  <button type="button" className="backBtn flex" onClick={prevStep}>
                    <HiChevronLeft/> Back
                  </button>
                )}
                
                {step < 3 ? (
                  <button type="button" className="btn nextBtn flex" onClick={nextStep}>
                    Continue <HiChevronRight/>
                  </button>
                ) : (
                  <button type="submit" className="btn submitBtn">
                    Submit Plan
                  </button>
                )}
              </div>
            </form>
          </main>
        </div>
      </div>
    </section>
  );
};

export default TailorPage;