import React from 'react';

function Home(props){
  return(<div onClick={()=>console.log("clicked!!!")}>Home Page</div>)
}

export default {
  component: Home
}