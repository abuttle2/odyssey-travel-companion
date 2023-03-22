import React from 'react';
import odyssey from '../odyssey.gif';
import travel5 from '../travel5.gif';
import travel1 from '../travel1.gif';
import travel6 from '../travel6.gif';
import appstore from '../app-store-badge.png';
import googleplay from '../google-play-badge.png';


function Home() {
  return (
    <div className="inage-container jumbotron text-center">
      <div className="image-container">
        <img className="my-image6" src={travel6} alt="travel6" />
        <div className="text-container">
          <h1 className="display-4">
            Odyssey: Your Ultimate Travel Guide 
          </h1>
          <h2 className="lead">
          For the latest updates on tourist attractions, events, restaurants and accommodation planning, choose our amazing resource.
          </h2>
        </div>
      </div>
      <div className="image-container d-flex flex-wrap">
        <img className="my-image" src={travel1} alt="travel1" />
        <img className="my-image3" src={odyssey} alt="odyssey" />
        <img className="my-image5" src={travel5} alt="travel5" />
      </div> 
      {/* <div className="row">
                    <div className="col-sm-4 col-md-4 text-center">

                        <img className="my-image" src={travel1} alt="travel1" />
                    </div>
                    <div className="col-sm-4 col-md-4 text-center">

                        <img className="my-image3" src={odyssey} alt="odyssey" />
                    </div>
                    <div className="col-sm-4 col-md-4 text-center">

                        <img className="my-image5" src={travel5} alt="travel5" />
                    </div>
                </div>  */}
      <div className="col-sm-12 col-md-12 col-lg-12 text-center download">
        <h2 className="section-heading abt4">
        Check out our About page to uncover a world of excitement! 
        </h2>
        <p className="wkfun1">
        You can also access our app on any mobile device, so start by downloading it today!
        </p>
        <div className="badges">
            <a className="badge-link" href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img className="my-image7" src={googleplay} alt="google play icon" />
            </a>
            <a className="badge-link" href="https://www.apple.com/uk/app-store" target="_blank" rel="noopener noreferrer">
            <img className="my-image8" src={appstore} alt="app store icon" />
            </a>
        </div>
      </div>
           
    </div>
  );
}

export default Home;