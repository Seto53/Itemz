import React from "react";
import  '../docs/styles/root.css';
import  '../docs/styles/profile.css';
import  '../docs/styles/element.css';
import  '../docs/styles/collection.css';
import cover from '../docs/assets/cover.png';
import picture from '../docs/assets/profile_picture.png';
import element from '../docs/assets/collectibles/element.png';
import Element from './Element';
import {get} from './http';

export default function Profile() {

    const [userinfo, setUserinfo] = React.useState({id: '1', name: 'Name', username: 'email', img: picture});

    React.useEffect( () => {
        get('users/1').then(res => {
            setUserinfo({name: res[0].name, username: res[0].email, id: res[0].id, img: picture})
        }).catch(e => {
            console.log(e)
        })
    }, [])

    const collectibleCollection = [
        {img: element, id: '1'},
        {img: element, id: '2'},
        {img: element, id: '3'},
        {img: element, id: '4'},
        {img: element, id: '5'},
        {img: element, id: '6'},
        {img: element, id: '7'}
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
                    <Element id={e.id}/>
                )}

            </div>
        </main>
    );
}