import React from 'react';
import Catalogue from '../common/catalogue';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Trending(){
    return(
        <Router>
        <div>
            <div className="d-flex text-center justify-content-center gap-5 my-3">
                <Link to="/"><h4 className="btn border-bottom">WOMEN</h4></Link>
                <Link to="/trending-men"><h4 className="btn border-bottom">MEN</h4></Link>
            </div>
            <Switch>
                <Route path="/trending-men">
                    <Catalogue genreprop="m" trendingprop= {true}/>
                </Route>
                <Route path="/">
                    <Catalogue genreprop="f" trendingprop= {true}/>
                </Route>
                
            </Switch>
        </div>
        </Router>
    )
}

export default Trending;