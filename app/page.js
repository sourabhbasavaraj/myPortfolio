import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black items-center justify-between p-24 ">
      <div className="container mx-auto px-12"> 
        <HeroSection />
      </div>
    
    </main>
  );
}
