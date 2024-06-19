"use client"
import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallary from "./components/Gallary";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <div>
      <Hero/>
      <Features/>
      <Gallary/>
      <Footer/>
    </div>
  );
}
