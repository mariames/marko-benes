"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [blogOpen, setBlogOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement | null>(null);

    const handleOutsideClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setBlogOpen(false);
        }
    };

    const handleItemClick = () => {
        // Close navbar and blog dropdown if open
        setNavbar(false);
        setBlogOpen(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <nav className="w-full bg-transparent shadow z-50">
            <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/" onClick={handleItemClick} className="flex flex-row">
                            <Image
                                src="/logo.svg"
                                width={200}
                                height={50} 
                                className=" object-contain"
                                alt="Marko Benis" />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                                aria-label={navbar ? "Close menu" : "Open menu"}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    {/** className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0" */}
                    <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
                        <li className="text-gray-700 hover:text-gray-950">
                            <Link href="/collaborate" onClick={handleItemClick}>
                                Collaborate
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-gray-950">
                            <Link href="/about" onClick={handleItemClick}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="text-gray-700 hover:text-gray-950">
                            <Link href="/about" onClick={handleItemClick}>
                                About
                            </Link>
                        </li>
                        <li className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setBlogOpen(!blogOpen)}
                                className="flex items-center text-gray-700 hover:text-gray-950"
                            >
                                Services
                                <svg
                                    className={`ml-1 w-4 h-4 transform ${
                                        blogOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    blogOpen ? "max-h-72 w-80 mt-5 -ml-4 p-1" : "max-h-0"
                                } md:absolute md:left-0 md:z-10 md:min-w-[16rem] md:max-w-[24rem] md:w-auto`}
                            >
                                <ul
                                    className={`bg-slate-950 shadow-lg z-50 ${
                                        blogOpen ? "opacity-100" : "opacity-0"
                                    } transition-opacity duration-300`}
                                >
                                    <li>
                                        <Link
                                            href="/posture/foot"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-400 hover:text-slate-200"
                                        >
                                            Labels and Packaging
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/posture/knee"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-400 hover:text-slate-200"
                                        >
                                            Posters and Flyers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/posture/spinal/lower-back"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-400 hover:text-slate-200"
                                        >
                                            Billboards & Roll Ups
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/posture/spinal/shoulders-and-head"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-400 hover:text-slate-200"
                                        >
                                            Vehicle Branding
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/posture/muscleimbalance"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-400 hover:text-slate-200"
                                        >
                                            Promo Booths
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/posture/muscleimbalance"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-400 hover:text-slate-200"
                                        >
                                            Shelves
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/posture/muscleimbalance"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-400 hover:text-slate-200"
                                        >
                                            Logo
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/posture/muscleimbalance"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-400 hover:text-slate-200"
                                        >
                                            T-shirts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/posture/muscleimbalance"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-400 hover:text-slate-200"
                                        >
                                            Video Animations
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li> 
                        <li className="text-gray-700 hover:text-gray-950">
                            <Link href="/contact" onClick={handleItemClick}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
