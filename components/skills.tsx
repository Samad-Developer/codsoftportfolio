import React from 'react'
import { myskills, Skill } from '../utils/data';

const skills = () => {
  return (
    <div id='skills' className="bg-gradient-to-b from-black to-[#111111] border-b border-[#444444] text-white text-center text-[32px] font-bold mx-auto sm:px-20 px-4 py-28">
        <h2 className='pb-10'>My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {myskills.map((skill: Skill) => (
                <div key={skill.id} className="border border-[#444444] p-4 rounded-xl flex flex-col items-center">
                    <p className='bg-white text-black rounded-full w-12 mb-8'>{skill.id}</p>
                    <h3 className="text-[20px] font-semibold mb-2">{skill.title}</h3>
                    <p className='text-[14px] leading-[21px] font-normal text-[#737373]'>{skill.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default skills