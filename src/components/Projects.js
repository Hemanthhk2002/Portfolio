import websiteImg1 from "/Users/hemanthkumar/Documents/MCA/23mx110/portfolio/src/images/pawcare.jpeg";
import websiteImg2 from "/Users/hemanthkumar/Documents/MCA/23mx110/portfolio/src/images/habitsync.jpeg";
import websiteImg3 from "../images/dweb.jpeg";

export default function Projects() {
  return (
    <section
      id="Projects"
      className="flex flex-col py-5 m-20  justify-center  w-[1100px] mx-auto bg-black  border-white border-2 border-solid  shadow-lg shadow-zinc-400 "
    >
      <div className="justify-center mb-[50px] text-center">
        <div className=" flex-col">
          <p className=" text-5xl  text-white   font-[700] mb-[25px] w-[1000px] mx-auto">
            <b>PROJECTS</b>
          </p>

          <p className=" text-gray-400">
            These are my projects works, Check them out{" "}
          </p>
        </div>
      </div>
      <div className="w-full justify-evenly">
        <div className="flex px-10 justify-evenly gap-20">
          <a href="https://github.com/Hemanthhk2002/PAWCARE">
            <div className="relative">
              <img className="h-[300px] w-[300px]" src={websiteImg1}></img>
              <div
                class="p-image"
                className="absolute left-0 right-0 bottom-6 top-0 px-2 py-2 opacity-0 hover:border-white border-solid  hover: hover:opacity-100 bg-hero-pattern bg-cover bg-center bg-no-repeat"
              >
                <p className=" flex text-center text-xl mt-24">
                  The PawCar web-based pet adoption platform
                </p>
              </div>

              <p className="text-center font-hero-font mt-3">PAWCARE</p>
            </div>
          </a>

          <a href="https://github.com/Hemanthhk2002/daily-planner">
            <div className="relative">
              <img className="h-[300px] w-[300px] " src={websiteImg2}></img>
              <div className="absolute left-0 right-0 bottom-6 top-[0px] px-2 py-2 opacity-0 hover:opacity-100 bg-hero-pattern bg-cover bg-center bg-no-repeat">
                <p className="text-center text-xl mt-16">
                  The HabitSync mobile app designed for users schedule events,
                  track habits, and view habit analysis to improve general
                  well-being.
                </p>
              </div>
              <p className="text-center font-hero-font mt-3">HABITSYNC</p>
            </div>
          </a>
          <a href="https://github.com/Hemanthhk2002/Dynamic_Webpage">
            <div className="relative">
              <img className="h-[300px] w-[300px] " src={websiteImg3}></img>
              <div className="absolute left-0 right-0 bottom-6 top-[0px] px-2 py-2 opacity-0 hover:opacity-100 bg-hero-pattern bg-cover bg-center bg-no-repeat">
                <p className="text-center text-xl mt-20">
                  Created a dynamic webpage Using HTML, CSS, JavaScript for
                  teaching DOM in JavaScript.
                </p>
              </div>
              <p className="text-center font-hero-font mt-3">DYNAMIC WEBPAGE</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
