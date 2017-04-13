import React from 'react';
import './SynthList.css';
import Synth from '../Synth/Synth.js';

export default ({data = []}) =>(
    <div className="ListContainer">
        {
            data.map((synth) => (<Synth {...synth} />)) 
        }
         <div className="Synth-Container spacer"></div>
         <div className="Synth-Container spacer"></div>
    </div>
);