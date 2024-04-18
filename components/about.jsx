import Image from 'next/image'
import myimage from '../public/my.jpg'
const about = () => {
    return (
        <section className="bg-black pt-28 sm:pt-48">
            <div className="flex flex-col space-y-4">
                <h2 className="font-bold text-[#ededed] text-[68px] text-center leading-[68px]">Haii I am Samad</h2>
                <p className="text-[#888] pt-10 text-[20px] px-6 text-center md:px-32">
                    I'm Abdus samad, a passionate Web Developer with 2 years
                    of experience in web development. I'm highly skilled in javascript
                    and have a strong understanding of web technologies.
                    I'm always eager to learn new things and take on
                    challenging projects.
                </p>
                <div className="flex justify-center gap-4 pt-10">
                    <button className="bg-white hover:bg-[#CCCCCC] text-[#0a0a0a] py-3 px-5 rounded-md focus:outline-none ">
                        Contact Me
                    </button>
                    <button className="bg-black border border-[#242424] text-white py-3 px-5 rounded-md hover:bg-[#1F1F1F] hover:text-white focus:outline-none ">
                        My Resume
                    </button>
                </div>
            </div>
        </section>
    )
}

export default about