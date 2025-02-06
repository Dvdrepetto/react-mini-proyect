import React from 'react'
import ApartmentCard from '../pages/ApartmentCard';
import "./ApartmentsList.css";

function ApartmentsList(props) {

    return (
        
        <div className="apartment-list">
            {props.apartmentArr.map((apartment) => {
                const price = apartment.price
                ? parseFloat(apartment.price.replace("$", ""))
                : 0;
                return(
                    <ApartmentCard 
                    key={apartment.id}
                    apartmentDetails={apartment}
                    callBackToDelete={props.callBackToDelete}
                    />
                )
            })}
        </div>
    );
}

export default ApartmentsList;