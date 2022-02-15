import React from "react";
import  '../docs/styles/root.css';
import  '../docs/styles/profile.css';
import  '../docs/styles/element.css';
import  '../docs/styles/collection.css';
import cover from '../docs/assets/cover.png';
import picture from '../docs/assets/profile_picture.png';
import element from '../docs/assets/collectibles/element.png';

export default function Profile() {

    const userinfo = {id: '1', name: 'Collectible Name', username: 'username', img: picture};

    const collectibleCollection = [
        {name: 'Name', description: 'Description', img: element, id: '1'},
        {name: 'Name', description: 'Description', img: element, id: '2'},
        {name: 'Name', description: 'Description', img: element, id: '3'},
        {name: 'Name', description: 'Description', img: element, id: '4'},
        {name: 'Name', description: 'Description', img: element, id: '5'},
        {name: 'Name', description: 'Description', img: element, id: '6'},
        {name: 'Name', description: 'Description', img: element, id: '7'}
    ]

    return (
        <main>
            <div className="profile-header">
                <img alt="cover" className="cover" src={cover}/>
                <img alt="profile-picture" className="profile-p" src={userinfo.img}/>
                <p className="username"> {userinfo.username} </p>
                <p className="sub-username"> some info of collection </p>
            </div>

            <div className="collection">
                {collectibleCollection.map(e =>
                    <div className="element">
                        <a href={`drop.html?id=${e.id}`}>
                            <img alt="image" className="element-image" src={e.img}/>
                            <p className="element-title"> {e.name} </p>
                            <p className="element-description"> {e.description} </p>
                        </a>
                    </div>
                )}

            </div>
        </main>
    );
}