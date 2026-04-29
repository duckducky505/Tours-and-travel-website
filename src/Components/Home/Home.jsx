import React, { useEffect, useState } from 'react';
import './home.css';
import { GrLocation } from 'react-icons/gr';
import video from '../../assets/video.mp4';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import Data from "../../Components/Trip/TripData";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const navigate = useNavigate();

    //DropDown 
    const dropDestination = [...new Set(Data.map(item => item.location))];
    const dropDuration = [...new Set(Data.map(item => item.duration))].sort((a, b) => parseInt(a) - parseInt(b));


    const [destination, setDestination] = useState("");
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState(2000); 


    const handleSearch = () => {
        navigate(`/packages?dest=${destination}&dur=${duration}&prc=${price}`);
    };

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">Our Packages</span>
                    <h1 data-aos="fade-up" className="homeTitle">Search Your Holiday</h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor='city'>Select your destination:</label>
                        <div className="input flex">
                            <select value={destination} onChange={(e) => setDestination(e.target.value)}>
                                <option value="">All Destinations</option>
                                {dropDestination.map((desti, index) => (
                                    <option key={index} value={desti}>{desti}</option>
                                ))}
                            </select>
                            <GrLocation className='icon' />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor='date'>Select the Trip Duration:</label>
                        <div className="input flex">
                            <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                                <option value="">Any Duration</option>
                                {dropDuration.map((dura, index) => (
                                    <option key={index} value={dura}>{dura}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor='price'>Max Budget:</label>
                            <h3 className="total">${price}</h3>
                        </div>
                        <div className="input flex">
                            <input 
                                type="range" 
                                max="5000" 
                                min="500" 
                                value={price} 
                                onChange={(e) => setPrice(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="searchOptions flex" onClick={handleSearch}>
                        <CiSearch className='icon' />
                        <span>SEARCH TRIPS</span>
                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className='icon' />
                        <AiOutlineInstagram className='icon' />
                        <FaTripadvisor className='icon' />
                    </div>
                    <div className="leftIcons flex">
                        <BsListTask className='icon' />
                        <TbApps className='icon' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;