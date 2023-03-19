import React from 'react';
import odyssey from '../odyssey.gif';
import travel5 from '../travel5.gif';
import travel1 from '../travel1.gif';
import travel6 from '../travel6.gif';
import appstore from '../app-store-badge.png';
import googleplay from '../google-play-badge.png';


function Home() {
  return (
    <div className="jumbotron text-center">
      <div className="image-container">
        <img className="my-image6" src={travel6} alt="travel6" />
        <div className="text-container">
          <h1 className="display-4">
            Odyssey: Your Ultimate Guide Travel Companion 
          </h1>
          <h2 className="lead">
            The fabulous choice for up-to-date information on all tourist attractions, events, restaurants and accommodation planning.
          </h2>
        </div>
      </div>
      <div className="image-container d-flex flex-wrap">
        <img className="my-image" src={travel1} alt="travel1" />
        <img className="my-image3" src={odyssey} alt="odyssey" />
        <img className="my-image5" src={travel5} alt="travel5" />
      </div>  
      <div className="col-sm-12 col-md-12 col-lg-12 text-center download">
        <h2 className="section-heading abt4">
            Visit our About page and discover what all the buzz is about!
        </h2>
        <p className="wkfun1">
            Our app is also available on any mobile device! Download now to get started!
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