import React, { useState } from 'react';

import MenuItemLink from '../MenuItemLink';
import { Logo, Home, Search, WatchList, Original, Movie, Series } from '../../utils/icons';

import { Nav, LogoContainer, NavMenu, Login, SignOut, UserImg, DropDown } from './styles';

const Header: React.FC = () => {
    const [userName, setUserName] = useState('');
    return (
        <Nav>
            <LogoContainer>
                <img src={Logo} alt="Disney+" />
            </LogoContainer>

            {!userName ? (
                <Login onClick={() => {}}>Login</Login>
            ) : (
                <>
                    <NavMenu>
                        <MenuItemLink name="HOME" url="/home" img={Home} />
                        <MenuItemLink name="SEARCH" url="" img={Search} />
                        <MenuItemLink name="WATCHLIST" url="" img={WatchList} />
                        <MenuItemLink name="ORIGINALS" url="" img={Original} />
                        <MenuItemLink name="MOVIES" url="" img={Movie} />
                        <MenuItemLink name="SERIES" url="" img={Series} />
                    </NavMenu>
                    <SignOut>
                        <UserImg src="" alt="" />
                        <DropDown>
                            <span onClick={() => { }}>Sign out</span>
                        </DropDown>
                    </SignOut>
                </>
            )}
        </Nav>
    )
}

export default Header;