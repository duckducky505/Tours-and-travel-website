import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Data from "../../Components/Trip/TripData";
import { HiOutlineLocationMarker, HiSearch } from 'react-icons/hi';
import { BiFilterAlt } from 'react-icons/bi';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import './Packages.css';

const Packages = () => {

  const location = useLocation();
  
  const [filteredTrips, setFilteredTrips] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;


  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2000);
  const [durationCard, setDurationCard] = useState("");

  const [searchBarChange,setSearchBarChange] = useState("");

  useEffect(() => {
    const onSearchFilter = () => {
      const toLowerSearch = searchBarChange.toLowerCase();

      const results = Data.filter((packages) =>{
        const filteredPackages =  packages.location?.toLowerCase().includes(toLowerSearch) || packages.destTitle?.toLowerCase().includes(toLowerSearch) || packages.tagline?.toLowerCase().includes(toLowerSearch);
        return filteredPackages;
      });
      setFilteredTrips(results);
    }
    onSearchFilter();
  },[searchBarChange]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const dest = params.get('dest');  
    const dur = params.get('dur');
    const prc = params.get('prc'); 

    if (dest || dur || prc) {
      const results = Data.filter((trip) => {
        const matchingDestination = !dest || dest === "" || trip.location === dest;
        const matchingDuration = !dur || dur === "" || trip.duration === dur;
        
        const tripPrice = parseInt(trip.fees.replace(/[$,]/g, ''));
        const matchingPrice = !prc || tripPrice <= parseInt(prc);

        return matchingDestination && matchingDuration && matchingPrice;
      });
      setFilteredTrips(results);
    } else {
      setFilteredTrips(Data);
    }
    
    setCurrentPage(1);
  }, [location.search]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0, 0); 
  }, [currentPage]);


  const applyFiltersBtn = () => {
    
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTrips.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTrips.length / itemsPerPage);

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
            <input type="text" placeholder="Search by destination or activity..." onChange={(e) => setSearchBarChange(e.target.value)}/>
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
                  <input type="number" placeholder="0" min={0} onChange={(e) => setMinValue(e.target.value)}/>
                </div>
                <div className="divider">-</div>
                <div className="inputBox">
                  <span>Max</span>
                  <input type="number" placeholder="2500" max={2000} onChange={(e) => setMaxValue(e.target.value)}/>
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

            <button className="applyBtn" onClick={applyFiltersBtn}>Apply Filters</button>
            <button className="clearBtn" onClick={() => setFilteredTrips(Data)}>Clear All</button>
          </div>
        </aside>

        <main className="packagesContent">
          <div className="sortBar">
            <p>Showing <strong>{filteredTrips.length > 0 ? indexOfFirstItem + 1 : 0} - {Math.min(indexOfLastItem, filteredTrips.length)}</strong> of {filteredTrips.length} packages</p>
          </div>

          <div className="packageGrid">
            {currentItems.length > 0 ? (
              currentItems.map(({ id, imgSrc, destTitle, location, grade, fees, description, slug }) => (
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
              ))
            ) : (
              <div className="noResults" style={{textAlign: 'center', padding: '2rem'}}>
                <h3>No packages found for this search.</h3>
              </div>
            )}
          </div>

          {totalPages > 1 && (
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
              <button disabled={currentPage === totalPages} onClick={() => paginate(currentPage + 1)} className="pageBtn">
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default Packages;