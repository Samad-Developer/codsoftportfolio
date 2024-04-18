import Navbar from "@/components/navbar";
import About from '@/components/about'
import Skills from '@/components/skills'
import Project from "@/components/project";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <About/>
      <Skills/>
      <Project/>
    </main>
  );
}
