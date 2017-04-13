import React from 'react';
import './Synth.css';

export default (props) =>(
        <div className="Synth-Container">
            <div className="Image">
                <img src={props.image} alt=""/>
            </div>
            <div className="TitleInfo">
                <div className="Name">
                    <h3>{props.brand} {props.name}</h3>
                </div>
                <div className="Date">
                    <h5> Date made</h5>
                    <h5> {props.year} </h5>
                </div>
            </div>
            <div className="Description">
                    <p>{props.description}</p>
            </div>
        </div>
        );
