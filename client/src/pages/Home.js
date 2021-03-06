import React from "react";
import HomeListings from '../components/HomeListings';
const homeImage = require('../images/clem-onojeghuo-pTeZKi29EYE-unsplash.jpg');

const Home =()=>{
    
    return(
        <>
            <div>
                <p className="intro-text">
                    Hello and Welcome to Home Bazaar! 
                    A place where anyone can turn their household goods into marketable items.      
                </p>
                <img src={homeImage} className='homeImage' alt="clem onojeghuo on unsplash"/>
            </div>
            <div className="sales-homepage">
                <h1 className="sales-header">Sales Going On</h1>
                <HomeListings/>
            </div>
        </>
    )
}

export default Home;