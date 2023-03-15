import React from "react";
import Link from "next/link";

const Contact = () => {
    return (
        <div id="contact" className="w-full">
            <div className="max-w-[1360px] py-auto px-3 m-auto">
                <h2 className='pt-2 text-blue-600'>Contact</h2>
                <div className="max-w-[960px] items-center">
                    <p className="text-xl py-2 text-gray-800 mt-2 ml-8">Email: joshreed114@gmail.com</p>
                    <h4 className="text-xl ml-8 pt-3">Connect with me:</h4>
                    <ul className="flex items-center h-20">
                        <li className="ml-12 text-md hover:border-b text-gray-800">
                            <Link href='https://www.linkedin.com/in/joshua-reed-qu/' target='_blank' 
                                className="text-xl text-blue-600">LinkedIn
                            </Link>
                        </li>
                        <li className="ml-12 text-md hover:border-b text-gray-800">
                            <Link href='https://github.com/josh-reed-QU' target='_blank' 
                                className="text-xl text-blue-600">GitHub
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;