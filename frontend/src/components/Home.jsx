import React from "react";
import  '../docs/styles/root.css';
import  '../docs/styles/drop.css';
import  '../docs/styles/button.css';
import  '../docs/styles/hero.css';
import  '../docs/styles/countdown.css';
import cover from '../docs/assets/cover.png';
import element from '../docs/assets/collectibles/element.png';
import tempCollectible from '../docs/assets/temp-digital-collectibles.jpg';


export default function Home() {
    return (
        <main>
            <script src="scripts/countdown.js" type="text/javascript"></script>

            <div className="home-header">
                <img alt="cover" className="cover" src={cover}/>
            </div>

            <div className="outer" id="wrapper">
                <div className="outer" id="hero-details">
                    <h1 className="">Discover, collect, and share your digital collectibles</h1>
                    <p className="">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                        world’s
                        most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid
                        system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="button-container">
                        <a className="button" href="explore.html">
                            <p>Explore</p>
                        </a>
                        <a className="button" href="profile.html">
                            <p>Profile</p>
                        </a>
                    </div>
                </div>
                <div className="outer">
                    <img alt="Digital Collectibles" className="drop" loading="lazy"
                         src={tempCollectible} width="680"/>
                </div>
            </div>

            <div className="drop-header">
                <h1>Upcoming Drop</h1>
            </div>
            <div className="container-countdown">
                <div>
                    <a href="drop.html"> <img alt="Collectible Name" className="drop"
                                              src={element}/></a>
                </div>
                <h2>Collectible Name</h2>
                <h1>Drops In</h1>
                <div id="countdown">
                    <ul>
                        <li><span id="days"> </span>days</li>
                        <li><span id="hours"> </span>Hours</li>
                        <li><span id="minutes"> </span>Minutes</li>
                        <li><span id="seconds"> </span>Seconds</li>
                    </ul>
                </div>
            </div>
            <div className="drop-header">
                <h1>Recent Drops</h1>
            </div>
            <p>*Carousel of past collectibles*</p>
        </main>
    );
}