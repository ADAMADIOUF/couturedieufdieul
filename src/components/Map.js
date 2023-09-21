
import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  // Update the coordinates to center the map on Tivaoune Peulh Cite Safco
  const defaultProps = {
    center: {
      lat: 14.7322, // Replace with the actual latitude for Tivaoune Peulh Cite Safco
      lng: -17.3270, // Replace with the actual longitude for Tivaoune Peulh Cite Safco
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyCMri9Rl4JNWzf8DXwSCq2TfXbl_7kg1js', // Replace with your Google Maps API key
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={14.7322} // Replace with the actual latitude for Tivaoune Peulh Cite Safco
          lng={-17.327} // Replace with the actual longitude for Tivaoune Peulh Cite Safco
          text='Tivaoune Peulh Cite Safco' // Text for the marker
        />
      </GoogleMapReact>
    </div>
  )
}
