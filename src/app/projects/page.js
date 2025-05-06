"use client";
import { useEffect } from 'react';
import Projects from '@/pages/projects/Projects';
import { initializeAnimations } from "@/utils/animations";

export default function ProjectsPage() {
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
      <Projects />
    </main>
  );
}
