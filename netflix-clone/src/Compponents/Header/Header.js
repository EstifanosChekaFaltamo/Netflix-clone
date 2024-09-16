import React from 'react'
import './Header.css'
import NetflixLogo from '../../Images/Netflix-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PortraitIcon from '@mui/icons-material/Portrait';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
    return (
        <div className='Header_Outer_Container'>
            <div className='header_container'>
                <div className='header_left'>
                    <ul>
                        <li><img src={NetflixLogo} alt="NetflixLogo" width="100" /></li>
                        <li>Home</li>
                        <li>TVShows</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>MyList</li>
                        <li>Browse by Languages</li>
                    </ul>

                </div>
                <div className='header_right'>
                    <ul>
                        <li><SearchIcon /></li>
                        <li><NotificationsNoneIcon /></li>
                        <li><PortraitIcon /></li>
                        <li><ArrowDropDownIcon /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header