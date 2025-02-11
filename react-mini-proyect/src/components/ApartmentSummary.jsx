import React from 'react'
import { Link } from 'react-router-dom'

const ApartmentSummary = (props) => {
    return (
        <div >
            <div key={props.apartmentDetails.id} className="apartment-card">
                <img
                    src={props.apartmentDetails.picture_url}
                    alt={`Imagen de ${props.apartmentDetails.name}`}
                    className="apartment-image"
                />
                <h2 className="apartment-title">{props.apartmentDetails.name}</h2>
                <h3>
                    <strong>Price:</strong> {props.price} €
                </h3>
                <div className="labels">
                    {props.price < 100 && (
                        <span className="label affordable">💵 Affordable</span>
                    )}
                    {props.price >= 100 && (
                        <span className="label premium">💎 Premium</span>
                    )}
                    {props.apartmentDetails.instant_bookable && (
                        <span className="label confirmation">✅ Instant Confirmation</span>
                    )}
                    <button
                        className="delete-button"
                        onClick={() => { props.callBackToDelete(props.apartmentDetails.id) }}
                    >
                        Delete
                    </button>
                        <Link to={`/ApartmentsCard/${props.apartmentDetails.id}`}><button>More Details</button></Link>
                    
                </div>

            </div>
        </div>
    )
}

export default ApartmentSummary
