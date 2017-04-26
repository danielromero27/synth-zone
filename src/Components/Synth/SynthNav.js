import React, {Component}  from 'react';
import './SynthNav.css';
import Modal from './Modal.js';

class SynthNav extends Component {

    constructor(props){
        super(props);
        this.playAudio = this.playAudio.bind(this);//http://sifidesign.com/audio/explosion.mp3
        this.toggleOpen = this.toggleOpen.bind(this);
        this.state = {song:"http://www.sousound.com/music/healing/healing_01.mp3",playing:false, icon:"▶", modalOpen: false};//
        this.mySound = new Audio(this.state.song);
    }
    
    toggleOpen(){
    this.setState((s) => ({
      modalOpen: !s.modalOpen
    }));
    }

    playAudio(){
        if(!this.state.playing){
            this.setState({playing:true,icon:"⏸"});
            this.mySound.play();
        }
        else{
            this.setState({playing:false,icon:"▶"});
            this.mySound.pause();
        }
    }

    render() {
    return (
        <div className="Synth-Nav-Container">
            <button className="Synth-Nav-btn" id="play"onClick={this.playAudio}>{this.state.icon}</button>
            <button onClick={this.toggleOpen} className="Synth-Nav-btn">ℹ</button>
            <button className="Synth-Nav-btn">➕</button>
            <Modal 
                visible={this.state.modalOpen}
                onToggle={this.toggleOpen}
                >
                <div className="Modal-Synth-Container">
            <div className="Modal-Image-Container Image-Container">
                <div className="Modal-Image">
                    <img src={this.props.image} alt=""/>
                </div>
            </div>
            <div className="Modal-TitleInfo TitleInfo">
                <div className="Modal-Name Name">
                    {this.props.brand} {this.props.name}
                </div>
                <div className="Modal-Date Date">
                    Date made {this.props.year} Price: ${this.props.price}
                </div>
                
            </div>
            <div className="Modal-Description">
                <p>{this.props.description}</p>
            </div>
        </div>
            
            
            </Modal>
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