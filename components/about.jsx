import Link from 'next/link'
const about = () => {
    return (
        <section id='about' className="bg-black pt-28 sm:pt-48">
            <div className="flex flex-col space-y-4">
                <h2 className="font-bold text-[#ededed] text-[50px] px-6 sm:text-[68px] text-center leading-[68px]">Full Stack Web Developer</h2>
                <p className="text-[#888] pt-7 sm:pt-10 text-[20px] px-6 text-center md:px-32">
                    I'm Abdus samad, a passionate Web Developer with 2 years
                    of experience in web development. I'm highly skilled in javascript
                    and have a strong understanding of web technologies.
                    I'm always eager to learn new things and take on
                    challenging projects.
                </p>
                <div className="flex justify-center gap-4 pt-10">
                    <button className="bg-white hover:bg-[#CCCCCC] text-[#0a0a0a] py-3 px-5 rounded-md focus:outline-none ">
                        <Link href='#contact'>Contact Me</Link>
                    </button>
                        <a href="/myresume.pdf" download="myresume.pdf">
                            <button className="bg-black border border-[#242424] text-white py-3 px-5 rounded-md hover:bg-[#1F1F1F] hover:text-white focus:outline-none ">Download Resume</button>
                        </a>
                </div>
            </div>
        </section>
    )
}

export default about