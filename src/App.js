import React from 'react';


function Food ({fav}) {
  return(
    <div>
      <h1>I love {fav}</h1>
      
    </div>
  );
}

function App () {
  return(
    <div>
      <h1> Hello </h1>
    <Food fav="kimchi" / >
    <Food fav="ramen" / >
    <Food fav="potato soup" / >
    <Food fav="minari" / >
    <Food fav="kimchi" / >
    </div>
  );
}

export default App;