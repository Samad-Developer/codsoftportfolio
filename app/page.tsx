import Navbar from "@/components/navbar";
import About from '@/components/about'
import Skills from '@/components/skills'
import Project from "@/components/project";
import Contact from '@/components/email'
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </main>
  );
}
