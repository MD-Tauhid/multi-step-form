import { Typography } from '@material-tailwind/react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bottom-0 md:relative flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-teal-900 opacity-60 shadow-md p-6 text-center md:justify-between">
            <Typography color="blue-gray" className="font-normal text-white">
                &copy; 2023 Material Tailwind
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
                    >
                        About Us
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
                    >
                        License
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
                    >
                        Contribute
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
                    >
                        Contact Us
                    </Typography>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;