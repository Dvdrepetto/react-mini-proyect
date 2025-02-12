import React from 'react'
import ApartmentSummary from '../components/ApartmentSummary';


function ApartmentsList(props) {
    
    return (
        
        <div className="apartment-list" >
            {props.apartmentArr.map((apartment) => {
                const price = apartment.price
                ? parseFloat(apartment.price.replace("$", ""))
                : 0;
                return(
                    <div key={apartment.id}>
                    <ApartmentSummary 
                    price={price}
                    apartmentDetails={apartment}
                    callBackToDelete={props.callBackToDelete}
                    />
                    </div>
                )
            })}
        </div>
    );
}

export default ApartmentsList;