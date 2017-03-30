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
                <h1>LOGO</h1>

                <nav className="navigation">
                    <a className="nav-toggle" href="#">
                    <span className="trigger">&#9776;</span>
                    <ul>
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>Prices</li>
                        <li>Cart</li>
                    </ul>
                    </a>

                </nav>
                </div>
            </header>

            <section className="main">
                <div className="constrain">
                <article className="primary">
                    <h1>Article Title</h1>
                    <img src="http://lorempixel.com/400/200/" alt="" className="hero"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda excepturi, incidunt quae optio, accusamus, perferendis ducimus a fugiat molestias laboriosam provident odio architecto officia quos nesciunt. Eveniet nesciunt doloremque facilis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, doloremque. Quaerat, id minima assumenda ad qui possimus debitis harum, soluta quia ipsum, atque sed adipisci est accusantium cumque quasi! Assumenda.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, doloremque. Quaerat, id minima assumenda ad qui possimus debitis harum, soluta quia ipsum, atque sed adipisci est accusantium cumque quasi! Assumenda.</p>
                </article>
                <aside className="secondary"></aside>
                </div>
            </section>

            <footer className="footer">
                <div className="constrain">
                <p>Copyright 2017</p>
                <p>Legal Stuff</p>
                <p>Careers</p>
                </div>
            </footer>

            </div>
        </div>
    );
  }
}

export default Page;
