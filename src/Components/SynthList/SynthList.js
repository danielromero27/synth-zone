import React from 'react';
import './SynthList.css';
import Synth from '../Synth/Synth.js';

export default ({data = []}) =>(
    <div className="ListContainer">
        {
            data.map((synth) => (<Synth {...synth} />)) 
        }
         <div className="spacer"></div>
         <div className="spacer"></div>
         <div className="spacer"></div>
    </div>
);