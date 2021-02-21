import React, {useContext, useState} from "react";

import { YelpContext } from '../data/YelpProvider'

export const CitySearch = (props) => {
    const {getSearch} = useContext(YelpContext)
    const [location, setLocation] = useState('')
    
    const handleSearch = (e) => {
        e.preventDefault();
        getSearch(location)
    }

    return <>
        <h1>Show me the worst parking lots in</h1>
        <form>
            <input onChange={event => setLocation(event.target.value)} placeholder="City" type="text"></input>
            <button onClick={handleSearch}></button>
        </form>
    </>;
};