import React from 'react'
import "./ApartmentsList.css";

function ApartmentCard(props) {


    return (
        <div>
            <div key={props.apartmentDetails.id} className="apartment-card">
                <img
                    src={props.apartmentDetails.picture_url}
                    alt={`Imagen de ${props.apartmentDetails.title}`}
                    className="apartment-image"
                />
                <h2 className="apartment-title">{props.apartmentDetails.title}</h2>
                <h3>
                    <strong>Price:</strong> {props.apartmentDetails.price} €
                </h3>
                <div className="labels">
                    {props.apartmentDetails.price < 100 && (
                        <span className="label affordable">💵 Affordable</span>
                    )}
                    {props.apartmentDetails.price >= 100 && (
                        <span className="label premium">💎 Premium</span>
                    )}
                    {props.apartmentDetails.instant_bookable && (
                        <span className="label confirmation">✅ Instant Confirmation</span>
                    )}
                    <button
                        className="delete-button"
                        onClick={() => {props.callBackToDelete(props.apartmentDetails.id)}}
                    >
                        Delete
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default ApartmentCard;
