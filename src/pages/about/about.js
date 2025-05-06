import './About.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
   // Create refs for the animated elements
   const birthDateRef = useRef(null);
   const countryRef = useRef(null);
   
   useEffect(() => {
      // Animation for birth date (left to right and back)
      gsap.to(birthDateRef.current, {
         x: 410, // Move 100px to the right
         duration: 2.6,
         ease: "power1.inOut",
         repeat: -1, // Infinite repetition
         yoyo: true, // Go back to the original position
      });
      
      // Animation for country (right to left and back)
      gsap.to(countryRef.current, {
         x: -420, // Move 100px to the left
         duration: 2.4, // Slightly different duration for varied effect
         ease: "power1.inOut",
         repeat: -1, // Infinite repetition
         yoyo: true, // Go back to the original position
      });
   }, []);
   return (
      <main id="about" className="flex min-h-screen flex-col items-center justify-center  p-30 bg-custom-beige">
         <div className=' w-full flex flex-row items-center  '>
            <div className='flex flex-col px-12 items-center justify-center w-[50%] ml-6'>
               <div className='flex flex-col w-[76%]'>
                  <p className='intro-text text-black font-AbrilFatface italic leading-[1.2] px-8'>Hello, </p>
                  <p className='intro-text text-black font-AbrilFatface italic leading-[1.2] px-8'>I'm Hadiqa!</p>
                  <p className='text-[27px] text-black font-NATS px-8 py-10  text-justify'>
                     A Full Stack Developer with 2 years of experience delivering dynamic, high-impact web applications. I’ve led
                     the frontend development and API integration for an AI tools directory app, building scalable, role-based
                     dashboards and seamless user experiences.<br /> My work spans full-stack platforms, from backend API
                     development to creating intuitive UI flows. I specialize in turning complex problems into elegant, efficient
                     solutions. Passionate about clean code, speed, and impact, I bring both technical depth and product intuition
                     to every team I join. </p>
               </div>
               <a href="https://www.linkedin.com/in/hadiqaa" className="block bg-custom-maroon/90 text-white p-5 text-4xl font-NATS text-center rounded-[40px] w-[70%]">
                  linkedin.com/in/hadiqaa/ </a>

            </div>
            <div className='relative transform -translate-y-[-34%] contact-box'>
               <div className='bg-custom-green h-[60%] picture-box flex flex-col items-center  justify-center'>
                  <p ref={birthDateRef} className="bg-custom-yellow text-white p-4 rounded-3xl font-NATS z-10 absolute text-center birth-box">8 October 2000</p>
                  <p ref={countryRef} className="bg-custom-yellow text-white p-4 rounded-3xl font-NATS z-10 absolute text-center pak-box">Pakistan</p>
                  <div className="absolute bg-custom-beige w-[70%] h-[50%] rounded-full">
                  </div>
               </div>
               <div className='bg-black h-[40%] flex flex-col pt-10 px-10 '>
                  <h1 className="font-AbrilFatface italic contact-text text-custom-beige px-10">CONTACT</h1>
                  <p className='text-custom-beige font-NATS text-4xl leading-none px-10 py-2 pt-4'>Hadiqasumbal34@gmail.com</p>
                  <p className='text-custom-beige font-NATS text-4xl leading-none px-10 py-2'>Lahore, Pakistan</p>
               </div>
            </div>
         </div>
      </main>
   )
}

export default About;