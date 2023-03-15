import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import db1 from '../public/assets/projects/database1.png'
import db2 from '../public/assets/projects/database2.png'


const databaseProject = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col w-screen relative px-2 justify-center items-center">
                    <h2 className="pt-28 pb-6 mx-4 max-w-[1080px] text-blue-600">Database System Project</h2>
                    <p className="text-xl max-w-[1080px] justify-center text-center text-gray-800 px-4 py-2">Worked in a small group to create a database using MySQL and Google Cloud. 
                        Used Python to parse and upload a public dataset to our database. Created Jupyter Notebooks to display 
                        meaningful visualizations and provide information and a description of our dataset.</p>
                    <ul className="flex items-center mt-4 mb-8">
                        <li className="text-md cursor-pointer text-gray-800">
                            <Link href='https://github.com/josh-reed-QU/CSC325-Term_Project' target='_blank' 
                                className="bg-gradient-to-r from-blue-900 to-blue-500 text-white font-semibold rounded-lg py-2 px-6 hover:to-blue-700 hover:shadow-xl duration-300">
                                    Code</Link>
                        </li>
                    </ul>
                    <h3 className="text-center">Languages and Tools Used:</h3>
                    <p className="text-xl py-1"><span className="text-blue-600">&#x2022;</span> SQL</p>
                    <p className="text-xl py-1"><span className="text-blue-600">&#x2022;</span> Python</p>
                    <p className="text-xl py-1 mb-4"><span className="text-blue-600">&#x2022;</span> Jupyter Notebook</p>
                <h3 className="text-blue-600 mb-8 mx-4">Example Visualizations:</h3>
                <div className="flex flex-col max-w-[1040px]">
                    <Image className="py-5 justify-center shadow-xl" src={db1} alt='Project Image 1'></Image>
                    <Image className="py-5 justify-center shadow-xl" src={db2} alt='Project Image 2'></Image>
                </div>
            </div>
        </div>
    );
};

export default databaseProject;