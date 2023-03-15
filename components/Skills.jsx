import React from "react";
import Image from 'next/legacy/image';
import java from '../public/assets/skills-and-tools/java.png';
import csharp from '../public/assets/skills-and-tools/Csharp.png';
import python from '../public/assets/skills-and-tools/python.png';
import sql from '../public/assets/skills-and-tools/sql.png';
import javascript from '../public/assets/skills-and-tools/javascript.png';
import cplusplus from '../public/assets/skills-and-tools/c++.png';
import html from '../public/assets/skills-and-tools/html.png';
import css from '../public/assets/skills-and-tools/css.png';
import github from '../public/assets/skills-and-tools/github.png';
import googleCloud from '../public/assets/skills-and-tools/google-cloud.png';
import vscode from '../public/assets/skills-and-tools/vscode.png';
import visualStudio from '../public/assets/skills-and-tools/visual-studio.png';
import androidStudio from '../public/assets/skills-and-tools/android-studio.png';
import intellij from '../public/assets/skills-and-tools/intellij.png';
import azureDataStudio from '../public/assets/skills-and-tools/azure-data-studio.png';
import eclipse from '../public/assets/skills-and-tools/eclipse.png';
import mySQLWorkbench from '../public/assets/skills-and-tools/mysql-workbench.png';
import mssql from '../public/assets/skills-and-tools/mssql.png';

const Skills = () => {
    return (
        <div id="skills" className="w-full p-3 py-20 flex items-center">
          <div className="max-w-[1360px] m-auto">
            <h2 className='py-3 text-blue-600'>Skills</h2>
            <p className='py-1 text-center justify-start md:text-xl md:max-w-3xl lg:text-xl lg:max-w-4xl mx-auto text-gray-800'>
              Since I first started coding in high school, I have used many different programming 
              languages, softwares, and tools. Throughout my courses and projects, I have gained experience with the following:
            </p>
            <h3 className="py-2">Languages:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {/*========== Skill Card 1 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={java} width='64px' height='64px' alt='Java logo' />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">Java</h3>
                        </div>
                    </div>
                </div>
                {/*========== Skill Card 2 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={csharp} width='64px' height='64px' alt='C# logo' />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">C#</h3>
                        </div>
                    </div>
                </div>
                {/*========== Skill Card 3 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={python} width='64px' height='64px' alt='Python logo' />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">Python</h3>
                        </div>
                    </div>
                </div>
                {/*========== Skill Card 4 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={sql} width='64px' height='64px' alt='SQL logo' />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">SQL</h3>
                        </div>
                    </div>
                </div>
                {/*========== Skill Card 5 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={javascript} width='64px' height='64px' alt='JavaScript logo' />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">JavaScript</h3>
                        </div>
                    </div>
                </div>
                {/*========== Skill Card 6 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={html} width='64px' height='64px' alt='HTML logo' />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">HTML</h3>
                        </div>
                    </div>
                </div>
                {/*========== Skill Card 7 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={css} width='64px' height='64px' alt='CSS logo' />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">CSS</h3>
                        </div>
                    </div>
                </div>
                {/*========== Skill Card 8 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={cplusplus} width='64px' height='64px' alt='C++ logo' />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">C++</h3>
                        </div>
                    </div>
                </div>
            </div>


            <h3 className="mt-10 py-2">Tools and Services:</h3>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 items-center">
                {/*========== Tool Card 1 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center place-items-center">
                        <div className="m-auto">
                            <Image src={github} width='64px' height='64px' alt='Github logo' />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">Github</h3>
                        </div>
                    </div>
                </div>
                {/*========== Tool Card 2 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={vscode} width='64px' height='64px' alt='Visual Studio Code logo' />
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <h3 className="text-lg">Visual Studio Code</h3>
                        </div>
                    </div>
                </div>
                {/*========== Tool Card 3 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={visualStudio} width='64px' height='64px' alt='Visual Studio logo' />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">Visual Studio</h3>
                        </div>
                    </div>
                </div>
                {/*========== Tool Card 4 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={intellij} width='64px' height='64px' alt='IntelliJ logo' />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">IntelliJ</h3>
                        </div>
                    </div>
                </div>
                {/*========== Tool Card 5 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={googleCloud} width='64px' height='64px' alt='Google Cloud Platform logo' />
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <h3 className="text-lg">Google Cloud</h3>
                        </div>
                    </div>
                </div>
                {/*========== Tool Card 6 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={androidStudio} width='64px' height='64px' alt='Android Studio logo' />
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <h3 className="text-lg">Android Studio</h3>
                        </div>
                    </div>
                </div>
                {/*========== Tool Card 7 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={mySQLWorkbench} width='64px' height='64px' alt='MySQL Workbench logo' />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">MySQL</h3>
                        </div>
                    </div>
                </div>
                {/*========== Tool Card 8 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={mssql} width='64px' height='64px' alt='MS SQL logo' />
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <h3 className="text-lg">Microsoft SQL</h3>
                        </div>
                    </div>
                </div>
                {/*========== Tool Card 9 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={azureDataStudio} width='64px' height='64px' alt='Azure Data Studio logo' />
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <h3 className="text-lg">Azure Data Studio</h3>
                        </div>
                    </div>
                </div>
                {/*========== Tool Card 10 ==========*/}
                <div className="p-4 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={eclipse} width='64px' height='64px' alt='Eclipse logo' />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">Eclipse</h3>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Skills;