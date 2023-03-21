import React, { useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker, InfoWindow } from '@react-google-maps/api';
import debounce from 'lodash.debounce';

const containerStyle = {
  width: '800px',
  height: '600px'
};

const searchStyle = {
  boxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  padding: `0 12px`,
  borderRadius: `3px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
  position: "absolute",
  left: "50%",
  marginLeft: "-120px"
};

const libraries = ["places"];

class LoadScriptOnlyIfNeeded extends LoadScript {
  componentDidMount() {
    const cleaningUp = true
    const isBrowser = typeof document !== "undefined" // require('@react-google-maps/api/src/utils/isbrowser')
    const isAlreadyLoaded = window.google && window.google.maps && document.querySelector('body.first-hit-completed') // AJAX page loading system is adding this class the first time the app is loaded
    if (!isAlreadyLoaded && isBrowser) {
      // @ts-ignore
      if (window.google && !cleaningUp) {
        console.error("google api is already presented")
        return
      }

      this.isCleaningUp().then(this.injectScript)
    }

    if (isAlreadyLoaded) {
      this.setState({ loaded: true })
    }
  }
}

function Map() {
  const [searchBox, setSearchBox] = useState(null);
  const [center, setCenter] = useState({ lat: 54.3781, lng: -2.2137 });
  const [zoom, setZoom] = useState(6);
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const onLoad = (autocomplete) => {
    setSearchBox(autocomplete);
  }

  const onPlaceChanged = debounce(() => {
    if (searchBox !== null) {
      const place = searchBox.getPlace();
      if (place.geometry) {
        setCenter({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
        setZoom(15);

        const service = new window.google.maps.places.PlacesService(document.createElement('div'));

        service.nearbySearch({
          location: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          },
          radius: 1000, // 1 kilometer
          type: ['restaurant', 'lodging', 'tourist_attraction']
        }, (results, status) => {
          if (status === 'OK') {
            setPlaces(results);
          }
        });
      }
    }
  }, 500);

  const handleMarkerClick = (marker) => {
    setSelectedPlace(marker);
  }

  const handleCloseClick = () => {
    setSelectedPlace(null);
  }

  return (
    <LoadScriptOnlyIfNeeded
      googleMapsApiKey="AIzaSyDm2wAUZtbatfRxowbpWSgRmMh_2Xq3iXY"
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            placeholder="Enter location..."
            style={searchStyle}
          />
        </Autocomplete>
        {places.map(place => (
          <Marker
            key={place.place_id}
            position={{
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            }}
            onClick={() => handleMarkerClick(place)}
          />
        ))}
        {selectedPlace && (
          <InfoWindow
            position={{
              lat: selectedPlace.geometry.location.lat(),
              lng: selectedPlace.geometry.location.lng(),
            }}
            onCloseClick={handleCloseClick}
          >
            <div>
              <h2>{selectedPlace.name}</h2>
              <p>{selectedPlace.formatted_address}</p>
              {selectedPlace.photos && (
                <img
                  src={selectedPlace.photos[0].getUrl()}
                  alt={selectedPlace.name}
                  style={{ maxWidth: '50%' }}
                />
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScriptOnlyIfNeeded>
  );
}

export default React.memo(Map);