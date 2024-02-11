import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black items-center justify-between p-24 container mx-auto px-12">
      <HeroSection />
    </main>
  );
}
