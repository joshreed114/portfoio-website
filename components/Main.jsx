import React from 'react';
import Image from 'next/legacy/image';
import { AiFillGithub, AiFillFileText } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Main = () => {
    function navToContact() {
        console.log('Moving to Contact section.')
    }

    return (
        <div id='home' className=' h-screen w-full text-center'>
            <div className='flex max-w-[1080px] w-full h-full p-2 mx-auto items-center justify-center'>
                <div>
                    <div className='text-center p-10'>
                        <h1 className='py-3 text-gray-700'>
                            Hi, I&#39;m <span className='text-blue-600'>Joshua Reed</span>
                        </h1>
                        <h3 className='text-2xl py-1 md:text-3xl'>
                            I am a Junior Computer Science major at Quinnipiac University
                        </h3>
                    </div>
                    <Link className='contact bg-gradient-to-r from-blue-900 to-blue-500 text-white font-semibold rounded-lg py-2 px-3 hover:to-blue-700 hover:shadow-xl duration-300 hover:cursor-pointer'
                            activeClass='active' to="contact" spy={true} smooth={true} duration={200} delay={0}>
                        Contact Me
                    </Link>
                    <div className='flex p-8 items-center justify-between max-w-sm mx-auto'>
                        <a href='https://www.linkedin.com/in/joshua-reed-qu/' target='_blank'>
                            <div className='cursor-pointer p-5 shadow-xl rounded-full hover:scale-125 ease-in duration-200'>
                                <FaLinkedin />
                            </div>
                        </a>
                        <a href="https://github.com/josh-reed-QU" target='_blank'>
                            <div className='cursor-pointer p-5 shadow-xl rounded-full hover:scale-125 ease-in duration-200'>
                                <AiFillGithub />
                            </div>
                        </a>
                        <a href="https://drive.google.com/file/d/1BdgNYOtcohfdn6YNXUCSGW5ftq9Cwq8i/view?usp=sharing" target='_blank'>
                            <div className='cursor-pointer p-5 shadow-xl rounded-full hover:scale-125 ease-in duration-200'>
                                <AiFillFileText />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;