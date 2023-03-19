import React from 'react';
import hotels from '../hotels.gif';
import foods from '../foods.gif';
import tours from '../tours.gif';


function About() {
    return (
        <div id="about-container" className="abt jumbotron ">
            <div className="col-sm-12 col-md-9 col-lg-9">
                <h2 className="display-4 abt3">About</h2>
                <p className="text-justify">Odyssey Travel Companion provides tourists with up-to-date information on popular attractions, events, restaurants, and accommodations in the area, so that they can make informed decisions about how to spend their time and money during their trip. Users are able to search for and view detailed information on each item including descriptions and photos.</p>
            </div>
            {/* <div className="col-sm-12 col-md-3 col-lg-3">  */}
            {/* <img className="my-image4" src={travel5} alt="travel5"/> */}
            <div className="image-container d-flex flex-wrap">
                <img className="my-image1" src={hotels} alt="hotels" />
                <img className="my-image2" src={foods} alt="foods" />
                <img className="my-image4" src={tours} alt="tours" />
            </div>  
          </div>             
    )
}
export default About;