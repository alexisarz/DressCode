import React from 'react';
import './App.css';
import Logo from './component/common/headerLogo';
import Nav from './component/common/nav';
import HomeScreen from './component/homeScreen'
import ProductScreen from './component/productScreen';
import Footer from './component/common/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Logo/>
        <div className="sticky-top">
          <Nav/>
        </div>
        <Switch>
          <Route exact path="/DressCode">
            <HomeScreen/>
          </Route>
          <Route exact path="/DressCode/#/product/#/:_id">
            <ProductScreen/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
