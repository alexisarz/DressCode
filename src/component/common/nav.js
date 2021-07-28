import React, {useState} from 'react';
import ResponsiveNav from './responsiveNav';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Nav(){

    const [resMenu,setResMenu] = useState(false)

    return(
        <div className="nav-container sticky-top">
            <nav className="navbar navbar-expand navbar-dark bg-dark bg-gradient sticky-top">
                <div className="container-fluid w-100">
                    <div className="collapse navbar-collapse justify-content-between">
                        <FontAwesomeIcon
                                onClick={() => setResMenu(!resMenu)} 
                                icon={faBars} 
                                className={(window.innerWidth > 768)? "d-none" : "text-white fs-4"}
                        />
                        <ul className={(window.innerWidth > 768)? "navbar-nav me-auto mb-2 mb-lg-0" : "d-none"}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <li className="nav-item nav-link active btn fw-bold">Home</li>
                            </Link>
                            <li className="nav-item nav-link btn fw-bold">Women</li>
                            <li className="nav-item nav-link btn fw-bold">Men</li>
                            <li className="nav-item nav-link btn fw-bold">Products</li>
                            <li className="nav-item nav-link btn fw-bold">About</li>
                            

                        </ul>
                        <form className={(window.innerWidth > 414)? "d-flex justify-content-end" : "d-flex justify-content-end w-50"}>
                            <input className="form-control form-control-sm me-sm-2 shadow-none " type="text" placeholder="Search" />
                            <button className="btn btn-secondary py-0 px-1 btn-sm me-sm-2" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <ResponsiveNav display={resMenu}/>
        </div>
    )
}

export default Nav; 