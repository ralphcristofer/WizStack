import React from 'react';
import { Link } from "react-router-dom";

export const Banner = ({ title, link, linkTitle }) => {
    const ArrowIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
        </svg>
    );

    return (
        <div className="bg-gradient-to-r from-orange-500 to-red-500">
            <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
                <div className="grid md:grid-cols-2 md:justify-between md:items-center gap-2">
                    <div className="md:text-start md:order-2 md:flex md:justify-end md:items-center">
                        <p className="me-5 inline-block text-sm font-semibold text-white">
                            <span className="block md:inline-block">{title}</span>
                        </p>
                        <Link to={link} className="inline-flex justify-center items-center gap-x-3 text-center hover:text-white bg-gradient-to-tl from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white py-3 px-4">
                            {linkTitle}
                            <ArrowIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

// TODO: EDIT THIS COMPONENT FOR BETTER UI AND UX