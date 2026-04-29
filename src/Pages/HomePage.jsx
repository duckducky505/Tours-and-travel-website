import { useState } from "react"
import Choose from "../Components/ChooseUs/Choose"
import HomeCompo from "../Components/Home/Home"
import Intro from "../Components/Introduction/Intro"
import Main from "../Components/Main/Main"

import Data from "../Components/Trip/TripData"

const HomePage = () => {

    const [filteredTrips, setFilteredTrips] = useState("");

    const handleSearch = (destination, duration, price) => {
        const results = Data.filter((trip) => {
            const filteredDestination = destination === "" || trip.location === destination;
            const filteredDuration = duration === "" || trip.duration === duration;

            const tripPrice = parseInt(trip.fees.replace(/[$,]/g, ''));
            const matchPrice = tripPrice <= price;

            return filteredDestination && filteredDuration && matchPrice;
        });
        setFilteredTrips(results);
    }

    return(
    <>
        <HomeCompo onSearch={handleSearch}/>
        <Intro/>
        <Main trips={filteredTrips}/>
        <Choose/>
    </>
    )
}

export default HomePage; 