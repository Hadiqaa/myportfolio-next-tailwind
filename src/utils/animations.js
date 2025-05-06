"use client";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Funky text reveal animation
export const textRevealAnimation = (element, delay = 0) => {
  const chars = element.querySelectorAll('.char');
  
  gsap.fromTo(chars, 
    { 
      opacity: 0, 
      y: 20, 
      rotateX: -90 
    },
    { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      stagger: 0.03,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: delay
    }
  );
};

// Split text into characters for animation
export const splitTextIntoChars = (element) => {
  if (!element) return;
  
  const text = element.textContent;
  element.textContent = '';
  
  [...text].forEach(char => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.className = 'char inline-block';
    element.appendChild(span);
  });
};

// Staggered entrance animation for multiple elements
export const staggeredEntrance = (elements, direction = 'bottom', delay = 0) => {
  const directionMap = {
    bottom: { y: 50, x: 0 },
    top: { y: -50, x: 0 },
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 }
  };
  
  const { x, y } = directionMap[direction] || directionMap.bottom;
  
  gsap.fromTo(elements, 
    { 
      opacity: 0, 
      x, 
      y 
    },
    { 
      opacity: 1, 
      x: 0, 
      y: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      delay: delay
    }
  );
};

// Funky scroll-triggered animations
export const setupScrollAnimations = () => {
  // Animate elements when they come into view
  gsap.utils.toArray('.scroll-animate').forEach(element => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  });
  
  // Animate headings with a funky twist
  gsap.utils.toArray('.heading-animate').forEach(element => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        scale: 0.8,
        rotate: -5
      },
      { 
        opacity: 1, 
        scale: 1,
        rotate: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  });
  
  // Animate skill items with a staggered effect
  gsap.utils.toArray('.skills-container').forEach(container => {
    const items = container.querySelectorAll('.skill-item');
    
    ScrollTrigger.create({
      trigger: container,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(items, 
          { 
            opacity: 0, 
            y: 20,
            scale: 0.9
          },
          { 
            opacity: 1, 
            y: 0,
            scale: 1,
            stagger: 0.05,
            duration: 0.6,
            ease: "back.out(1.7)"
          }
        );
      }
    });
  });
  
  // Funky parallax effect for decorative elements
  gsap.utils.toArray('.parallax-element').forEach(element => {
    gsap.to(element, {
      y: () => `${(ScrollTrigger.maxScroll(window) * 0.1) * Math.random()}`,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5
      }
    });
  });
};

// Floating animation for elements
export const floatingAnimation = (element, intensity = 1) => {
  gsap.to(element, {
    y: `-=${10 * intensity}`,
    duration: 1.5 + Math.random(),
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
};

// Hover animation for interactive elements
export const setupHoverAnimations = () => {
  // Funky hover effect for buttons
  gsap.utils.toArray('.hover-animate').forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
};

// Cursor trail effect (GenZ style) - DISABLED
export const setupCursorTrail = () => {
  // Function disabled as requested
  return null;
};

// Initialize all animations
export const initializeAnimations = () => {
  // Setup scroll animations
  setupScrollAnimations();
  
  // Setup hover animations
  setupHoverAnimations();
  
  // Setup cursor trail (optional - can be enabled/disabled)
  // const cleanupCursorTrail = setupCursorTrail();
  
  // Split and animate headings
  gsap.utils.toArray('.split-text').forEach(element => {
    splitTextIntoChars(element);
    textRevealAnimation(element);
  });
  
  // Animate floating elements
  gsap.utils.toArray('.float-element').forEach(element => {
    floatingAnimation(element);
  });
  
  // Return cleanup function
  return () => {
    // if (cleanupCursorTrail) cleanupCursorTrail();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
};
