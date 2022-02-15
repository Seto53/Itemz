import React from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from "react-router-dom";
import profile from '../docs/assets/profile_picture.png';
import gold from '../docs/assets/gold.png';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path={"/settings"} element={About()}> </Route>
                <Route path={"/"} element={Home()}/>
            </Switch>
        </Router>
    );
}

function withHeader(component){
    return <div>
        <header className="App-header">
            <div className="header-class">
                <a href="/"> <img alt="logo" className="logo-image" src="../docs/assets/logo_with_name.png"/> </a>
                <div className="navigation-container w-container">
                    <form action="" className="search-3">
                        <label htmlFor="search"> </label>
                        <input className="search-input-2 w-input" id="search"
                               maxLength="256" name="query"
                               placeholder="Search items and drops"
                               required=""
                               type="search"/>
                        <input className="search-button-2 w-button" type="submit" value="Search"/>
                    </form>
                </div>
                <div className="header-options">
                    <a href="/"> Home </a>
                    <a href="/explore"> Explore </a>
                    <a href="/settings"> Settings </a>
                    <h3>67</h3>
                    <a href="/settings"> <img alt="gold" className="tiny-profile-p" src={gold}/></a>
                    <a href="/profile"> <img alt="profile" className="tiny-profile-p" src={profile}/></a>
                </div>
            </div>
        </header>
        {component}
    </div>
}

function Home() {
    return withHeader(<div>
        <h1> HOME </h1>
    </div>);
}

function About() {
    return withHeader(<h2>About</h2>);
}

function Users() {
    return <h2>Users</h2>;
}
