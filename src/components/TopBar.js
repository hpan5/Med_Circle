import React from 'react';
import logo from '../assets/images/logo.png';
import '../styles/TopBar.css'

const TopBar = () => {
    return (
        <header className="App-header">
            <img src={logo} alt="logo" className="App-logo"/>
            <span className="App-title">Circle</span>
        </header>
    )
}
// #61dafb;
export default TopBar;