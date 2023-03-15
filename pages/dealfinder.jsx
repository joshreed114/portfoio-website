import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import dealfinder from '../public/assets/projects/deal-finder.png'
import dealfinderResult from '../public/assets/projects/deal-finder-result.png'


const databaseProject = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col w-screen relative px-2 justify-center items-center">
                    <h2 className="pt-28 pb-6 mx-4 max-w-[1080px] text-blue-600">Deal Finder Program</h2>
                    <p className="text-xl max-w-[1080px] justify-center text-center text-gray-800 px-4 py-2">
                        Worked in a team to create a web scraper application that searched for deals. Program accepted user inputted 
                        keywords to search for new deals on a deal finding website. Displayed new deals to the user by scraping and 
                        parsing HTML data retrieved from the search query&#39;s URL.</p>
                    <ul className="flex items-center mt-4 mb-8">
                        <li className="text-md cursor-pointer text-gray-800">
                            <Link href='https://github.com/josh-reed-QU/SER305-Final-Project' target='_blank' 
                                className="bg-gradient-to-r from-blue-900 to-blue-500 text-white font-semibold rounded-lg py-2 px-6 hover:to-blue-700 hover:shadow-xl duration-300">
                                    Code</Link>
                        </li>
                    </ul>
                    <h3 className="text-center">Languages and Tools Used:</h3>
                    <p className="text-xl py-1"><span className="text-blue-600">&#x2022;</span> Java</p>
                    <p className="text-xl py-1"><span className="text-blue-600">&#x2022;</span> JSoup - External Library</p>
                    <p className="text-xl py-1 mb-4"><span className="text-blue-600">&#x2022;</span> HTML</p>
                <h3 className="text-blue-600 mb-8 mx-4">Demo Results:</h3>
                <div className="flex flex-col max-w-[1040px]">
                    <Image className="py-5 justify-center shadow-xl" src={dealfinder} alt='Project Image 1'></Image>
                    <Image className="py-5 justify-center shadow-xl" src={dealfinderResult} alt='Project Image 2'></Image>
                </div>
            </div>
        </div>
    );
};

export default databaseProject;