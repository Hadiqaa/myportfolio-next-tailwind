"use client";
import { useRef } from "react";
import About from "@/pages/about/About";
import HomePage from "../pages/homepage/HomePage";
import Resume from "@/pages/resume/Resume";
import Activities from "@/pages/activities/Activities";
import Rocket from "@/components/rocket/Rocket"; // Import the Rocket component

export default function Home() {
  // Define references for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const activitiesRef = useRef(null);

  // Array of section references
  const sections = [homeRef, aboutRef, resumeRef, activitiesRef];

  return (
    <main>
      {/* Rocket Component */}
      <Rocket sections={sections} /> {/* Pass section refs to the Rocket component */}

      {/* Sections with refs for scrolling */}
      <section ref={homeRef}>
        <HomePage />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={resumeRef}>
        <Resume />
      </section>

      <section ref={activitiesRef}>
        <Activities />
      </section>
    </main>
  );
}
