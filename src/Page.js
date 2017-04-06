import React, { Component } from 'react';
import './Page.css';
import SynthList from './SynthList.js';
//import './Page.scss';

const SynthInfo = [
   { brand: "Korg",
    name: "Delta",
    image: "http://www.vintagesynth.com/korg/delta.jpg",
    year: "1979 - 1984",
    description: "Korg's Delta is an analog semi-poly synth/string machine, basically a slimmed down version of the Korg Trident. Though limited in the range of sounds compared with other synths of the same genre, the sheer quality of the sound from this little beastie really does make it something of a marvel. It can be found used for cheap and is worth it for the retro synth strings and fat bass synth tones.",
    ownership: true},
    {    brand: "Korg",
    name: "Delta",
    image: "http://www.vintagesynth.com/korg/delta.jpg",
    year: "1979 - 1984",
    description: "Korg's Delta is an analog semi-poly synth/string machine, basically a slimmed down version of the Korg Trident. Though limited in the range of sounds compared with other synths of the same genre, the sheer quality of the sound from this little beastie really does make it something of a marvel. It can be found used for cheap and is worth it for the retro synth strings and fat bass synth tones.",
    ownership: true}
];

class Page extends Component {
  render() {
    return (
        <div>
            <div className="container">
                
            <header className="header">
                <div className="constrain">
                <img src="https://cdn2.iconfinder.com/data/icons/the-mix-of-electronic-things/64/electro_synthesizer-128.png" alt=""/>    

                <nav className="navigation">
                    <a className="nav-toggle" href="#">
                    <span className="trigger">&#9776;</span>
                    <ul>
                        <li>Home</li>
                        <li>Current Synths</li>
                        <li>Wish List</li>
                        <li>About</li>
                    </ul>
                    </a>

                </nav>
                </div>
            </header>

            <section className="main">
                <div className="constrain">
                <article className="primary">
                    <img src="http://3.bp.blogspot.com/-uW31Zv-iQuE/UC3dTGb7M-I/AAAAAAAFDzM/-LUpLVGxKzM/s1600/Mantle%2BKorg%2BMagnasonic.jpg" alt="" className="hero"/>
                      
                    <SynthList  data={SynthInfo}/>
                  
                    
                </article>
                <aside className="secondary"></aside>
                </div>
            </section>

            <footer className="footer">
                <div className="constrain">
                    <ul>
                        <li>Copyright 2017</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </footer>

            </div>
        </div>
    );
  }
}

export default Page;
