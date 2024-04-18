import Navbar from "@/components/navbar";
import About from '@/components/about'
import Skills from '@/components/skills'
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <About/>
      <Skills/>
    </main>
  );
}
