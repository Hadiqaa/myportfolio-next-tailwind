import Sparkle from '@/components/sparkle/sparkle';
import './about.css';
import AnimatedSparkle from '@/components/sparkle/animatedsparkle';


const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-30 bg-custom-green ">
      <div className=" max-w-5xl w-full flex flex-col items-center justify-between font-mono text-sm lg:flex-wrap absolute">
        <h1 className="font-AbrilFatface italic portfolio-text text-custom-beige z-30">PORTFOLIO</h1>
        <h1 className="font-AbrilFatface italic portfolio-text text-shadow text-custom-green ">PORTFOLIO</h1>
        <p className="font-PlayfairDisplay font-black italic portfolio-text text-shadow text-custom-green">PORTFOLIO</p>
        <p className="font-PlayfairDisplay font-extrabold italic portfolio-text text-custom-green text-shadow"> PORTFOLIO</p> 
      </div>
      <div className='flex flex-row w-full flex-1'>
          <div>
            <div className='custom-box'>
              <div>
              <AnimatedSparkle height="10em" width="10em" top="2%" left="-15%" color="#fbad1d" />
              <AnimatedSparkle height="5em" width="5em" top="90%" left="90%" color="#fbad1d" />

              </div>
            </div>
            <div className='max-w-xl z-40 about-me'>
                <p className='text-custom-beige font-NATS text-3xl leading-none '>I love coding, and I craft solutions with a blend of logic and creativity. I transform complex problems into clean, efficient code, always aiming for the most elegant and functional outcome.</p>
            </div>
          </div>
          <div className='info-box bg-custom-green flex flex-col  justify-center pl-4'>
           <a href="https://www.linkedin.com/in/hadiqaa" target="_blank" rel="noopener noreferrer">
              <p className='text-custom-beige font-NATS text-5xl pl-4'>LI: /in/hadiqaa</p>
           </a>
           <a href="https://github.com/hadiqaa" target="_blank" rel="noopener noreferrer">
              <p className='text-custom-beige font-NATS text-5xl pl-4'>GH: /hadiqaa</p>
           </a>
          </div>
      </div>

    </main>
  );
};

export default About;

