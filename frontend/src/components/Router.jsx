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
                <Route path={"/profile"} element={theProfile()}> </Route>
                <Route path={"/settings"} element={settings()}> </Route>
                <Route path={"/explore"} element={explore()}> </Route>
                <Route path={"/"} element={HomeF()}/>
            </Switch>
        </Router>
    );
}



function HomeF() {
    const navigation = [
        {name: 'Explore', href: './explore', current: false},
        {name: 'Home', href: './', current: true},
        {name: 'Settings', href: './settings', current: false},
    ]
    return withHeader(<Home/>, navigation);
}


function theProfile() {
    const navigation = [
        {name: 'Explore', href: './explore', current: false},
        {name: 'Home', href: './', current: false},
        {name: 'Settings', href: './settings', current: false},
    ]
    return withHeader(<Profile/>, navigation);
}

function settings() {
    const navigation = [
        {name: 'Explore', href: './explore', current: false},
        {name: 'Home', href: './', current: false},
        {name: 'Settings', href: './settings', current: true},
    ]
    return withHeader(<Profile/>, navigation);
}

function explore() {
    const navigation = [
        {name: 'Explore', href: './explore', current: true},
        {name: 'Home', href: './', current: false},
        {name: 'Settings', href: './settings', current: false},
    ]
    return withHeader(<Profile/>, navigation);
}

function withHeader(element, navigation){
    return <Header element={element} navigation={navigation}/>
}
