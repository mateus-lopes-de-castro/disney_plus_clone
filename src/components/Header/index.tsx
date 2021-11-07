import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import MenuItemLink from '../MenuItemLink';
import { Logo, Home, Search, WatchList, Original, Movie, Series } from '../../utils/icons';

import { Nav, LogoContainer, NavMenu, Login, SignOut, UserImg, DropDown } from './styles';

const Header: React.FC = () => {

    const history = useHistory();
    const { user, signInWithGoogle, signOutWithGoogle } = useAuth();

    const handleSignIn = async () => {
        await signInWithGoogle().then(res =>{
            if(res)
                history.push('/home');
        });
    }

    const handleSignOut = async () => {
        await signOutWithGoogle().then(res => {
            if(res)
                history.push('/');
        });
    }

    return (
        <Nav>
            <LogoContainer>
                <img src={Logo} alt="Disney+" />
            </LogoContainer>

            {!user.id ? (
                <Login onClick={handleSignIn}>Login</Login>
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
                        <UserImg src={user.avatar} alt="" />
                        <DropDown>
                            <span onClick={handleSignOut}>Sign out</span>
                        </DropDown>
                    </SignOut>
                </>
            )}
        </Nav>
    )
}

export default Header;