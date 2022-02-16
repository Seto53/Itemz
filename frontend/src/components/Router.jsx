import React from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Profile from  './Profile';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path={"/settings"} element={About()}> </Route>
                <Route path={"/profile"} element={theProfile()}> </Route>
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

function theProfile() {
    return withHeader(<Profile/>);
}

function withHeader(element){
    return <Header element={element}/>
}
