import React, {useEffect, useState} from "react";
import '../docs/styles/root.css';
import '../docs/styles/button.css';
import '../docs/styles/hero.css';
import '../docs/styles/countdown.css';
import 'normalize.css';
import '../docs/styles/carousel.css';
import cover from '../docs/assets/cover.png';
import tempCollectible from '../docs/assets/temp-digital-collectibles.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountDown from './CountDown';
import {get} from "./http";

export default function Home() {

    const [upcomingDrop, setUpcomingDrop] = React.useState({
        dropID: 0,
        name: '',
        asset: '',
        dropDate: Date(),
        rarity: "Common"
    })

    const [pastDrops, setPastDrops] = useState({drop1: 1, drop2: 1, drop3: 1})

    const dropsChecked = [true, false, false]

    useEffect(() => {
        get('upcoming-drop').then(res => {
            setUpcomingDrop({
                dropID: res[0].dropID,
                name: res[0].name,
                asset: require(`../docs/assets/collectibles/robot-nft-temp/robot (${parseInt(res[0].dropID)}).gif`),
                dropDate: res[0].dropDate,
                rarity: res[0].rarity
            })
            if (res[0].dropID <= 3) {
                console.log("Cannot render past drops")
            } else {
                get('drops').then(res2 => {
                    setPastDrops({
                        drop1: res2[res[0].dropID - 4].dropID,
                        drop2: res2[res[0].dropID - 3].dropID,
                        drop3: res2[res[0].dropID - 2].dropID
                    })
                }).catch(e => {
                    console.log(e)
                })
            }
        }).catch(e => {
            console.log(e)
        })
    }, []);

    function handleClick(num) {
        if (dropsChecked[num - 1] === true) {
            //TODO opens another tab
            switch (num){
                case 1:
                    console.log(pastDrops.drop1)
                    window.open(`/drop/${pastDrops.drop1}`);
                    break;
                case 2:
                    window.open(`/drop/${pastDrops.drop2}`);
                    break;
                case 3:
                    window.open(`/drop/${pastDrops.drop3}`);
                    break;
            }

        } else {
            dropsChecked.fill(false)
            dropsChecked[num - 1] = true
        }
    }

    return (
        <main>
            <div className="home-header">
                <img alt="cover" className="cover" src={cover}/>
            </div>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img alt="Digital Collectibles" className="d-block mx-lg-auto img-fluid drop" height="510"
                             loading="lazy"
                             src={tempCollectible} width="680"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Discover, collect, and share your digital
                            collectibles</h1>
                        <p className="lead font-sans">Quickly design and customize responsive mobile-first sites with
                            Bootstrap,
                            the world’s
                            most popular front-end open source toolkit, featuring Sass variables and mixins, responsive
                            grid
                            system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href={"/explore"}>
                                <button className="btn btn-primary btn-lg px-4 me-md-2" type="button">Explore</button>
                            </a>
                            <a href={"/profile"}>
                                <button className="btn btn-outline-secondary btn-lg px-4" type="button">Profile</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <CountDown drop={upcomingDrop} headline={"Upcoming Drop"}/>

            <div className="drop-header">
                <h1>Recent Drops</h1>
            </div>
            <div className="carousel-container">
                <div className="carousel-collectibles">
                    <input defaultChecked="item-1" id="item-1" name="slider" type="radio"
                           onClick={(() => handleClick(1))}/>
                    <input id="item-2" name="slider" type="radio" onClick={(() => handleClick(2))}/>
                    <input id="item-3" name="slider" type="radio" onClick={(() => handleClick(3))}/>
                    <div className="cards-collectibles">
                        <label className="card-collectible" htmlFor="item-1" id="drop-1">
                            <img
                                alt="Collectible 1"
                                src={require(`../docs/assets/collectibles/robot-nft-temp/robot (${parseInt(pastDrops.drop1)}).gif`)}
                            />
                        </label>
                        <label className="card-collectible" htmlFor="item-2" id="drop-2">
                            <img
                                alt="Collectible 2"
                                src={require(`../docs/assets/collectibles/robot-nft-temp/robot (${parseInt(pastDrops.drop2)}).gif`)}
                            />
                        </label>
                        <label className="card-collectible" htmlFor="item-3" id="drop-3">
                            <img
                                alt="Collectible 3"
                                src={require(`../docs/assets/collectibles/robot-nft-temp/robot (${parseInt(pastDrops.drop3)}).gif`)}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </main>
    );
}