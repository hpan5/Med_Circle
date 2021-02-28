import React from 'react';
import logo from '../assets/images/logo.png';
import '../styles/TopBar.css'
import { Icon } from 'antd';

const TopBar = (props) => {
    return (
        <header className="App-header">
            <img src={logo} alt="logo" className="App-logo"/>
            <span className="App-title">Circle</span>

            {props.isLoggedIn ?
                <a className="logout" onClick={this.props.handleLogout} >
                    <Icon type="logout"/>{' '}Logout
                </a> : null }
        </header>
    )
}
// #61dafb;
export default TopBar;