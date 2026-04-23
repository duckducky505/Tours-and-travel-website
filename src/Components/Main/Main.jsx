import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Data from '../Trip/TripData';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsArrowRightShort } from 'react-icons/bs'; 
import './main.scss';

const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 1200, once: true });
    }, []);

    return (
        <section className="main container section">
            <div className="secHeader">
                <div data-aos="fade-right" className="textDiv">
                    <span className="spanText">EXPLORE NEPAL</span>
                    <h3 className="title">Most Visited Destinations</h3>
                </div>
                <div data-aos="fade-left" className="btnDiv">
                    <button className="viewAllBtn">View All Packages</button>
                </div>
            </div>

            <div className="secContent grid">
                {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description, slug }) => {
                    return (
                        <div key={id} data-aos="fade-up" className="singleDestination">
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                                <div className="overlay"></div>
                                <span className="gradeBadge">{grade}</span>
                                <div className="priceBadge">{fees}</div>
                            </div>

                            <div className="cardInfo">
                                <div className="destHeader">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="location flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <Link to={`/trip/${slug}`} className="detailsBtn flex">
                                    Explore Now <BsArrowRightShort className='icon' />
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Main;