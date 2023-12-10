import React from 'react';
import { Link } from "react-router-dom";

export const Card = ({ title, description, buttonText, link}) => {
    return (
        <div>
            <div className="p-7 rounded-xl bg-amber-100">
                <h3 className="text-xl font-semibold mb-7">{title}</h3>
                <p className="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400">{description}</p>
                <Link to={link} className='py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-orange-500 hover:text-white transition-all duration-500'>
                    {buttonText}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className=" h-5 w-5 ms-3">
                        <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default Card;