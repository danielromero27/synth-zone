import React, { Component } from 'react';
import './Main.css';
import SynthList from '../SynthList/SynthList.js';
import SynthInfo from './SynthInfo.js';

//import './Page.scss';

const Brands = [{name: "All", key:0},{name:"Boss",key:"1"},{name:"Casio",key:"2"},{name:"Korg",key:"3"},{name:"Moog",key:"4"},{name:"Roland",key:"5"},{name:"Yamaha",key:"6"}];
const Roles = [{name: "All", key:0},{name:"Monophonic",key:"1"},{name:"Polyphonic",key:"2"},{name:"Drum Machine",key:"3"}];
const Prices = [{amount: "All", price:10000, key:0},{amount:"Less than $100", price:100,key:"1"},{amount:"Less than $300",price:300,key:"2"},{amount:"Less than $500",price:500,key:"3"},{amount:"Less than $1000", price:1000,key:"4"},{amount:"Less than $1500", price:1500,key:"5"}];


class Main extends Component {

    constructor(props){
        super(props);
        this.state = {AllSynths: SynthInfo, filteredSynths: SynthInfo};
        this.filterBrand = this.filterBrand.bind(this);
        this.filterRole = this.filterRole.bind(this);
        this.filterPrice = this.filterPrice.bind(this);
    }

    filterBrand(name){

        if(name=="All"){
            this.setState(state => ({filteredSynths: SynthInfo}));
        }
        else {
            this.setState(state => ({filteredSynths: SynthInfo.filter(s => s.brand == name)}));
        }

        
    }

    filterRole(role){

        if(name=="All"){
            this.setState(state => ({filteredSynths: SynthInfo}));
        }
        else {
            this.setState(state => ({filteredSynths: SynthInfo.filter(s => s.role == role)}));
        }
    }

    filterPrice(price){

        this.setState(state => ({filteredSynths: SynthInfo.filter(s => s.price <= price)}));
    }

  render() {
    return (
        <div>
            <div className="MainContainer">
                <div className="PlayZoneContainer">
                    <div className="PlayZone">
                         Synth Zone
                    </div>
                    <div className="Nav">
                     <div className="FilterNav">
                            <div className="dropdown">
                                <button className="dropbtn">Filter Brand</button>
                                <div className="dropdown-content">
                                    {Brands.map(B => <button className="drop" key={B.key} onClick={()=> this.filterBrand(B.name)} >{B.name}</button>)}
                                </div>
                            </div>
                            <div className="dropdown">
                                <button className="dropbtn">Filter Role</button>
                                <div className="dropdown-content">
                                    {Roles.map(R => <button className="drop" key={R.key} onClick={()=> this.filterRole(R.name)} >{R.name}</button>)}
                                </div>
                            </div>
                            <div className="dropdown">
                                <button className="dropbtn">Filter Price</button>
                                <div className="dropdown-content">
                                    {Prices.map(P => <button className="drop" key={P.key} onClick={()=> this.filterPrice(P.price)} >{P.amount}</button>)}
                                </div>
                            </div>
                    </div>
                    <div className="DropZone">
                        <button className="Playbtn dropbtn"><span className="arrow">▶</span></button>
                    </div>
                </div>
                </div>

            <div className="main">
                <div className="SynthContainer">    
                    <SynthList  data={this.state.filteredSynths}/>
                </div>
            </div>

            <footer className="footer">
                <div className="constrain">
                    <ul>

                    </ul>
                </div>
            </footer>

            </div>
        </div>
    );
  }
}

export default Main;
