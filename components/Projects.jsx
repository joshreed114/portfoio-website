import React from "react";
import Image from 'next/legacy/image';
import ProjectCard from "./ProjectCard";
import { images } from "@/next.config";
import tempImg from '../public/assets/wave.jpg';
import dealFinderImg from '../public/assets/projects/deal-finder.png'
import database from '../public/assets/projects/database1.png'
import translate from '../public/assets/projects/translate-thumbnail.png'
import reminders from '../public/assets/projects/reminders-thumbnail.png'



const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1360px] py-20 px-3 m-auto">
                <h2 className='py-3 text-blue-600'>Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <ProjectCard
                        name='Database System Project'
                        img={database}
                        url='/databaseProject'
                    />
                    <ProjectCard
                        name='Android Translate App'
                        img={translate}
                        url='/translate'
                    />
                    <ProjectCard
                        name='Android Reminders App'
                        img={reminders}
                        url='/reminders'
                    />
                    <ProjectCard
                        name='Deal Finder App'
                        img={dealFinderImg}
                        url='/dealfinder'
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;