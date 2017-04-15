import React from 'react';
import './Synth.css';
import SynthNav from './SynthNav.js';

export default (props) =>(
        <div className="Synth-Container">
            <div className="Image-Container">
                <div className="Image">
                    <img src={props.image} alt=""/>
                </div>
            </div>
            <div className="TitleInfo">
                <div className="Name">
                    {props.brand} {props.name}
                </div>
                <div className="Date">
                    Date made {props.year}
                </div>
                
            </div>
            <div>
                <SynthNav />
            </div>
            <div className="Description">
                <p>{props.description}</p>
            </div>
        </div>
        );
