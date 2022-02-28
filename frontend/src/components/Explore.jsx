import React from "react";
import '../docs/styles/root.css';
import '../docs/styles/element.css';
import '../docs/styles/collection.css';
import {get} from "./http";
import Element from "./Element";

export default function Explore() {

    const [dropIDS, setDropIDS] = React.useState([]);

    React.useEffect(() => {
        get('drops').then(res => {
            res.map(drop => {
                setDropIDS(oldArray => [...oldArray, drop])
            })
        }).catch(e => {
            console.log(e)
        })
    }, [])

    return (
        <main>
            <div className="explore-header">
                <h1 className="username"> Explore Collectibles </h1>
            </div>
            <div className="collection">
                {dropIDS.map(e => {
                    return (
                        <Element id={e["dropID"]} name={e["name"]} description={e["description"]} rarity={e["rarity"]}/>
                    )
                })}
            </div>
        </main>
    );
}