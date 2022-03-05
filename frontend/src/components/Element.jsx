import React from "react";
import '../docs/styles/root.css';
import '../docs/styles/element.css';

export default function Element(props) {

    return (
        <div className="element">
            <a href={`/drop/${props.id}`}>
                <img alt="image" className="element-image"
                     src={require(`../docs/assets/collectibles/robot-nft-temp/${props.asset}`)}/>
                <p className="element-title"> {props.name} </p>
                <p className="element-description"> {props.description} </p>
            </a>
        </div>
    );
}