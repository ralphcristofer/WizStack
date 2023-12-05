import React from 'react';

// CSS Module (Currently empty at the moment)
import './button.module.css';

/**
 * Button component represents a simple button element.
 * @param {object} props - The component's props.
 * @param {string} props.buttonText - The text to be displayed on the button.
 * @param {...any} props - Any other props to pass to the button element.
 * @returns {JSX.Element} - The rendered button element.
 */
export const Button = ({ buttonText, ...props }) => {
    return (
        <button {...props}>
            {buttonText}
        </button>
    );
}