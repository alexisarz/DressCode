import React from 'react';
import { Link } from 'react-router-dom';

function ResponsiveNav(props){
    return(
        <div className={(props.display === true && window.innerWidth < 769) ? "position-absolute navbar navbar-dark bg-dark bg-gradient responsive-nav-show" :
                                                                              "position-absolute navbar navbar-dark bg-dark bg-gradient responsive-nav-hidden"}>
            <ul className="btn-group-vertical">
                <Link to="/DressCode"className=" active btn fw-bold" >
                    <li className=" active btn fw-bold">Home</li>
                </Link>
                <li className=" btn fw-bold">Women</li>
                <li className=" btn fw-bold">Men</li>
                <li className="btn fw-bold">Products</li>
                <li className="btn fw-bold">About</li>
            </ul>
        </div>
        
    )
}

export default ResponsiveNav;