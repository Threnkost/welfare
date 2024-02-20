import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapComponent = ({ latitude, longitude }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: latitude ,
    lng: longitude ,
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyACEftMobPcWgylKiZ-LChnAewKIWvI0VQ"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
