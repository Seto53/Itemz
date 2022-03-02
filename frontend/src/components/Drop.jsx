import React, {useEffect, useState} from "react";
import '../docs/styles/root.css';
import '../docs/styles/element.css';
import '../docs/styles/drop.css';
import '../docs/styles/button.css';
import CountDown from './CountDown';
import {get} from "./http";
import {useParams} from "react-router-dom";

export default function Drop() {

    const {id} = useParams()
    const [count, setCount] = useState({count: 0});

    const [dropInfo, setDropInfo] = React.useState({
        dropID: id,
        name: 'Collectible Name',
        description: "The whole long description....",
        asset: require('../docs/assets/collectibles/robot-nft-temp/robot (1).gif'),
        dropDate: "Feb 26, 2022 23:46:25",
        price: 50,
        rarity: "Uncommon",
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
                series: res[0].series
            })
            setCount({count: res[0].count})
        }).catch(e => {
            console.log(e)
        })
    }, [])

    useEffect(() => {
        function getSold() {
            get('drops/' + id + '/count').then(res => {
                setCount({
                    count: res[0].count
                })
            }).catch(e => {
                console.log(e)
            })
        }

        getSold()
        const interval = setInterval(() => getSold(), 1000)
        return () => {
            clearInterval(interval);
        }
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
                    <li> Editions: <span className="element-sub-username"> {count.count} Left </span></li>
                </ul>
                {count.count > 0 ?
                    <button className="button">
                        <p> Buy Collectible Now! </p>
                    </button>
                    : <div className="button">
                        <p> Sold Out </p>
                    </div>
                }
            </div>
        </div>
    );
}