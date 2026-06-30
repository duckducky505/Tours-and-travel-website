import React, { useEffect, useState } from 'react';
import './home.css';
import { GrLocation } from 'react-icons/gr';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineLocalActivity } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Data from "../../Components/Trip/TripData";
import poster from '../../assets/pashupatinath-home.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const navigate = useNavigate();

    // Dropdown Data derivation
    const dropDestination = [...new Set(Data.map(item => item.location))];
    const dropDuration = [...new Set(Data.map(item => item.duration))].sort((a, b) => parseInt(a) - parseInt(b));
    
    // Extract unique activities from the nested arrays in TripData
    const dropActivities = [...new Set(Data.flatMap(item => item.activities))].sort();

    // State
    const [destination, setDestination] = useState("");
    const [duration, setDuration] = useState("");
    const [activity, setActivity] = useState("");

    const handleSearch = () => {
        navigate(`/packages?dest=${destination}&dur=${duration}&act=${activity}`);
    };

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="home">
            <img src={poster} alt="Background" className="homeBgImage" />
            
            <div className="overlay"></div>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search Your Holiday
                    </h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Select your destination:</label>
                        <div className="input flex">
                            <select 
                                value={destination} 
                                onChange={(e) => setDestination(e.target.value)}
                            >
                                <option value="">All Destinations</option>
                                {dropDestination.map((desti, index) => (
                                    <option key={index} value={desti}>{desti}</option>
                                ))}
                            </select>
                            <GrLocation className="icon" />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select the Trip Duration:</label>
                        <div className="input flex">
                            <select 
                                value={duration} 
                                onChange={(e) => setDuration(e.target.value)}
                            >
                                <option value="">Any Duration</option>
                                {dropDuration.map((dura, index) => (
                                    <option key={index} value={dura}>{dura}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="activityInput">
                        <label htmlFor="activity">Select an Activity:</label>
                        <div className="input flex">
                            <select 
                                value={activity} 
                                onChange={(e) => setActivity(e.target.value)}
                            >
                                <option value="">All Activities</option>
                                {dropActivities.map((act, index) => (
                                    <option key={index} value={act}>{act}</option>
                                ))}
                            </select>
                            <MdOutlineLocalActivity className="icon" />
                        </div>
                    </div>

                    <div className="searchOptions flex" onClick={handleSearch}>
                        <CiSearch className="icon" />
                        <span>SEARCH TRIPS</span>
                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <a href="https://www.facebook.com/share/1D4Ed8rLf4/?mibextid=wwXIfr" target="_blank" aria-label="Facebook"> <FiFacebook className="icon" /> </a>
                        <a href="https://www.instagram.com/sacrednepalofficial?utm_source=qr" target="_blank" aria-label="Instagram"><AiOutlineInstagram className="icon" /> </a>
                        
                    </div>
                    <div className="leftIcons flex">
                        <BsListTask className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;