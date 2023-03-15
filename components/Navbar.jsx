import React, { useState, useEffect } from "react";
import Link from 'next/link';

const Navbar = () => {
    const [shadow, setShadow] = useState(false);
    //const [navActive, setActiveItem] = useState(0);

    useEffect(() => {
        const shadow = () => {
            if(window.scrollY > 75)
                setShadow(true);
            else
                setShadow(false);
        };
        window.addEventListener('scroll', shadow);

        const underline = () => {
            
        };
    });

    return (
        <div className={shadow ? ' fixed w-full h-20 z-[100] shadow-xl' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex items-center flex-wrap justify-center md:justify-end h-20 px-3 py-4 bg-blue-500'>
                <div className="flex mr-8">
                    <div>
                        <ul className="flex">
                            <li className="ml-8 text-md hover:border-b text-white">
                                <Link href='/'>Home</Link>
                            </li>
                            <li className="ml-8 text-md hover:border-b text-white">
                                <Link  href='/#skills'>Skills</Link>
                            </li>
                            <li className="ml-8 text-md hover:border-b text-white">
                                <Link href='/#projects'>Projects</Link>
                            </li>
                            <li className="ml-8 text-md hover:border-b text-white">
                                <Link href='https://drive.google.com/file/d/1BdgNYOtcohfdn6YNXUCSGW5ftq9Cwq8i/view?usp=sharing' target='_blank'>Resume</Link>
                            </li>
                            <li className="ml-8 text-md hover:border-b text-white">
                                <Link href='/#contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;