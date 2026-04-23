import React, { useEffect } from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './MeetTeam.css';

import member1 from '../../assets/swing-by-peak.jpg'; 
import Associates from '../../Components/Associates/Associates';

const teamMembers = [
  { 
    id: 1, 
    name: 'Sanjiv Nepal', 
    role: 'Founder & Expedition Lead', 
    img: member1,
    desc: 'With over 15 years of experience scaling 8,000m peaks, Sanjiv ensures every expedition balances raw adventure with elite safety protocols.'
  },
  { 
    id: 2, 
    name: 'Maya Sharma', 
    role: 'Operations Manager', 
    img: member1, 
    desc: 'Maya is the logistical backbone of our team, coordinating complex high-altitude rescues and seamless base-camp management.'
  },
  { 
    id: 3, 
    name: 'Pasang Sherpa', 
    role: 'Senior Trekking Guide', 
    img: member1,
    desc: 'A local legend in the Khumbu region, Pasang specializes in cultural immersion and finding the most scenic, untouched trails.'
  },
];

const MeetTeam = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <>
      <section className="team-page section">
        <div className="container">
          <div className="secHeader" data-aos="fade-up">
            <span className="spanText">THE MINDS BEHIND THE MAGIC</span>
            <h2 className="title">Meet Our Experts</h2>
            <p className="subtitle">
              A collective of mountain enthusiasts and safety experts dedicated to your journey.
            </p>
          </div>

          <div className="teamGrid">
            {teamMembers.map(({ id, name, role, img, desc }) => (
              <div key={id} className="memberWrapper" data-aos="fade-up">
                {/* The Visual Card */}
                <div className="teamCard">
                  <div className="imgDiv">
                    <img src={img} alt={name} />
                    <div className="socialOverlay">
                      <AiOutlineInstagram className="icon" />
                      <AiOutlineTwitter className="icon" />
                      <AiFillLinkedin className="icon" />
                    </div>
                  </div>
                  <div className="info">
                    <h4>{name}</h4>
                    <span className="role">{role}</span>
                  </div>
                </div>
                
                {/* Description Outside the Card */}
                <div className="externalDesc">
                    <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Associates />
    </>
  );
};

export default MeetTeam;