import Address from "@/components/address";
import {CardSection} from "@/components/card-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      
      <HeroSection/>
      <CardSection/>
      <Address/>
    </div>
  );
}
