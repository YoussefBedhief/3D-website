import AboutSection from "@/components/AboutSection"
import AirUpModel from "@/components/AirUpModel"
import DisplaySection from "@/components/DisplaySection"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-3 bg-[#121117] ">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DisplaySection />
      <AirUpModel />
    </main>
  )
}
