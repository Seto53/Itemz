import React from "react";
import  '../docs/styles/root.css';
import  '../docs/styles/element.css';
import  '../docs/styles/collection.css';
import gif from '../docs/assets/collectibles/robot-nft-temp/unnamed.gif';
import gif1 from '../docs/assets/collectibles/robot-nft-temp/unnamed (1).gif';
import gif2 from '../docs/assets/collectibles/robot-nft-temp/unnamed (2).gif';
import gif3 from '../docs/assets/collectibles/robot-nft-temp/unnamed (3).gif';
import gif4 from '../docs/assets/collectibles/robot-nft-temp/unnamed (4).gif';
import gif5 from '../docs/assets/collectibles/robot-nft-temp/unnamed (5).gif';
import gif6 from '../docs/assets/collectibles/robot-nft-temp/unnamed (6).gif';
import gif7 from '../docs/assets/collectibles/robot-nft-temp/unnamed (7).gif';
import gif8 from '../docs/assets/collectibles/robot-nft-temp/unnamed (8).gif';
import gif9 from '../docs/assets/collectibles/robot-nft-temp/unnamed (9).gif';
import gif10 from '../docs/assets/collectibles/robot-nft-temp/unnamed (10).gif';
import gif11 from '../docs/assets/collectibles/robot-nft-temp/unnamed (11).gif';
import gif12 from '../docs/assets/collectibles/robot-nft-temp/unnamed (12).gif';
import gif13 from '../docs/assets/collectibles/robot-nft-temp/unnamed (13).gif';

export default function Explore() {

    //When integrated should come from database
    const collectibleCollection = [
        {name: 'Name', description: 'Description', img: gif, id: '0'},
        {name: 'Name', description: 'Description', img: gif1, id: '1'},
        {name: 'Name', description: 'Description', img: gif2, id: '2'},
        {name: 'Name', description: 'Description', img: gif3, id: '3'},
        {name: 'Name', description: 'Description', img: gif4, id: '4'},
        {name: 'Name', description: 'Description', img: gif5, id: '5'},
        {name: 'Name', description: 'Description', img: gif6, id: '6'},
        {name: 'Name', description: 'Description', img: gif7, id: '7'},
        {name: 'Name', description: 'Description', img: gif8, id: '8'},
        {name: 'Name', description: 'Description', img: gif9, id: '9'},
        {name: 'Name', description: 'Description', img: gif10, id: '10'},
        {name: 'Name', description: 'Description', img: gif11, id: '11'},
        {name: 'Name', description: 'Description', img: gif12, id: '12'},
        {name: 'Name', description: 'Description', img: gif13, id: '13'}
    ]

    return (
        <main>
            <div className="explore-header">
                <h1 className="username"> Explore Collectibles </h1>
            </div>

            <div className="collection">

                {collectibleCollection.map(e => {
                    return (
                        <div className="element">
                            <a href={`drop.html?id=${e.id}`}>
                                <img alt="image" className="element-image"
                                     src={e.img}/>
                                    <p className="element-title"> {e.name} </p>
                                    <p className="element-description"> {e.description} </p>
                            </a>
                        </div>
                    )
                })}
            </div>
        </main>
    );
}