import React from "react";
import  '../docs/styles/root.css';
import  '../docs/styles/element.css';

export default function Element({id, img}) {

    //Should get the drop from backend with the id, SENDING IMAGE ONLY FOR MOCK UP
    const drop = {id: id,
        name: 'Collectible Name',
        description: "The whole long description....",
        img: img
    };

    return (
        <div className="element">
            <a href={`/drop/${drop.id}`}>
                <img alt="image" className="element-image" src={drop.img}/>
                <p className="element-title"> {drop.name} </p>
                <p className="element-description"> {drop.description} </p>
            </a>
        </div>
    );
}