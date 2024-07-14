"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import Burger from "@/../public/assest/Burger.jpeg"
import Fries from "@/../public/assest/FrenchFries.jpg"
import GrilledChicken from "@/../public/assest/Chicken.webp"

export function CardSection() {
    return (
        <>
            <div className="text-center pt-6">
                <h1 className="inline gap-x-4 bg-orange-500 text-4xl font-extrabold tracking-widest px-8 py-1 rounded-md">
                    Menu
                </h1>

            </div>
            <div className="flex justify-around items-center">
                <CardContainer className="inter-var">
                    <CardBody className="space-y-6 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={Burger}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white bg-orange-400"
                        >
                            Chicken Burger
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Bite into Bliss with Our Juicy Chicken Burger!
                        </CardItem>
                    </CardBody>
                </CardContainer>
                <CardContainer className="inter-var">
                    <CardBody className="space-y-6 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={Fries}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white bg-orange-400"
                        >
                            French Fries
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 "
                        >
                            Crispy, Golden, and Irresistible—Try Our French Fries!
                        </CardItem>
                    </CardBody>
                </CardContainer>
                <CardContainer className="inter-var">
                    <CardBody className="space-y-6 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={GrilledChicken}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white bg-orange-400"
                        >
                            Grilled Chicken
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Savor the Flavor of Our Perfectly Grilled Chicken!
                        </CardItem>
                    </CardBody>
                </CardContainer>
            </div>
        </>
    );
}