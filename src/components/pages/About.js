import React from 'react';
import hotels from '../hotels.gif';
import foods from '../foods.gif';
import tours from '../tours.gif';


function About() {
    return (
        <div id="about-container" className="abt jumbotron ">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <h3 className="display-4 abt3">About</h3>
                <p className="text-justify abt5">Odyssey Travel Companion provides tourists with up-to-date information on popular attractions, events, restaurants, and accommodations in the area, so that they can make informed decisions about how to spend their time and money during their trip. Users are able to search for and view detailed information on each item including descriptions and photos.</p>

                <p className="text-justify abt5">Enter your city of choice below to search for nearby popular attractions, restaurants and accommodations:</p>
            </div>
            <div className="container">

                <div className="row">
                    <div className="col-sm-4 col-md-4 text-center">
                        <h3 className="display-4 abt6">Accomodations</h3>
                    </div>
                    <div className="col-sm-4 col-md-4 text-center">
                        <h3 className="display-4 abt7">Restaurants</h3>
                    </div>
                    <div className="col-sm-4 col-md-4 text-center">
                        <h3 className="display-4 abt8">Attractions</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4 col-md-4 text-center">

                        <img className="my-image1" src={hotels} alt="hotels" />
                    </div>
                    <div className="col-sm-4 col-md-4 text-center">

                        <img className="my-image2" src={foods} alt="foods" />
                    </div>
                    <div className="col-sm-4 col-md-4 text-center">

                        <img className="my-image4" src={tours} alt="tours" />
                    </div>
                </div>
                
                <div className="row justify-content-center my-form">
                    <div className="col-sm-4 col-md-4 form1">
                        <form>
                            <div className="form-group">
                                <label htmlFor="cityInput">Enter city name:</label>
                                <input type="text" className="form-control col-6" id="cityInput" placeholder="City name" />
                            </div>
                            <button type="submit" className="btn btn-primary" id="submitBtn">Submit</button>
                        </form>
                    </div>

                    <div className="col-sm-4 col-md-4 form2">
                        <form>
                            <div className="form-group">
                                <label htmlFor="cityInput">Enter city name:</label>
                                <input type="text" className="form-control col-6" id="cityInput" placeholder="City name" />
                            </div>
                            <button type="submit" className="btn btn-primary" id="submitBtn">Submit</button>
                        </form>
                    </div>

                    <div className="col-sm-4 col-md-4 form3">
                        <form>
                            <div className="form-group">
                                <label htmlFor="cityInput">Enter city name:</label>
                                <input type="text" className="form-control col-6" id="cityInput" placeholder="City name" />
                            </div>
                            <button type="submit" className="btn btn-primary" id="submitBtn">Submit</button>
                        </form>
                    </div>
                 </div>
            </div>
          </div> 
          
    )
}
export default About;