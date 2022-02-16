import React from "react";
import  '../docs/styles/root.css';
import  '../docs/styles/settings.css';
import  '../docs/styles/button.css';

export default function Settings() {

    return (
        <div className="setting-content">
                <h1> Settings </h1>
                <hr/>
                <h2> Profile information </h2>
                <div className="profile-settings-content">
                    <div>
                        <label htmlFor="username"> Username </label>
                        <br/>
                        <input id="username" placeholder="johndoe" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="birthdate"> Birth Date </label>
                        <br/>
                        <input id="birthdate" placeholder="07/12/1999" type="date"/>
                    </div>
                </div>

                <div className="logout-button button">
                    <a> BUY GOLD </a>
                </div>

                <h2> View options </h2>
                <div>
                    <input id="mode" type="checkbox"/>
                    <label htmlFor="mode"> Dark Mode </label>
                </div>

                <div className="logout-button button">
                    <a> LOG OUT </a>
                </div>


            </div>
    );
}