import TimelineItem from "@/components/timelineitem/TimeLineItem";

const Activities = () => {
    return (
      <main id="work" className="flex min-h-screen-minus-2 flex-col bg-custom-beige ">
        <div className="flex flex-row  w-full ">
        <div className="flex flex-col w-full relative transform -translate-y-[-60%] px-12">
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
             <p className=" font-PlayfairDisplay font-bold title my-7"> Language</p>
             <div className="grid grid-cols-2 gap-4 p-3 justify-center items-center text-2xl">
                <p>English</p>
                <p>Urdu</p>
                <p>Fluent</p>
                <p>Native</p>
             </div>
             <p className="font-PlayfairDisplay font-bold title my-8"> Hobbies & Interests</p>
             <div className="grid grid-cols-4 gap-4 p-3 justify-center items-center text-2xl">
                <p>Icon</p>
                <p>Icon</p>
                <p>Icon</p>
                <p>Icon</p>
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