import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import translateDemo from '../public/assets/projects/translate-demo.gif';

const databaseProject = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col w-screen relative px-2 justify-center items-center">
                    <h2 className="pt-28 pb-6 mx-4 max-w-[1080px] text-blue-600">Android Translate App</h2>
                    <p className="text-xl max-w-[1080px] justify-center text-center text-gray-800 px-4 py-2">
                        Created an Android application that utilized a REST API to retrieve and display data. Our app 
                        uses the Google Translate API to send a phrase and the user&#39;s chosen output language. The app 
                        returns and displays the translated phrase.</p>
                    <p className="text-lg max-w-[840px] justify-center text-center text-blue-600 px-4 py-3">
                        Note: REST api no longer exists, which results in the error returned in the demo gif.</p>
                    <ul className="flex items-center mt-4 mb-8">
                        <li className="text-md cursor-pointer text-gray-800">
                            <Link href='https://github.com/josh-reed-QU/SER210-Assignment-2-Part-2' target='_blank' 
                                className="bg-gradient-to-r from-blue-900 to-blue-500 text-white font-semibold rounded-lg py-2 px-6 hover:to-blue-700 hover:shadow-xl duration-300">
                                Code</Link>
                        </li>
                    </ul>
                    <h3 className="text-center">Languages and Tools Used:</h3>
                    <p className="text-xl py-1"><span className="text-blue-600">&#x2022;</span> Java</p>
                    <p className="text-xl py-1"><span className="text-blue-600">&#x2022;</span> XML</p>
                    <p className="text-xl py-1"><span className="text-blue-600">&#x2022;</span> RESTful API</p>
                    <p className="text-xl py-1 mb-4"><span className="text-blue-600">&#x2022;</span> Android Studio</p>
                <h3 className="text-blue-600 mb-8 mx-4">Demo: <span className="text-lg">&#x28;See Note Above&#x29;</span></h3>
                <div className="flex flex-col max-w-[1040px]">
                    <Image className="py-5 justify-center shadow-xl" src={translateDemo} alt='Project  Demo Gif'></Image>
                </div>
            </div>
        </div>
    );
};

export default databaseProject;