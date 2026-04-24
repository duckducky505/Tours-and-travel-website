import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Data from "../../Components/Trip/TripData";
import { HiOutlineLocationMarker, HiSearch } from 'react-icons/hi';
import { BiFilterAlt } from 'react-icons/bi';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Packages.css';

const Packages = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0, 0); 
  }, [currentPage]);

  // Pagination Logic 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(Data.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="packagesPage">
      <div className="headerSection container">
        <div className="titleDiv" data-aos="fade-up">
          <span className="subtitle">Adventure Awaits</span>
          <h1 className="mainTitle">All Travel Packages</h1>
        </div>
        
        <div className="searchBarContainer" data-aos="fade-up">
          <div className="searchWrapper">
            <HiSearch className="searchIcon" />
            <input type="text" placeholder="Search by destination or activity..." />
            <button className="searchBtn">Find Trips</button>
          </div>
        </div>
      </div>

      <div className="mainLayout container">
        <aside className="sidebar">
          <div className="stickyFilter">
            <div className="filterHeading">
              <BiFilterAlt className="icon" />
              <h3>Filters</h3>
            </div>

            <div className="filterBlock">
              <label>Budget Range (USD)</label>
              <div className="priceInputs">
                <div className="inputBox">
                  <span>Min</span>
                  <input type="number" placeholder="0" />
                </div>
                <div className="divider">-</div>
                <div className="inputBox">
                  <span>Max</span>
                  <input type="number" placeholder="2500" />
                </div>
              </div>
            </div>

            <div className="filterBlock">
                <label>Trip Duration</label>
                <select className="filterSelect">
                    <option value="">Any Duration</option>
                    <option value="short">1 - 5 Days</option>
                    <option value="medium">6 - 10 Days</option>
                    <option value="long">11+ Days</option>
                </select>
            </div>

            <button className="applyBtn">Apply Filters</button>
            <button className="clearBtn">Clear All</button>
          </div>
        </aside>

        <main className="packagesContent">
          <div className="sortBar">
            <p>Showing <strong>{indexOfFirstItem + 1} - {Math.min(indexOfLastItem, Data.length)}</strong> of {Data.length} packages</p>
          </div>

          <div className="packageGrid">
            {currentItems.map(({ id, imgSrc, destTitle, location, grade, fees, description, slug }) => (
              <div key={id} className="packageCard" data-aos="fade-up">
                <div className="imgContainer">
                  <img src={imgSrc} alt={destTitle} />
                  <span className="badge">{grade}</span>
                </div>

                <div className="cardBody">
                  <div className="priceTag">{fees}</div>
                  <h3 className="cardTitle">{destTitle}</h3>
                  <div className="location">
                    <HiOutlineLocationMarker className="icon" />
                    <span>{location}</span>
                  </div>
                  <p className="description">{description}</p>
                  
                  <Link to={`/trip/${slug}`} className="viewBtn">
                    View Trip <BsArrowRightShort className="icon" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button 
              disabled={currentPage === 1} 
              onClick={() => paginate(currentPage - 1)}
              className="pageBtn"
            >
              Prev
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button 
                key={i} 
                onClick={() => paginate(i + 1)}
                className={`pageBtn ${currentPage === i + 1 ? 'active' : ''}`}
              >
                {i + 1}
              </button>
            ))}

            <button 
              disabled={currentPage === totalPages} 
              onClick={() => paginate(currentPage + 1)}
              className="pageBtn"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Packages;