import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps, withStateHandlers } from "recompose";

const GOOGLE_MAP_KEY = "AIzaSyChkdWyYsS3XXiY83c_U_1ATu8De1KzUuM";

// function MapInit(props) {
//   // let {markers} = props;
//   return (
//     <GoogleMap
//       defaultZoom={12}
//       defaultCenter={{ lat: 45.420420, lng: -75.692430 }} >
//     </GoogleMap>
//   );
// }

// const Map = withScriptjs(withGoogleMap(MapInit))

const Map = compose(
  withProps({
    loadingElement: <div style={{ height: "100%" }}></div>,
    containerElement: <div style={{ height: "100%" }}></div>,
    mapElement: <div style={{ height: "100%" }}></div>,
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_MAP_KEY}`
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  let { markers } = props;
  // console.log("MARKERS", markers)
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 45.42042, lng: -75.69243 }}
    >
      {markers &&
        markers.map(m => {
          const lat = m.coordinates[1];
          const lng = m.coordinates[0];
          return <Marker key={m.PARK_ID} position={{ lat, lng }} />;
        })}
    </GoogleMap>
  );
});

export default Map;
