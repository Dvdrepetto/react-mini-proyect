import React from 'react'
import apartmentArr from "../Data/Apartments.json"
import {useState} from "react"

function Details() {
    const [apptlisting, setAppartment] = useState(apartmentArr);

    return (
        <div>
            <h3>Total number of listings: {apptlisting.length}</h3>
            <div className="AppartmentListing-Border">
                {apptlisting.map((Appt) => {
                    return (
                        <div key={Appt.id}>
                            <img
                    src={Appt.picture_url}
                    alt={`Imagen de ${Appt.title}`}
                    className="apartment-image-card"
                />
                            <p className="wrap-text">
                                {Appt.name} <br />
                                {Appt.price} <br />
                                {Appt.host_location} <br />
                                minimum_nights: {Appt.minimum_nights}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Details;