"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PulsingSparkle = ({ color = 'custom-yellow', width = '60px', height = '60px' }) => {
  const sparkleRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.fromTo(
      sparkleRef.current,
      { scale: 1 },
      {
        scale: 1.3,
        duration: 0.8,
        ease: 'power1.inOut',
      }
    );

    return () => {
      tl.kill(); // Clean up the animation when the component unmounts
    };
  }, []);

  return (
    <svg
      ref={sparkleRef}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 100 100"
      className={`${color}`}
      style={{ width, height }}
    >
      <g>
        <path d="M 45 90 l -7.432 -25.158 c -0.352 -0.92 -0.77 -1.823 -1.246 -2.687 c -0.486 -0.884 -1.04 -1.741 -1.647 -2.55 c -0.607 -0.807 -1.276 -1.578 -1.989 -2.291 c -0.715 -0.714 -1.486 -1.384 -2.292 -1.99 c -0.804 -0.605 -1.662 -1.158 -2.548 -1.646 c -0.862 -0.474 -1.765 -0.893 -2.688 -1.246 L 0 45 l 25.158 -7.432 c 0.918 -0.351 1.822 -0.77 2.687 -1.246 c 0.885 -0.487 1.743 -1.041 2.549 -1.647 c 0.807 -0.607 1.579 -1.276 2.293 -1.99 c 0.712 -0.713 1.382 -1.485 1.989 -2.292 c 0.605 -0.806 1.159 -1.664 1.647 -2.549 c 0.475 -0.865 0.894 -1.769 1.245 -2.687 L 45 0 l 7.432 25.157 c 0.353 0.923 0.771 1.826 1.246 2.686 c 0.489 0.888 1.042 1.746 1.646 2.55 c 0.606 0.806 1.276 1.578 1.991 2.294 c 0.712 0.711 1.483 1.381 2.292 1.989 c 0.808 0.606 1.665 1.16 2.548 1.646 c 0.864 0.475 1.767 0.894 2.687 1.246 L 90 45 l -25.157 7.432 c -0.925 0.353 -1.828 0.772 -2.686 1.245 c -0.887 0.488 -1.745 1.042 -2.551 1.648 c -0.806 0.605 -1.577 1.275 -2.293 1.99 c -0.713 0.714 -1.383 1.485 -1.989 2.292 c -0.606 0.806 -1.16 1.663 -1.645 2.548 c -0.475 0.86 -0.894 1.763 -1.247 2.688 L 45 90 z"/>
      </g>
    </svg>
  );
};

export default PulsingSparkle;






