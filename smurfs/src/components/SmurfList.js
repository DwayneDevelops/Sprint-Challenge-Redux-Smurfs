import React from 'react'


const SmurfList = (props) => {
    console.log(props)
  return (
    <div className="smurf-list">
      { props.smurfs && props.smurfs.map(smurf => (
        <div id={smurf.id} key={smurf.id}>
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            <button onClick={(event,id=smurf.id) => props.delete(event,id)} >Delete</button>
        </div>
      ))}
    </div>
  );
}

export default SmurfList;
