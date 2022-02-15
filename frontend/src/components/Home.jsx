import React from "react";
import  '../docs/styles/root.css';
import  '../docs/styles/drop.css';
import  '../docs/styles/button.css';
import  '../docs/styles/hero.css';
import  '../docs/styles/countdown.css';
import cover from '../docs/assets/cover.png';
import element from '../docs/assets/collectibles/element.png';
import tempCollectible from '../docs/assets/temp-digital-collectibles.jpg';
import CountDown from './CountDown';

export default function Home() {

    const newDrop = {id: '1', name: 'Collectible Name', img: element, date: "Feb 20, 2022 23:46:25"};

    return (
        <main>
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
                        <a className="button" href={"/explore"}>
                            <p>Explore</p>
                        </a>
                        <a className="button" href={"/profile"}>
                            <p>Profile</p>
                        </a>
                    </div>
                </div>
                <div className="outer">
                    <img alt="Digital Collectibles" className="drop" loading="lazy"
                         src={tempCollectible} width="680"/>
                </div>
            </div>
            <CountDown drop={newDrop}/>
            <div className="drop-header">
                <h1>Recent Drops</h1>
            </div>
            <p>*Carousel of past collectibles*</p>
        </main>
    );
}