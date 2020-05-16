import React from "react";

const Countries = ({ countries, onClick }) => {
    return (
        <div>
            {countries.map( ({ country_id, country_name }) => (
                <div key={country_id} onClick={() => onClick(country_id)}>
                    <h1>{country_id}</h1>
                    <h2>{country_name}</h2>
                </div>
            ))}
        </div>
    )
};

export default Countries;