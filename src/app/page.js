"use client";
import { useRef, useEffect } from "react";
import About from "@/pages/about/About";
import HomePage from "../pages/homepage/HomePage";
import Resume from "@/pages/resume/Resume";
import Activities from "@/pages/activities/Activities";
import { initializeAnimations } from "@/utils/animations";
import Rocket from "@/components/rocket/Rocket"; // Import the Rocket component

export default function Home() {
  // Define references for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const activitiesRef = useRef(null);

  // Array of section references
  const sections = [homeRef, aboutRef, resumeRef, activitiesRef];

  // Initialize animations when the component mounts
  useEffect(() => {
    // Add a small delay to ensure the DOM is fully loaded
    const timeoutId = setTimeout(() => {
      // Initialize all the cool animations
      const cleanup = initializeAnimations();
      
      // Return cleanup function
      return () => {
        cleanup();
      };
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main>
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
