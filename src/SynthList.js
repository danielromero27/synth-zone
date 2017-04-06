import React from 'react';
import Synth from './Synthesizer.js';

export default ({data = []}) =>(
    <div>
        {
            data.map((synth) => (<Synth {...synth} /> ))
        }
    </div>
);