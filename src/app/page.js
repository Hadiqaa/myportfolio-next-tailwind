import About from "@/pages/about/About";
import HomePage from "../pages/homepage/HomePage";
import Resume from "@/pages/resume/Resume";
import Work from "@/pages/work/Work";


export default function Home() {
  return (
    <main >
       <HomePage/>
       <About />
       <Resume/>
       <Work/>
    </main>
  );
}
