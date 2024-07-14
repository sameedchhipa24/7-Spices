"use client"
import logo from "@/../public/assest/logo.jpeg"
import Image from "next/image"
import { Facebook, Instagram, LucideContact2, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"


export default function Navbar() {
    const { setTheme } = useTheme()
    return (
        <div  className="fixed top-0 w-screen z-50">
            <nav>
                {/* Start 2  Navbar Link  */}
                <div className="flex items-center justify-around gap-x-2 py-2 md:py-4">
                    <ul className="md:flex items-center justify-between hidden gap-x-16 px-12 font-bold italic">
                        
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/about"}>About</Link></li>
                    </ul>
                    {/* Image */}
                    <div className="px-4 ">
                        <Image src={logo} alt="alt" width={100} height={100} className="rounded-[4rem] w-full h-full md:w-[120px] md:h-[120px]" />
                    </div>
                    {/* End 2 Navbar Link */}
                    <div className="flex items-center justify-between gap-x-3">
                        <LucideContact2 />
                        <Facebook />
                        <Instagram />
                        <div className="px-4 relative">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setTheme("light")}>
                                        Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                                        Dark
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("system")}>
                                        System
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}
