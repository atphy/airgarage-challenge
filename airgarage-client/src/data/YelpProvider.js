import React, { useState } from "react"

export const YelpContext = React.createContext()

export const YelpProvider = (props) => {

    const [searchList, setSearchList] = useState()

    const getSearch = (locationName) => {
        return fetch(`http://localhost:8000/search?location=${locationName}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(setSearchList)
    }

    return (
        <YelpContext.Provider value={{
            getSearch, searchList
        }}>
            {props.children}
        </YelpContext.Provider>
    )
}