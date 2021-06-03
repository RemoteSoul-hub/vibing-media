import React from 'react';
import "./Header.css";
import logo from '../assets/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import TextsmsIcon from '@material-ui/icons/Textsms';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import FlagIcon from '@material-ui/icons/Flag';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <img src={logo} alt="" />
            <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder="Search"/>
            </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large"/>
                    </div>
                    <div className="header__option">
                    <PeopleIcon fontSize="large"/>
                    </div>
                    <div className="header__option"> 
                    <TextsmsIcon fontSize="large"/>
                    </div>
                    <div className="header__option">
                    <QueryBuilderIcon fontSize="large"/>
                    </div>
                    <div className="header__option">
                    <FlagIcon fontSize="large"/>
                    </div>
                    <div className="header__option">
                    <SettingsIcon fontSize="large"/>
                    </div>
            </div>
            <div className="header__right">
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <ShareIcon />
                </IconButton>
                <div className="header__info">
                    <Avatar /> 
                    <h4>UserName</h4>
                    <ExpandMoreIcon />
                </div>
                </div>      
        </div>
    )
}

export default Header;
