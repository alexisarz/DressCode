import React from 'react';

function ProductDetails(props){
    return(
        <div className="w-75 m-auto d-flex my-5 gap-5">
            <img className="product-details-img rounded" src={props.img}/>
            <div className="bg-black p-5 h-50 rounded bg-gradient align-middle">
                <h3>{props.name}</h3>
                <h5>{props.price}</h5>
                <button type="submit" className="btn btn-warning btn-lg mt-5 w-100">Buy</button>
            </div>
        </div>

    )
}

export default ProductDetails;