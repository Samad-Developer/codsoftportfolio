import Navbar from "@/components/navbar";
import About from '@/components/about'
import Skills from '@/components/skills'
import Project from "@/components/project";
import Contact from '@/components/email'
import Footer from '@/components/footer'
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </main>
  );
}
