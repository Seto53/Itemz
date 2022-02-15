import React from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from "react-router-dom";
import profile from '../docs/assets/profile_picture.png';
import gold from '../docs/assets/gold.png';
import Header from './Header';
import Home from './Home';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path={"/settings"} element={About()}> </Route>
                <Route path={"/"} element={HomeF()}/>
            </Switch>
        </Router>
    );
}



function HomeF() {
    return withHeader(<Home/>);
}

function About() {
    return withHeader(<h2>About</h2>);
}

function Users() {
    return <h2>Users</h2>;
}

function withHeader(element){
    return <Header element={element}/>
}
