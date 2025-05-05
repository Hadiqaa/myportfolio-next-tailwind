import SkillBox from "@/components/skillbox/SkillBox";

const Check = () => {
  return (
    <main id="check" className="flex min-h-screen-minus-2 bg-custom-green ">
      <div className="w-full flex flex-row ">
         <div className="flex flex-col w-full">
            
         </div>

         <div className=" flex flex-col w-full justify-center relative top-[-14%] right-[2%] ">
         <div className="mb-[-5%]">
            <h1 className="outline text-PlayfairDisplay  font-black ">RESUME</h1>
            <h1 className="outline text-PlayfairDisplay  font-black ">RESUME</h1>
            <h1 className="outline text-PlayfairDisplay  font-black ">RESUME</h1>
          </div>
           <p className="text-custom-yellow text-[4em] relative top-[-6%] right-[0%] font-AbrilFatface "> Technical Skills</p>
           <div className=" flex flex-col">
              <p className="text-custom-beige text-4xl font-AbrilFatface  ">Web Development </p>
              <div className="grid grid-cols-4 gap-4 p-3 text-2xl text-custom-beige">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>NodeJS</p>
                <p>ExpressJS</p>
                <p>MongoDB</p>
                <p>PostgreSQL</p>
                <p>ReactJS</p>
                <p>NextJS</p>
                <p>TailwindCSS</p>
              </div>
           </div>
           <div className="flex flex-row flex-wrap p-3 ">
              <SkillBox value="#Communication"/> 
              <SkillBox value="#Creativity"/>
              <SkillBox value="#Adatptability"/>
              <SkillBox value="#Detail-oriented"/>
          </div>
            
         </div>
      
      </div>
    </main>
  );
};

export default Check;