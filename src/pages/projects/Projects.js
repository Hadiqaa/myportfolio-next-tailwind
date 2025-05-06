"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiTypescript } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  // Refs for animations
  const headingRef = useRef(null);
  const featuredProjectRef = useRef(null);
  const projectsGridRef = useRef(null);

  // Mock project data
  const featuredProject = {
    title: "AI Tools Directory",
    description: "A comprehensive directory of AI tools with role-based dashboards and advanced filtering. Features user authentication, admin panel, and real-time analytics.",
    image: "/images/project-featured.png", // You'll need to add this image
    tech: ["Next.js", "TailwindCSS", "MongoDB", "Node.js"],
    liveLink: "https://ai-tools-directory.example.com",
    githubLink: "https://github.com/hadiqaa/ai-tools-directory",
  };

  const projects = [
    {
      title: "Social Media Dashboard",
      description: "A responsive dashboard for managing social media accounts with analytics and scheduling features.",
      image: "/images/project1.png", // You'll need to add this image
      tech: ["React", "Redux", "Firebase", "TailwindCSS"],
      liveLink: "https://social-dashboard.example.com",
      githubLink: "https://github.com/hadiqaa/social-dashboard",
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
      image: "/images/project2.png", // You'll need to add this image
      tech: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
      liveLink: "https://shop-platform.example.com",
      githubLink: "https://github.com/hadiqaa/shop-platform",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/images/project3.png", // You'll need to add this image
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      liveLink: "https://task-manager.example.com",
      githubLink: "https://github.com/hadiqaa/task-manager",
    }
  ];

  // Function to get tech icon
  const getTechIcon = (tech) => {
    switch (tech) {
      case "React":
        return <FaReact className="text-blue-500" />;
      case "Next.js":
        return <SiNextdotjs className="text-black" />;
      case "TailwindCSS":
        return <SiTailwindcss className="text-teal-500" />;
      case "MongoDB":
        return <SiMongodb className="text-green-500" />;
      case "Node.js":
        return <FaNodeJs className="text-green-600" />;
      case "Firebase":
        return <SiFirebase className="text-orange-500" />;
      case "TypeScript":
        return <SiTypescript className="text-blue-600" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    // Animate heading
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "elastic.out(1, 0.5)" }
    );

    // Animate featured project
    gsap.fromTo(featuredProjectRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3 }
    );

    // Animate project cards with staggered effect
    const projectCards = projectsGridRef.current.querySelectorAll('.project-card');
    gsap.fromTo(projectCards,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.5
      }
    );

    // Animate decorative elements
    gsap.fromTo('.circle-decoration',
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        delay: 0.8
      }
    );

    // Add floating animation to blobs
    gsap.to('.blob-decoration', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });
  }, []);

  return (
    <main id="projects" className="min-h-screen bg-custom-beige relative py-32">
      <div className="projects-container w-full">
        {/* Featured Project */}
        <div ref={featuredProjectRef} className="featured-project text-custom-beige w-2/3 flex h-[50vh] bg-custom-green">
          <div className="blob-decoration blob-1"></div>
          <div className="blob-decoration blob-2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="featured-content flex flex-col items-start justify-between">
              <div>
                <h2 className="text-4xl mb-5 font-AbrilFatface">{featuredProject.title}</h2>
                <p className="featured-description font-NATS">{featuredProject.description}</p>
              </div>
              <div>
                <div className="project-tech">
                  {featuredProject.tech.map((tech, index) => (
                    <span key={index} className="tech-tag bg-white/20 text-white">
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links mt-6">
                  <a href={featuredProject.githubLink} target="_blank" rel="noopener noreferrer"
                    className="project-link bg-white/20 text-white hover-animate">
                    <FaGithub /> GitHub
                  </a>
                  <a href={featuredProject.liveLink} target="_blank" rel="noopener noreferrer"
                    className="project-link bg-white/20 text-white hover-animate">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="featured-image">
              {/* Placeholder for project image - you'll need to add actual images */}
              <div className="w-full h-full bg-custom-ligh-beige flex items-center justify-center">
                <p className="text-2xl font-NATS text-custom-maroon">Project Screenshot</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div ref={projectsGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div key={index} className="project-card project-animate bg-custom-green">
              <div className="project-image-container">
                {/* Placeholder for project image */}
                <div className="w-full h-full bg-custom-ligh-beige flex items-center justify-center">
                  <p className="text-xl font-NATS text-custom-maroon">Project Screenshot</p>
                </div>
              </div>

              <div className="project-content text-white">
                <h3 className="project-title text-3xl font-NATS">{project.title}</h3>
                <p className="project-description font-NATS">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag bg-white/20 text-white">
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                    className="project-link bg-white/20 text-white hover-animate">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                    className="project-link bg-white/20 text-white hover-animate">
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
