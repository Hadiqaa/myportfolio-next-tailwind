import TimelineItem from "@/components/timelineitem/TimeLineItem";
import './Resume.css';
import SkillBox from "@/components/skillbox/SkillBox";

const Resume = () => {
  return (
    <main id="resume" className="flex min-h-screen-minus-2 bg-custom-green ">
      <div className="w-full flex flex-row  absolute">
        <div className="flex flex-col w-full p-10 ">
          <div className="flex flex-col p-4 my-2 ml-[6.5rem]">
            <p className="text-custom-yellow font-PlayfairDisplay font-bold title  px-12 mb-7"> Education</p>
            <TimelineItem
              dateRange="2023"
              primaryText="Bachelors in Computer Science"
              secondaryText="PUCIT"
              textColor="custom-beige"
              sparkleColor="fill-custom-orange"
            />
            <TimelineItem
              dateRange="2019"
              primaryText="Intermediate in Computer Science"
              secondaryText="Punjab group of Colleges"
              textColor="custom-beige"
              sparkleColor="fill-custom-orange"
            />

          </div>
          <div className="flex flex-col w-[42%]  justify-center bg-custom-yellow absolute experience-box py-12">
            <p className="text-black  font-AbrilFatface title  px-[1.5em] pb-8 leading-none"> Experience</p>
            <div className="flex flex-col pl-10 jusitfy-center">
              <TimelineItem
                dateRange="2025"
                primaryText="Full Stack Developer"
                secondaryText="TinkerByte Labs"
                optionalText="Jan 2025 - Present"
                textColor="black"
                sparkleColor="fill-white"
              />
              <TimelineItem
                dateRange="2024"
                primaryText="Full Stack Developer"
                secondaryText="SociiLabs"
                optionalText="June 2024 - Dec 2024"
                textColor="black"
                sparkleColor="fill-white"
              />
              <TimelineItem
                dateRange="2024"
                primaryText="Associate MERN Stack Developer"
                secondaryText="InvoZone"
                optionalText="Sep 2023 - Dec 2024"
                textColor="black"
                sparkleColor="fill-white"
              />
              <TimelineItem
                dateRange="2023"
                primaryText="MERN Stack Intern"
                secondaryText="InvoZone"
                optionalText="June 2023 - Sep 2023"
                textColor="black"
                sparkleColor="fill-white"
              />
            </div>
            <div className="flex flex-wrap p-3 justify-center items-center w-full">
              <SkillBox value="#Communication" />
              <SkillBox value="#Creativity" />
              <SkillBox value="#Adatptability" />
              <SkillBox value="#Detail-oriented" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-full justify-center relative transform -translate-y-[8%]">
          <div className="pl-[7em]">
            <h1 className="outline text-PlayfairDisplay  font-black ">RESUME</h1>
            <h1 className="outline text-PlayfairDisplay  font-black ">RESUME</h1>
            <h1 className="outline text-PlayfairDisplay  font-black ">RESUME</h1>
          </div>
          <p className="text-custom-yellow title relative top-[-6%] right-[-9%] font-PlayFairDisplay font-bold py-0 leading-none"> Technical Skills</p>
          <div className=" flex flex-col pt-12 pl-[5em]" >
            <div className="grid grid-cols-3 gap-4 py-0 text-custom-beige px-0">
              {/* Languages */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-custom-yellow mb-2">Languages</h3>
                <p className="text-xl">JavaScript</p>
                <p className="text-xl">TypeScript</p>
              </div>

              {/* Styling & UI */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-custom-yellow mb-2">Styling & UI</h3>
                <p className="text-xl">TailwindCSS</p>
                <p className="text-xl">CSS/CSS3</p>
                <p className="text-xl">HeadlessUI/RadixUI</p>
                <p className="text-xl">Figma to Frontend</p>
              </div>

              {/* Backend & API */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-custom-yellow mb-2">Backend & API</h3>
                <p className="text-xl">PostgreSQL</p>
                <p className="text-xl">MongoDB</p>
                <p className="text-xl">ExpressJS</p>
                <p className="text-xl">RESTful API</p>
              </div>

              {/* State Management */}
              <div className="flex flex-col mt-6">
                <h3 className="text-2xl font-bold text-custom-yellow mb-2">State Management</h3>
                <p className="text-xl">Redux Toolkit</p>
                <p className="text-xl">RTK Query</p>
              </div>

              {/* Frameworks & Libraries */}
              <div className="flex flex-col mt-6">
                <h3 className="text-2xl font-bold text-custom-yellow mb-2">Frameworks</h3>
                <p className="text-xl">ReactJS</p>
                <p className="text-xl">NextJS</p>
                <p className="text-xl">NodeJS</p>
                <p className="text-xl">React Native</p>
              </div>

              {/* Animation & Tools */}
              <div className="flex flex-col mt-6">
                <h3 className="text-2xl font-bold text-custom-yellow mb-2">Animation & Tools</h3>
                <p className="text-xl">GSAP</p>
                <p className="text-xl">Particle.js</p>
                <p className="text-xl">Postman</p>
                <p className="text-xl">Sequelize</p>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-row flex-wrap  pl-[4em]">
            <SkillBox value="Web-Development" />
            <SkillBox value="UI/UX" />
            <SkillBox value="MERN Stack Development" />
            <SkillBox value="Responsive Design" />
            <SkillBox value="API Development" />
            <SkillBox value="Github" />
            <SkillBox value="Accessible Design" />
          </div> */}
        </div>

      </div>
    </main>
  );
};

export default Resume;