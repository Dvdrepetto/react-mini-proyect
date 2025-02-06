import React from 'react'
import { useState } from 'react';
import apartmentsData from '../Data/Apartments.json'
import "./ApartmentsList.css";

function ApartmentsList() {

    const [apartmentsToDisplay, setApartments] = useState(apartmentsData);

    const deleteApartment = (id) => {
        const updatedApartments = apartmentsToDisplay.filter((apartment) => apartment.id !== id);
        setApartments(updatedApartments);
    };
    return (
        
        <div className="apartment-list">
            {apartmentsToDisplay.map((apartment) => {
                const price = apartment.price
                ? parseFloat(apartment.price.replace("$", ""))
                : 0;
                return(
                    <div key={apartment.id} className="apartment-card">
                    <img
                        src={apartment.picture_url}
                        alt={`Imagen de ${apartment.title}`}
                        className="apartment-image"
                    />
                    <h2 className="apartment-title">{apartment.title}</h2>
                    <h3>
                        <strong>Price:</strong> {apartment.price} €
                    </h3>
                    <div className="labels">
                        {price < 100 && (
                            <span className="label affordable">💵 Affordable</span>
                        )}
                        {price >= 100 && (
                            <span className="label premium">💎 Premium</span>
                        )}
                        {apartment.instant_bookable && (
                            <span className="label confirmation">✅ Instant Confirmation</span>
                        )}
                    </div>
                    <button
                        className="delete-button"
                        onClick={() => deleteApartment(apartment.id)}
                    >
                        Delete
                    </button>
                </div>
                )
            })}
        </div>
    );
}

export default ApartmentsList;