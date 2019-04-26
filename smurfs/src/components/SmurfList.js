import React from 'react'

const SmurfList = (props) => {
  return (
    <div className="smurf-list">
      { props.smurfs.map (smurf => (
        <div id={smurf.id} key={smurf.id}>
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            <button>Some Button</button>
        </div>
      ))}
    </div>
  );
}

export default SmurfList;
