
import Image from 'next/image';
import './HomePage.css';
import AnimatedSparkle from '@/components/sparkle/animatedsparkle';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const HomePage = () => {
  // Create refs for animated elements
  const portfolioTextRef = useRef(null);
  const profileImageRef = useRef(null);
  const aboutTextRef = useRef(null);
  const socialLinksRef = useRef(null);
  
  useEffect(() => {
    // Staggered animation for portfolio text
    // const portfolioTexts = portfolioTextRef.current.querySelectorAll('h1, p');
    // gsap.fromTo(portfolioTexts, 
    //   { opacity: 0, y: -50, scale: 0.9 },
    //   { 
    //     opacity: 1, 
    //     y: 0, 
    //     scale: 1,
    //     stagger: 0.15,
    //     duration: 1.2,
    //     ease: "elastic.out(1, 0.5)"
    //   }
    // );
    
    // Entrance animation for profile image
    gsap.fromTo(profileImageRef.current,
      { opacity: 0, scale: 0.8, rotation: -5 },
      { 
        opacity: 1, 
        scale: 1, 
        rotation: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: 0.3
      }
    );
    
    
    // Social links animation
    const socialLinks = socialLinksRef.current.querySelectorAll('p');
    gsap.fromTo(socialLinks,
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        delay: 1
      }
    );
    
    // Add floating animation to profile image
    gsap.to(profileImageRef.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-30 bg-custom-green ">
      <div  className="max-w-5xl w-full flex flex-col items-center justify-between lg:flex-wrap absolute">
        <h1 className="font-AbrilFatface italic portfolio-text text-custom-beige z-30 heading-animate">PORTFOLIO</h1>
        <h1 className="font-AbrilFatface italic portfolio-text text-shadow text-custom-green heading-animate">PORTFOLIO</h1>
        <p className="font-PlayfairDisplay font-black italic portfolio-text text-shadow text-custom-green heading-animate">PORTFOLIO</p>
        <p className="font-PlayfairDisplay font-extrabold italic portfolio-text text-custom-green text-shadow heading-animate">PORTFOLIO</p>
      </div>
      <div className='flex flex-row w-full flex-1'>
        <div>
          <div ref={profileImageRef} className='custom-box relative'>
            <Image src="/images/menobg.png" alt="Profile" fill className="object-cover" />
            <div>
              <AnimatedSparkle height="10em" width="10em" top="2%" left="-15%" color="#fbad1d" className="parallax-element" />
              <AnimatedSparkle height="5em" width="5em" top="90%" left="90%" color="#fbad1d" className="parallax-element" />
            </div>
          </div>
          <div className='max-w-xl z-40 about-me' style={{ position: 'absolute', top: '85%', left: '3%', opacity: 1 }}>
            <p className='text-white font-NATS text-3xl leading-none'>I love coding, and I craft solutions with a blend of logic and creativity. I transform complex problems into clean, efficient code, always aiming for the most elegant and functional outcome.</p>
          </div>
        </div>
        <div ref={socialLinksRef} className='info-box bg-custom-green flex flex-col justify-center pl-4'>
          <a href="https://www.linkedin.com/in/hadiqaa" target="_blank" rel="noopener noreferrer" className="hover-animate">
            <p className='text-custom-beige font-NATS text-5xl pl-4'>LI: /in/hadiqaa</p>
          </a>
          <a href="https://github.com/hadiqaa" target="_blank" rel="noopener noreferrer" className="hover-animate">
            <p className='text-custom-beige font-NATS text-5xl pl-4'>GH: /hadiqaa</p>
          </a>
        </div>
      </div>

    </main>
  );
};

export default HomePage;

