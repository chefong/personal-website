import { useState, useMemo } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import Pin from './pin';

const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = ({ coordinates }) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7722,
    longitude: -122.4441,
    zoom: 12,
  });

  const getPinProps = (hovered) => ({
    size: hovered ? 30 : 20,
    fill: hovered ? 'highlighted' : 'default',
  });

  const markers = useMemo(() => coordinates.map(
    ({ latitude, longitude, hovered }) => (
      <Marker longitude={longitude} latitude={latitude}>
        <Pin {...getPinProps(hovered)} />
      </Marker>
    ),
  ), [coordinates]);

  return (
    <ReactMapGL
      height="100vh"
      width="100%"
      {...viewport}
      mapStyle="mapbox://styles/ericong18/ckt8vnfqz0s7917rzryp74qqh"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={accessToken}
    >
      {markers}
    </ReactMapGL>
  );
};

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.object),
};

Map.defaultProps = {
  coordinates: [],
};

export default Map;
