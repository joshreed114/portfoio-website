import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

const projectCard = ({name, img, url}) => {
    return (
        
        <div className="group relative flex items-center justify-center h-200 w-full rounded-xl shadow-2xl hover:bg-gradient-to-r from-blue-900 to-blue-500">
            <Image className='object-scale-down rounded-xl group-hover:opacity-10' src={img} alt='Project Image'></Image>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className=' text-white text-center py-5'>{name}</h3>
                <Link href={url}>
                    <p className='py-2 rounded-xl bg-white text-gray-800 font-bold shadow-md text-center cursor-pointer'>Learn More</p>
                </Link>
            </div>
        </div>
    );
};

export default projectCard;