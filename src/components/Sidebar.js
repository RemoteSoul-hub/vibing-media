import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ForumIcon from '@material-ui/icons/Forum';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';



function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__groups">
            <h4>Communities</h4>
            <SidebarRow Icon={ForumIcon} title='Discord Tavern'/>
            <SidebarRow Icon={MusicNoteIcon} title='Lo-Fi Community'/>
            <SidebarRow Icon={PhoneInTalkIcon} title='Serious Talk'/>
            <h4>Vibe Mates</h4>
            <div className="sidebar__friends">
            <SidebarRow src='https://i.pinimg.com/474x/1f/41/7e/1f417e7730688591167c71b5c3e6a735.jpg' title='Lana Green'/>
            <SidebarRow src='https://miro.medium.com/max/545/1*UNf6kxqv_ujIjKoMI0q97A.png' title='Ines Blue'/>
            <SidebarRow src='https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png' title='Andrew Black'/>            </div>
            </div>
        </div>
    )
}

export default Sidebar;
