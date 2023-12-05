import React from 'react';
import './footer.module.css';

/**
 * Footer component represents the website's footer section.
 */
const Footer = () => {
    return (
        // Footer element with a class name "footer".
        <footer className="footer">
            {/* Copyright with the current year and team name. */}
            <p>© 2023 WizStack. All rights reserved.</p>
        </footer>
    );
}

export default Footer;