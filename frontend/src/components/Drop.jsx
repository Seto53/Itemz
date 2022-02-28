import React from "react";
import '../docs/styles/root.css';
import '../docs/styles/element.css';
import '../docs/styles/drop.css';
import '../docs/styles/button.css';
import CountDown from './CountDown';
import {get} from "./http";
import {useParams} from "react-router-dom";

export default function Drop() {

    const {id} = useParams()

    const [dropInfo, setDropInfo] = React.useState({
        dropID: id,
        name: 'Collectible Name',
        description: "The whole long description....",
        asset: require('../docs/assets/collectibles/robot-nft-temp/robot (1).gif'),
        dropDate: "Feb 26, 2022 23:46:25",
        price: 50,
        rarity: "Uncommon",
        amount: 1000,
        series: "Series"
    });

    React.useEffect(() => {
        get('drops/' + id).then(res => {
            setDropInfo({
                dropID: res[0].dropID,
                name: res[0].name,
                description: res[0].description,
                asset: require(`../docs/assets/collectibles/robot-nft-temp/robot (${id}).gif`),
                dropDate: res[0].dropDate,
                price: res[0].price,
                rarity: res[0].rarity,
                count: res[0].count,
                series: res[0].series
            })
        }).catch(e => {
            console.log(e)
        })
    }, [])

    return (
        <div className="content">
            <div className="left-information">
                <img src={dropInfo.asset} alt="element img"/>
                <br/>
                <CountDown drop={{id: dropInfo.dropID, name: dropInfo.name, dropDate: dropInfo.dropDate}}
                           headline={"Drops in"}/>
            </div>
            <div className="right-information">
                <p className="element-title"> {dropInfo.name} </p>

                <h4> Description </h4>
                <p> {dropInfo.description} </p>

                <h4> Details </h4>
                <ul>
                    <li> Series: <span className="element-sub-username"> {dropInfo.series} </span></li>
                    <li> Price: <span className="element-sub-username"> {dropInfo.price} Gold </span></li>
                    <li> Rarity Rank: <span className="element-sub-username"> {dropInfo.rarity} </span></li>
                    <li> Editions: <span className="element-sub-username"> {dropInfo.count} Left </span></li>
                </ul>
                <div className="button">
                    <p> Buy Collectible Now! </p>
                </div>
            </div>
        </div>
    );
}