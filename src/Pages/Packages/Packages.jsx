import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Data from "../../Components/Trip/TripData";
import { HiOutlineLocationMarker, HiSearch } from 'react-icons/hi';
import { BiFilterAlt } from 'react-icons/bi';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import './Packages.scss';

const Packages = () => {
  const location = useLocation();

  const [filteredTrips, setFilteredTrips] = useState(Data);
  const [currentPage,   setCurrentPage]   = useState(1);
  const itemsPerPage = 6;

  const [minValue,      setMinValue]      = useState('');
  const [maxValue,      setMaxValue]      = useState('');
  const [duration,      setDuration]      = useState('');
  const [searchBar,     setSearchBar]     = useState('');

  const [drawerOpen,    setDrawerOpen]    = useState(false);

  useEffect(() => {
    const q = searchBar.toLowerCase();
    setFilteredTrips(
      Data.filter(p =>
        p.location?.toLowerCase().includes(q) ||
        p.destTitle?.toLowerCase().includes(q) ||
        p.tagline?.toLowerCase().includes(q)
      )
    );
    setCurrentPage(1);
  }, [searchBar]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const dest = params.get('dest');
    const dur  = params.get('dur');
    const prc  = params.get('prc');

    if (dest || dur || prc) {
      setFilteredTrips(Data.filter(trip => {
        const matchDest  = !dest || trip.location === dest;
        const matchDur   = !dur  || trip.duration === dur;
        const tripPrice  = parseInt(trip.fees.replace(/[$,]/g, ''));
        const matchPrice = !prc  || tripPrice <= parseInt(prc);
        return matchDest && matchDur && matchPrice;
      }));
      setCurrentPage(1);
    }
  }, [location.search]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const applyFiltersBtn = () => {
    const min = minValue !== '' ? parseInt(minValue) : 0;
    const max = maxValue !== '' ? parseInt(maxValue) : Infinity;

    const results = Data.filter(trip => {
      const price = parseInt(trip.fees.replace(/[$,]/g, ''));

      const matchBudget = price >= min && price <= max;

      let matchDuration = true;
      if (duration === 'short')  matchDuration = parseInt(trip.duration) <= 5;
      if (duration === 'medium') matchDuration = parseInt(trip.duration) >= 6  && parseInt(trip.duration) <= 10;
      if (duration === 'long')   matchDuration = parseInt(trip.duration) >= 11;

      return matchBudget && matchDuration;
    });

    setFilteredTrips(results);
    setCurrentPage(1);
    setDrawerOpen(false); 
  };

  const clearAll = () => {
    setMinValue('');
    setMaxValue('');
    setDuration('');
    setFilteredTrips(Data);
    setCurrentPage(1);
    setDrawerOpen(false);
  };

  const indexOfLastItem  = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems     = filteredTrips.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages       = Math.ceil(filteredTrips.length / itemsPerPage);
  const paginate         = (n) => setCurrentPage(n);

  const hasActiveFilters = minValue !== '' || maxValue !== '' || duration !== '';

  const FilterPanel = ({ onClose, isMobile }) => (
    <div className="stickyFilter">
      <div className="filterHeading">
        <BiFilterAlt className="icon" />
        <h3>Filters</h3>
        {isMobile && (
          <button className="drawerClose" type="button" onClick={onClose}>
            <MdClose />
          </button>
        )}
      </div>

      <div className="filterBlock">
        <label>Budget Range (USD)</label>
        <div className="priceInputs">
          <div className="inputBox">
            <span>Min</span>
            <input
              type="number" placeholder="0" min={0}
              value={minValue}
              onChange={e => setMinValue(e.target.value)}
            />
          </div>
          <div className="divider">—</div>
          <div className="inputBox">
            <span>Max</span>
            <input
              type="number" placeholder="2500"
              value={maxValue}
              onChange={e => setMaxValue(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="filterBlock">
        <label>Trip Duration</label>
        <select
          className="filterSelect"
          value={duration}
          onChange={e => setDuration(e.target.value)}
        >
          <option value="">Any Duration</option>
          <option value="short">1 – 5 Days</option>
          <option value="medium">6 – 10 Days</option>
          <option value="long">11+ Days</option>
        </select>
      </div>

      <button className="applyBtn" type="button" onClick={applyFiltersBtn}>
        Apply Filters
      </button>
      <button className="clearBtn" type="button" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );

  return (
    <section className="packagesPage">

      {drawerOpen && (
        <div className="drawerOverlay" onClick={() => setDrawerOpen(false)}>
          <div className="filterDrawer" onClick={e => e.stopPropagation()}>
            <div className="drawerHandle" />
            <FilterPanel isMobile onClose={() => setDrawerOpen(false)} />
          </div>
        </div>
      )}

      <div className="headerSection container">
        <div className="titleDiv" data-aos="fade-up">
          <span className="subtitle">Adventure Awaits</span>
          <h1 className="mainTitle">All Travel Packages</h1>
        </div>

        <div className="searchBarContainer" data-aos="fade-up">
          <div className="searchWrapper">
            <HiSearch className="searchIcon" />
            <input
              type="text"
              placeholder="Search by destination or activity..."
              value={searchBar}
              onChange={e => setSearchBar(e.target.value)}
            />
            <button className="searchBtn" type="button">Find Trips</button>
          </div>
        </div>
      </div>

      <div className="mainLayout container">

        <aside className="sidebar">
          <FilterPanel isMobile={false} />
        </aside>

        <main className="packagesContent">

          <div className="sortBar">
            <p>
              Showing{' '}
              <strong>
                {filteredTrips.length > 0 ? indexOfFirstItem + 1 : 0}
                {' – '}
                {Math.min(indexOfLastItem, filteredTrips.length)}
              </strong>
              {' '}of {filteredTrips.length} packages
            </p>

            <button
              type="button"
              className="mobileFilterBtn"
              onClick={() => setDrawerOpen(true)}
            >
              <BiFilterAlt />
              Filters
              {hasActiveFilters && <span className="filterDot" />}
            </button>
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
              <div className="noResults">
                <h3>No packages found.</h3>
                <button type="button" onClick={clearAll}>Clear Filters</button>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pageBtn"
                disabled={currentPage === 1}
                onClick={() => paginate(currentPage - 1)}
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`pageBtn${currentPage === i + 1 ? ' active' : ''}`}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="pageBtn"
                disabled={currentPage === totalPages}
                onClick={() => paginate(currentPage + 1)}
              >
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