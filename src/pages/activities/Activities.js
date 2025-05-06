import TimelineItem from "@/components/timelineitem/TimeLineItem";
import { FaLaptopCode, FaCat, FaBook, FaPaintbrush } from "react-icons/fa6";
import { IoLogoOctocat } from "react-icons/io5";
import SkillBox from "@/components/skillbox/SkillBox";

const Activities = () => {
  return (
    <main id="work" className="flex min-h-screen-minus-2 flex-col bg-custom-beige ">
      <div className="flex flex-row  w-full ">
        <div className="flex flex-col w-full relative transform -translate-y-[-57%] ">
          <div className="flex flex-col justify-center items-start mx-auto">
            <p className="text-black font-PlayfairDisplay font-bold title px-0 mb-2 ">Activities</p>
            <TimelineItem
              dateRange="2019"
              primaryText="Bachelors in Computer Science"
              secondaryText="PUCIT"
              textColor="black"
              sparkleColor="fill-custom-orange"
            />
            <TimelineItem
              dateRange="2019"
              primaryText="Intermediate in Computer Science"
              secondaryText="Punjab group of Colleges"
              textColor="black"
              sparkleColor="fill-custom-orange"
            />
          </div>
        </div>

        <div className="flex flex-col text-black w-full px-[5em]  mt-4">
          <div className="flex flex-row flex-wrap">
            <SkillBox value="Web-Development" />
            <SkillBox value="UI/UX" />
            <SkillBox value="MERN Stack Development" />
            <SkillBox value="Responsive Design" />
            <SkillBox value="API Development" />
            <SkillBox value="Github" />
            <SkillBox value="Accessible Design" />
          </div>
          <p className="font-PlayfairDisplay font-bold title my-8"> Hobbies & Interests</p>
          <div className="grid grid-cols-4 gap-4 p-3 justify-center items-center text-2xl">
            <p><FaLaptopCode className="text-5xl text-custom-maroon" /></p>
            <p><FaBook className="text-4xl text-custom-maroon" /></p>
            <p><FaPaintbrush className="text-4xl text-custom-maroon" /></p>
            <p><IoLogoOctocat className="text-4xl text-custom-maroon" /></p>
            <p>Coding</p>
            <p>Reading</p>
            <p>Painting</p>
            <p>Cat, Cat and Cat </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Activities;