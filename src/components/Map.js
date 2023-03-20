import React, { useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '600px'
};

function Map() {
  const [searchBox, setSearchBox] = useState(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  const onLoad = (autocomplete) => {
    setSearchBox(autocomplete);
  }

  const onPlaceChanged = () => {
    if (searchBox !== null) {
      const place = searchBox.getPlace();
      if (place.geometry) {
        setCenter({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        });
      }
    }
  }

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
        <Autocomplete
        onLoad={onLoad}
        onPlaceChanged={onPlaceChanged}
      >
        <input type="text" 
        placeholder="Enter location..."
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
          position: "absolute",
          left: "50%",
          marginLeft: "-120px"
        }} />
      </Autocomplete>
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
