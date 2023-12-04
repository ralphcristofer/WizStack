import React from 'react';
import './navbar.module.css';
import Logo from '../../assets/Wizstack Title.png'
import { Flex, Text, Button, Link, Box } from '@radix-ui/themes';

const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '20px',
    background: 'var(--gray-a2)', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

const Navbar = () => { 
    return (
        <Flex direction="row" justify="between" align="center" style={navbarStyle}> 
            <Box>
                <Link size="2">
                    <img src={Logo} alt="WizStack Title" height={50} />
                </Link>
            </Box>
            <Flex gap="5">
                <Link to={'/'}>Dashboard</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Contact</Link>
            </Flex>
            <Flex gap="3">
                <Link to={'/'}>Sign In</Link>
                <Link to={'/'}>Register</Link>
            </Flex>
       </Flex>
    );
}

export default Navbar;