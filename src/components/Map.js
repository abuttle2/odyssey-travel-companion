import React, { useState } from 'react';
import { GoogleMap, LoadScript, SearchBox, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Map() {
  const [searchBox, setSearchBox] = useState(null);
  const [places, setPlaces] = useState([]);

  const onLoad = (ref) => setSearchBox(ref);

  const onPlacesChanged = () => {
    setPlaces(searchBox.getPlaces());
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDm2wAUZtbatfRxowbpWSgRmMh_2Xq3iXY"
      libraries={["places"]}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <SearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <input
            type="text"
            placeholder="Search places"
            style={{
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
              position: 'absolute',
              left: '50%',
              marginLeft: '-120px',
              marginTop: '10px'
            }}
          />
        </SearchBox>
        {places.map(place => (
          <Marker
            key={place.place_id}
            position={place.geometry.location}
            title={place.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);
