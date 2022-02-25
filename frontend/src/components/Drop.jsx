import React from "react";
import  '../docs/styles/root.css';
import  '../docs/styles/element.css';
import  '../docs/styles/drop.css';
import  '../docs/styles/button.css';
import CountDown from './CountDown';
import element from '../docs/assets/collectibles/element.png';

export default function Drop({id}) {

    //Should get the drop from backend with the id
    const drop = {id: id,
        name: 'Collectible Name',
        description: "The whole long description....",
        img: element,
        date: "Feb 26, 2022 23:46:25",
        price: 50,
        rarity: "Uncommon",
        amount: 1000,
        series: "Series"
    };

    return (
        <div className="content">
            <div className="left-information">
                <img src={drop.img} alt="element img"/>
                <br/>
                <CountDown drop={{id: drop.id, name: drop.name, date: drop.date}} headline={"Drops in"}/>
            </div>
            <div className="right-information">
                <p className="element-title"> {drop.name} </p>

                <h4> Description </h4>
                <p> {drop.description} </p>

                <h4> Details </h4>
                <ul>
                    <li> Series: <span className="element-sub-username"> {drop.series} </span></li>
                    <li> Price: <span className="element-sub-username"> {drop.price} Gold </span></li>
                    <li> Rarity Rank: <span className="element-sub-username"> {drop.rarity} </span></li>
                    <li> Editions: <span className="element-sub-username"> {drop.amount} Left </span></li>
                </ul>
                <div className="button">
                    <p> Buy Collectible Now! </p>
                </div>
            </div>
        </div>
    );
}