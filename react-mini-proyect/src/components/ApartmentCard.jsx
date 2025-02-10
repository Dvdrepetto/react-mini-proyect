import React from 'react'
import { Link, useParams } from 'react-router-dom';

function ApartmentCard(props) {

    const { apartmentId } = useParams();

    const apartment = props.apartmentArr.find(
        (apartmentObj) => apartmentObj.id === parseInt(apartmentId, 10)
    );

    console.log(apartment.id)

    return (

        <div>
            <div key={apartment.id} className="apartment-card">

                <img
                    src={apartment.picture_url}
                    alt={`Imagen de ${apartment.title}`}
                    className="apartment-image-card"
                />
                <h2 className="apartment-title">{apartment.name}</h2>
                <h3>
                    <strong>Price:</strong> {apartment.price} €
                </h3>
        
            <Link to="/"><button>Back</button></Link>
        
            </div>
        </div>
    )
}

export default ApartmentCard;
