import React from 'react';

function ProductDetails(props){
    return(
        <div className={(window.innerWidth > 414)? "w-75 m-auto d-flex my-3 gap-3" : "w-100 m-auto d-flex my-3 gap-3"}>
            <img className="product-details-img rounded" src={props.img} alt={props.name}/>
            <div className={(window.innerWidth > 414)? "bg-black p-5 h-25 rounded bg-gradient align-middle" : "bg-black p-2 h-25 rounded bg-gradient align-middle"}>
                <h3 className={(window.innerWidth > 414)? "" : "fs-4"}>{props.name}</h3>
                <h5 className="font-weight-light">{props.price}</h5>
                <button type="submit" className="btn btn-warning btn-lg mt-4 w-100">Buy</button>
            </div>
        </div>

    )
}

export default ProductDetails;