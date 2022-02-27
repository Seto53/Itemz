import React from "react";
import '../docs/styles/root.css';
import '../docs/styles/element.css';
import {get} from "./http";

export default function Element({id}) {

    //TODO
    const images = [
        require('../docs/assets/collectibles/robot-nft-temp/unnamed.gif'),
        require('../docs/assets/collectibles/robot-nft-temp/unnamed (1).gif'),
        require('../docs/assets/collectibles/robot-nft-temp/unnamed (2).gif'),
        require('../docs/assets/collectibles/robot-nft-temp/unnamed (3).gif'),
        require('../docs/assets/collectibles/robot-nft-temp/unnamed (4).gif'),
        require('../docs/assets/collectibles/robot-nft-temp/unnamed (5).gif'),
        require('../docs/assets/collectibles/robot-nft-temp/unnamed (6).gif'),
        require('../docs/assets/collectibles/robot-nft-temp/unnamed (7).gif'),
        require('../docs/assets/collectibles/robot-nft-temp/unnamed (8).gif'),
        require('../docs/assets/collectibles/robot-nft-temp/unnamed (9).gif'),
        require('../docs/assets/collectibles/robot-nft-temp/unnamed (10).gif'),
        require('../docs/assets/collectibles/robot-nft-temp/unnamed (11).gif'),
        require('../docs/assets/collectibles/robot-nft-temp/unnamed (12).gif'),
        require('../docs/assets/collectibles/robot-nft-temp/unnamed (13).gif')
    ];

    const [drop, setDrop] = React.useState({
        dropID: "id",
        name: "name",
        asset: require("../docs/assets/collectibles/robot-nft-temp/unnamed.gif"),
        description: 'description'
    });

    React.useEffect(() => {
        get('drops/' + id).then(res => {
            setDrop({
                dropID: res[0].dropID,
                name: res[0].name,
                asset: images[parseInt(res[0].dropID) - 1],
                description: res[0].description
            })
        }).catch(e => {
            console.log(e)
        })
    }, [])
    return (
        <div className="element">
            <a href={`/drop/${drop.id}`}>
                <img alt="image" className="element-image"
                     src={drop.asset}/>
                <p className="element-title"> {drop.name} </p>
                <p className="element-description"> {drop.description} </p>
            </a>
        </div>
    );
}