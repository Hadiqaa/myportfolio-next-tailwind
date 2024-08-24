import './About.css';

const About = () => {
  return (
    <main id="about" className="flex min-h-screen flex-col items-center justify-center  p-30 bg-custom-beige">
       <div className=' w-full flex flex-row items-center    absolute'>
          <div className='flex flex-col px-12 flex-start justify-center w-[50%]'>
             <p className='intro-text text-black font-AbrilFatface italic leading-[1.2] px-8'>Hello,</p>
             <p className='intro-text text-black font-AbrilFatface italic leading-[1.2] px-8'>I'm Hadiqa!</p>
             <p className='text-3xl text-black font-NATS px-8 py-10'>
                    Beneath the sky so vast and blue,
                    A gentle breeze begins to stir,
                    Whispers of dreams both old and new,
                    In fields where golden flowers blur.

                    The river sings a soft refrain,
                    As twilight paints the world in hue,
                    Night descends with stars that reign,
                    In the quiet, a promise renews.
                    The river sings a soft refrain,
                    As twilight paints the world in hue,
                    Night descends with stars that reign,
                    In the quiet, a promise renews. </p>
             <p className="bg-custom-maroon text-white p-4 text-4xl font-NATS text-center linkedin-box mx-8 mt-10"> linkedin.com/in/hadiqaa/</p>
          </div>
          <div className='absolute contact-box'>
               <div className='bg-custom-green h-[60%] picture-box flex flex-col items-center  justify-center'>
                  <p className="bg-custom-yellow text-white  p-4 rounded-3xl font-NATS z-10 absolute text-center birth-box">8 October 2000</p>
                  <p className="bg-custom-yellow text-white  p-4 rounded-3xl font-NATS z-10 absolute text-center pak-box">Pakistan</p>
                  <div className="absolute bg-custom-beige w-[70%] h-[50%] rounded-full">
                  </div>
               </div>
               <div className='bg-black h-[40%] flex flex-col pt-10 px-10 '>
                  <h1 className="font-AbrilFatface italic contact-text text-custom-beige px-10">CONTACT</h1>
                  <p className='text-custom-beige font-NATS text-4xl leading-none px-10 py-2 pt-4'>hadiqasumbal34@gmail.com</p>
                  <p className='text-custom-beige font-NATS text-4xl leading-none px-10 py-2'>Lahore, Pakistan</p>
               </div>
          </div>
       </div>
    </main>
  )
}

export default About;