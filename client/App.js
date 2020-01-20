import React from 'react';
import { renderRoutes } from 'react-router-config';
// import '../public/scss/main.scss';

const App = ({ route }) => {
  // console.log("BROWSER ENV", process.env.BROWSER);
  // console.log("SERVER ENV", process.env.SERVER);
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  loadData: () => console.log("loadData from App component")
  // loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};