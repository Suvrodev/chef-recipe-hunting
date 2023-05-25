import React from "react";
import { Container } from "react-bootstrap";
import { Map, Marker } from "pigeon-maps"

const GoogleMap = () => {
  return (
    <Container>
      <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Marker width={50} anchor={[50.879, 4.6997]} />
      </Map>
    </Container>
  );
};

export default GoogleMap;
