// components/HeroSection.js
"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Image from "next/image";
import { Zeyada , Cookie
} from '@next/font/google'


const zeyada = Zeyada({
    weight: "400",
    style: "normal",
    subsets: ['latin'],
  })
const cookie = Cookie({
    weight: "400",
    style: "normal",
    subsets: ['latin'],
  })
const HeroSection = () => {
    const words = [
        {
          text: "THE",
        },
        {
          text: "BEST",
        }
      ];
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1602292678572-16cb94ea0d88?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="7 Spices"
                layout="fill"
                objectFit="cover"
                className="dark:opacity-25 opacity-50"
            />
           
            <div className="absolute inset-0 flex flex-col items-center justify-center text-3xl md:text-5xl lg:text-8xl">
                <h1 className={`italic text-center font-mono ${cookie.className}`}>WE SERVE</h1>
                <h2 className={`font-extrabold bg-orange-500 pl-2 rounded-md`}> <TypewriterEffectSmooth words={words}/></h2>
                <h2 className={`font-extrabold text-orange-400`}>FOOD</h2>
            </div>
        </div>
    );
};

export default HeroSection;
