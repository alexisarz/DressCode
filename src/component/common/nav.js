import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <div className="nav-container sticky-top">
            <nav className="navbar navbar-expand navbar-dark bg-dark bg-gradient sticky-top">
                <div className="container-fluid w-75">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/" style={{ textDecoration: 'none' }}><li className="nav-item nav-link active btn fw-bold">Home</li></Link>
                            <li className="nav-item nav-link btn fw-bold">Women</li>
                            <li className="nav-item nav-link btn fw-bold">Men</li>
                            <li className="nav-item nav-link btn fw-bold">Products</li>
                            <li className="nav-item nav-link btn fw-bold">About</li>
                            

                        </ul>
                        <form className="d-flex">
                            <input className="form-control form-control-sm me-sm-2 shadow-none " type="text" placeholder="Search" />
                            <button className="btn btn-secondary p-1 me-sm-2" type="submit">Search</button>
                        </form>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Nav; 