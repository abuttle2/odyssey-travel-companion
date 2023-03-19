import React from 'react';
import hotels from '../hotels.gif';
import foods from '../foods.gif';
import tours from '../tours.gif';


function About() {
    return (
        <div id="about-container" className="abt jumbotron ">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <h2 className="display-4 abt3">About</h2>
                <p className="text-justify abt5">Odyssey Travel Companion provides tourists with up-to-date information on popular attractions, events, restaurants, and accommodations in the area, so that they can make informed decisions about how to spend their time and money during their trip. Users are able to search for and view detailed information on each item including descriptions and photos.</p>
                {/* <br></br> */}

                <p className="text-justify abt5">Enter your city of choice below to search for nearby popular attractions, restaurants and accommodation:</p>
            </div>

            <div className="row">
                <div className="col-sm-4 text-center">
                    <h3 className="display-4 abt6">Accomodation</h3>
                </div>
                <div className="col-sm-4 text-center">
                    <h3 className="display-4 abt6">Restaurants</h3>
                </div>
                <div className="col-sm-4 text-center">
                    <h3 className="display-4 abt6">Attractions</h3>
                </div>
            </div>

            <div className="image-container d-flex flex-wrap">
                <img className="my-image1" src={hotels} alt="hotels" />
                <img className="my-image2" src={foods} alt="foods" />
                <img className="my-image4" src={tours} alt="tours" />
            </div>
            <div className="row d-flex justify-content-center my-form">
                <div className="col-4">
                    <form>
                        <div className="form-group">
                            <label htmlFor="cityInput">Enter city name:</label>
                            <input type="text" className="form-control" id="cityInput" placeholder="City name" />
                        </div>
                        <button type="submit" className="btn btn-primary" id="submitBtn">Submit</button>
                    </form>
                </div>
                <div className="col-4">
                    <form>
                        <div className="form-group">
                            <label htmlFor="cityInput">Enter city name:</label>
                            <input type="text" className="form-control" id="cityInput" placeholder="City name" />
                        </div>
                        <button type="submit" className="btn btn-primary" id="submitBtn">Submit</button>
                    </form>
                </div>
                <div className="col-4">
                    <form>
                        <div className="form-group">
                            <label htmlFor="cityInput">Enter city name:</label>
                            <input type="text" className="form-control" id="cityInput" placeholder="City name" />
                        </div>
                        <button type="submit" className="btn btn-primary" id="submitBtn">Submit</button>
                    </form>
                </div>
        
            </div>
          </div> 
          
          
    )
}
export default About;