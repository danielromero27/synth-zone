import React, {Component}  from 'react';
import './SynthNav.css';

class SynthNav extends Component {

    constructor(props){
        super(props);
        this.playAudio = this.playAudio.bind(this);//http://sifidesign.com/audio/explosion.mp3
        this.state = {song:"http://www.sousound.com/music/healing/healing_01.mp3",playing:false, icon:"▶"};//
        this.mySound = new Audio(this.state.song);
    }
    
    playAudio(){
        if(!this.state.playing){
            this.setState({playing:true,icon:"⏸"});
            this.mySound.play();
            document.getElementById('play').innerHTML=this.state.icon;
        }
        else{
            this.setState({playing:false,icon:"▶"});
            this.mySound.pause();
            document.getElementById('play').innerHTML=this.state.icon;
        }
    }

    render() {
    return (
        <div className="Synth-Nav-Container">
            <button className="Synth-Nav-btn" id="play"onClick={this.playAudio}>{this.state.icon}</button>
            <button className="Synth-Nav-btn">ℹ</button>
            <button className="Synth-Nav-btn">➕</button>
        </div>
    )};
}

export default SynthNav;

/*import React  from 'react';
import './SynthNav.css';

export default (props) =>(
        <div className="Synth-Nav-Container">
            <button className="Synth-Nav-btn">▶</button>
            <button className="Synth-Nav-btn">ℹ</button>
            <button className="Synth-Nav-btn">➕</button>
        </div>
        );
 */