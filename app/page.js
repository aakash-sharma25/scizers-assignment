import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallary from "./components/Gallary";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <Gallary/>
      <Footer/>
    </div>
  );
}
