import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactUs from'./components/ContactUs';
import Emergency from'./components/Emergency';
import AboutUs from'./components/AboutUs';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="page-element">
        <div style={{flex: "1"}}>
            <Router>
                <Header/>
                <Switch>
                        <Route path="/" exact component = {Home} />
                        <Route path="/contact-us" exact component = {ContactUs} />
                        <Route path="/emergency" exact component = {Emergency} />
                        <Route path="/about-us" exact component = {AboutUs} />

                </Switch>
            </Router>
        </div>
      <Footer/>
    </div>
  );
}

export default App;