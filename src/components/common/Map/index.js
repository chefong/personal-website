import { useState, useMemo } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import Pin from './pin';

const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = ({ coordinates }) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7851,
    longitude: -122.4387,
    zoom: 12,
  });

  const markers = useMemo(() => coordinates.map(
    ({ latitude, longitude, hovered }) => (
      <Marker longitude={longitude} latitude={latitude}>
        <Pin size={hovered ? 30 : 20} />
      </Marker>
    ),
  ), [coordinates]);

  return (
    <section>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100vh"
        mapStyle="mapbox://styles/ericong18/ckt8vnfqz0s7917rzryp74qqh"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken={accessToken}
      >
        {markers}
      </ReactMapGL>
    </section>
  );
};

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.object),
};

Map.defaultProps = {
  coordinates: [],
};

export default Map;
