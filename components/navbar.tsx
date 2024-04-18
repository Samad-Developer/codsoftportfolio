'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import navigation, { NavItem } from '@/utils/data';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex justify-between items-center sm:px-14 px-7 py-3 bg-[#000000] text-[white] fixed top-0 w-full z-50 border-b border-[#333333]">
            <Link href="/" className="text-xl font-bold">
                Abdus Samad
            </Link>
            <nav className="hidden md:flex space-x-4">
                <ul className="flex space-x-4 text-center text-[#D8D8D8]">
                    {
                        navigation.map((link: NavItem) => (
                            <Link href={link.href} onClick={toggleMenu} className="">
                                <li className='text-[14px] text-[#8e8e8e] hover:text-white'>
                                    {link.title}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </nav>
            <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </>
                    )}
                </svg>
            </button>
            {/* Mobile Navigation Menu (off-canvas) */}
            <nav
                className={`fixed top-[53px] left-0 w-full h-full bg-[#000000]  transition-all duration-300 ease-in-out transform ${isOpen ? '-translate-x-0' : '-translate-x-full'
                    }`}
            >
                <ul className="flex flex-col space-y-4 pt-8 pl-4 text-center text-white">
                    {
                        navigation.map((link: NavItem) => (
                            <Link href={link.href} onClick={toggleMenu} className="hover:text-gray-400">
                                <li>
                                    {link.title}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
