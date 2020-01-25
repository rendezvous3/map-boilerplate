import React from "react";
import Map from "../components/Map";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import parkData from "../../data/skateboard-parks.js";

let data = parkData.features.map(obj=> {  
  return {
    ...obj.properties,
    ...obj.geometry
  }
 });
// console.log("DATA", data)

function Home(props) {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Header />
      <div className="sidebar">
        {data.map(f => {
          let { NAME, ADDRESS, DESCRIPTIO, NOTES } = f;
          return (
            <ListItem
              NAME={NAME}
              ADDRESS={ADDRESS}
              DESCRIPTIO={DESCRIPTIO}
              NOTES={NOTES}
            />
          );
        })}
      </div>
      <Map
        markers={data}
      />
    </div>
  );
}

export default {
  component: Home
};
