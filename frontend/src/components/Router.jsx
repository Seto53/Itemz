import React from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    useParams
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Profile from  './Profile';
import Explore from  './Explore';
import Settings from  './Settings';
import Drop from  './Drop';
import Login from  './Login';
import Register from  './Register';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path={"/profile"} element={theProfile()}> </Route>
                <Route path={"/drop/:id"} element={ForDrop()}> </Route>
                <Route path={"/settings"} element={settings()}> </Route>
                <Route path={"/explore"} element={explore()}> </Route>
                <Route path={"/login"} element={login()}> </Route>
                <Route path={"/register"} element={register()}> </Route>
                <Route path={"/"} element={HomeF()}/>
            </Switch>
        </Router>
    );
}

function login() {
    return <Login/>;
}
function register() {
    return <Register/>;
}
function HomeF() {
    const navigation = [
        {name: 'Home', href: '/', current: true},
        {name: 'Explore', href: '/explore', current: false},
        {name: 'Settings', href: '/settings', current: false},
    ]
    return withHeader(<Home/>, navigation);
}
function theProfile() {
    const navigation = [
        {name: 'Home', href: '/', current: false},
        {name: 'Explore', href: '/explore', current: false},
        {name: 'Settings', href: '/settings', current: false},
    ]
    return withHeader(<Profile/>, navigation);
}
function settings() {
    const navigation = [
        {name: 'Home', href: '/', current: false},
        {name: 'Explore', href: '/explore', current: false},
        {name: 'Settings', href: '/settings', current: true},
    ]
    return withHeader(<Settings/>, navigation);
}
function ForDrop() {
    const {id} = useParams();
    const navigation = [
        {name: 'Home', href: '/', current: false},
        {name: 'Explore', href: '/explore', current: false},
        {name: 'Settings', href: '/settings', current: false},
    ]
    return withHeader(<Drop id={id}/>, navigation);
}
function explore() {
    const navigation = [
        {name: 'Home', href: '/', current: false},
        {name: 'Explore', href: '/explore', current: true},
        {name: 'Settings', href: '/settings', current: false},
    ]
    return withHeader(<Explore/>, navigation);
}
function withHeader(element, navigation){
    return <Header element={element} navigation={navigation}/>
}
