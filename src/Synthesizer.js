import React from 'react';


export default (props) =>(
        <div className="Container">
            <img src="http://www.vintagesynth.com/korg/delta.jpg" alt=""/>
            <h3>{props.brand} {props.name}</h3>
            <h5> Date produced {props.year} </h5>
            <p>{props.description}</p>
        </div>
        );
