import React, { Component } from 'react';
import './Page.css';
//import './Page.scss';

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
                   
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda excepturi, incidunt quae optio, accusamus, perferendis ducimus a fugiat molestias laboriosam provident odio architecto officia quos nesciunt. Eveniet nesciunt doloremque facilis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, doloremque. Quaerat, id minima assumenda ad qui possimus debitis harum, soluta quia ipsum, atque sed adipisci est accusantium cumque quasi! Assumenda.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, doloremque. Quaerat, id minima assumenda ad qui possimus debitis harum, soluta quia ipsum, atque sed adipisci est accusantium cumque quasi! Assumenda.</p>
                    
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
