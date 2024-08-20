// components/AnimatedSparkle.js
"use client";  // Mark this file as a client component

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedSparkle = ({ height = '7em', width = '7em', top = '0', left = '0', color = '#fbad1d' }) => {
  const sparkleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(sparkleRef.current, {
      duration: 1.5,
      scale: 1.2,
      rotate: 45,
      opacity: 1,
      ease: 'power2.inOut',
    })
    .to(sparkleRef.current, {
      duration: 1.5,
      scale: 1,
      rotate: 0,
      opacity: 1,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <svg
      ref={sparkleRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ position: 'absolute', height, width, top, left, fill: color }}
    >
      <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"/>
    </svg>
  );
};

export default AnimatedSparkle;
