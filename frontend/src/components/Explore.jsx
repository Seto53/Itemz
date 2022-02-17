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
import Element from './Element';

export default function Explore() {

    //When integrated should come from database
    const collectibleCollection = [
        {img: gif, id: '0'},
        {img: gif1, id: '1'},
        {img: gif2, id: '2'},
        {img: gif3, id: '3'},
        {img: gif4, id: '4'},
        {img: gif5, id: '5'},
        {img: gif6, id: '6'},
        {img: gif7, id: '7'},
        {img: gif8, id: '8'},
        {img: gif9, id: '9'},
        {img: gif10, id: '10'},
        {img: gif11, id: '11'},
        {img: gif12, id: '12'},
        {img: gif13, id: '13'}
    ]

    return (
        <main>
            <div className="explore-header">
                <h1 className="username"> Explore Collectibles </h1>
            </div>

            <div className="collection">

                {collectibleCollection.map(e => {
                    return (
                        <Element id={e.id} img={e.img}/>
                    )
                })}
            </div>
        </main>
    );
}