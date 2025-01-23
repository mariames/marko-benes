"use client";

import Image from "next/image";
import React from "react";

const logos = [
  { src: "/logos/Kosili.svg", alt: "Kosili", width: 150, height: 150 },
  { src: "/logos/Dobra-ovsena-kasa.svg", alt: "Dobra Ovsena Kasa", width: 100, height: 100 },
  { src: "/logos/Holly.svg", alt: "Holly", width: 100, height: 100 },
  { src: "/logos/LMX-TOX.svg", alt: "LMX TOX", width: 100, height: 100 },
  { src: "/logos/Deft.svg", alt: "Deft", width: 100, height: 100 },
  { src: "/logos/Unit.svg", alt: "Unit", width: 100, height: 100 },
  { src: "/logos/Posh-33.svg", alt: "Posh 33", width: 100, height: 100 },
  { src: "/logos/Maximalium.svg", alt: "Maximalium", width: 100, height: 100 },
  { src: "/logos/Petroland.svg", alt: "Petroland", width: 100, height: 100 },
  { src: "/logos/Petster.svg", alt: "Petster", width: 100, height: 100 },
  { src: "/logos/Gentlemens-club.svg", alt: "Gentlemen's Club", width: 100, height: 100 },
  { src: "/logos/Terminal-festival.svg", alt: "Terminal Festival", width: 100, height: 100 },
];

const Logos = () => {
  return (
    <div className="bg-black">
        <p className="text-3xl text-white text-center py-10">
            Dedicated to brands that embody 
            <span className="font-semibold">&nbsp;quality&nbsp;</span> 
                and 
            <span className="font-semibold">&nbsp;purpose</span>
            
        </p>
        <div className="bg-black flex justify-center items-center min-h-screen relative">
        {/* Grid Container */}
        <div className="relative grid grid-cols-4 gap-4 w-[80vw] lg:h-[90vh] md:h-[80vh]">
            {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center p-5 border-2 border-transparent  transition-all duration-300">
                <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    width={logo.width} 
                    height={logo.height}
                    className="opacity-80 hover:opacity-100" />
            </div>
            ))}
        </div>

        {/* Grid Lines with Fading Effect */}
        <div className="absolute inset-0 pointer-events-none">
            {/* Vertical Lines with gradient opacity */}
            <div className="absolute top-0 bottom-0 left-[25%] w-px bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-0 animate-fadeIn"></div>
            <div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-0 animate-fadeIn"></div>
            <div className="absolute top-0 bottom-0 left-[75%] w-px bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-0 animate-fadeIn"></div>

            {/* Horizontal Lines with gradient opacity */}
            <div className="absolute left-0 right-0 top-[33.33%] h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 animate-fadeIn"></div>
            <div className="absolute left-0 right-0 top-[66.66%] h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 animate-fadeIn"></div>
        </div>

        {/* Tailwind Custom Styles */}
        <style jsx global>{`
            @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
            }
            .animate-fadeIn {
            animation: fadeIn 2s ease-in forwards;
            }
        `}</style>
        </div>
    </div>
  );
};

export default Logos;
