import React from 'react'
import { myprojects, Project } from '../utils/data';
import Image from 'next/image';

import Link from 'next/link';
const project = () => {
    return (
        <div id='project' className='bg-black mx-auto sm:px-20 px-4 py-28'>
            <h2 className="text-3xl text-center font-bold mb-6 text-white">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {myprojects.map((project: Project) => (
                    <div key={project.id} className="bg-[#1A1A1A] border border-[#444444]   shadow-lg rounded-lg overflow-hidden">
                        <Image width={200} height={200} src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-[20px] font-semibold text-white mb-2">{project.title}</h3>
                            <p className="text-[14px] leading-[21px] font-normal text-[#737373] mb-4">{project.description}</p>
                            <div className="flex justify-between">
                                <Link href={project.githubUrl} passHref>
                                    <button type="button" className="inline-block bg-transparent border border-[#444444] text-white font-semibold py-2 px-4 rounded-lg">
                                        GitHub
                                    </button>
                                </Link>
                                <Link href={project.demoUrl} passHref>
                                    <button type="button" className="inline-block bg-white text-black font-semibold py-2 px-4 rounded-lg">
                                        Demo
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default project