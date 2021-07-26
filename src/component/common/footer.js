import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <div className="navbar navbar-expand navbar-dark bg-dark bg-gradient px-5">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
                <li className="btn btn-secondary btn-lg fs-5">
                    <FontAwesomeIcon icon={faFacebookSquare}/>
                </li>
                <li className="btn btn-secondary btn-lg fs-5">
                    <FontAwesomeIcon icon={faInstagram}/>
                </li>
                <li className="btn btn-secondary btn-lg fs-5">
                    <FontAwesomeIcon icon={faTwitterSquare}/>
                </li>
            </ul>
            <p>by alexisarz</p>
        </div>
    )
}


export default Footer;