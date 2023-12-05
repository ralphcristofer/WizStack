import React, { useContext } from 'react';
import './navbar.module.css';
import Logo from '../../assets/Wizstack Title.png'
import { Flex } from '@radix-ui/themes';
import { UserContext } from '../../contexts/UserContext.jsx'; // could be obtain from session
import { Link } from 'react-router-dom';

const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '20px',
    background: 'var(--gray-a2)', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

const logoStyle = {
    height: "50px",
}

const Navbar = () => { 
    // some variables from the context 
    const {User} = useContext(UserContext);
    const isAdmin = User?.role === 'admin';
    const isAuthenticated = !!User;

    return (
        <Flex direction="row" justify="between" align="center" style={navbarStyle}> 
            <Link size="2">
                <img src={Logo} alt="WizStack Title" style={logoStyle} />
            </Link>
            <Flex gap="5">
                <Link to={'/dashboard'}>DASHBOARD</Link>
                <Link to={'/about'}>ABOUT</Link>
                <Link to={'/contact'}>CONTACT</Link>
                <Link to={'/'}>HOME</Link>
            </Flex>
            <Flex gap="3"> 
                {isAdmin && 
                    <>
                    <Link to={'/users'}>USERS</Link>
                    <div>|</div>
                    </>
                }
                {isAuthenticated ? (
                    <>
                    <Link to={'/profile'}>PROFILE</Link>
                    <div>|</div>
                    <Link to={'/signout'}>SIGN OUT</Link>
                    </>
                ) : (
                    <>
                    <Link to={'/signup'}>SIGN UP</Link>
                    <div>|</div>
                    <Link to={'/signin'}>SIGN IN</Link>
                    </>
                )}
            </Flex>
       </Flex>
    );
}

export default Navbar;