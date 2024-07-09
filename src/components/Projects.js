import websiteImg1 from "/Users/hemanthkumar/Documents/MCA/23mx110/portfolio/src/images/pawcare.jpeg";
import websiteImg2 from "/Users/hemanthkumar/Documents/MCA/23mx110/portfolio/src/images/habitsync.jpeg";
// import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {
  return (
    <section
      id="Projects"
      className="flex flex-col py-5 m-20  justify-cente  w-[1000px] mx-auto"
    >
      <div className="justify-center mb-[50px] ">
        <div className="w-1/2  flex-col">
          <p className=" text-[3rem]  text-white   font-[700] mb-[25px] w-[1000px] mx-auto text-3xl ">
            <b>Projects</b>
          </p>

          <p className="font-hero-font text-gray-400">These are the projects</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex px-10  gap-20">
          <div className="relative">
            <img className="h-[300px] w-[300px]" src={websiteImg1}></img>
            <div className="absolute left-0 right-0 bottom-6 top-[0px] px-2 py-2 opacity-0 hover:opacity-100 biam bg-hero-pattern bg-cover bg-center bg-no-repeat">
              <p className="text-center">
                The PawCar web-based pet adoption platform
              </p>
            </div>

            <p className="text-center font-hero-font mt-3">PAWCARE</p>
          </div>
          <div className="relative">
            <img className="h-[300px] w-[300px] " src={websiteImg2}></img>
            <div className="absolute left-0 right-0 bottom-6 top-[0px] px-2 py-2 opacity-0 hover:opacity-100 bg-hero-pattern bg-cover bg-center bg-no-repeat">
              <p className="text-center">
                The HabitSync mobile app designed for users schedule events,
                track habits, and view habit analysis to improve general
                well-being.
              </p>
            </div>
            <p className="text-center font-hero-font mt-3">HABITSYNC</p>
          </div>
        </div>
      </div>
    </section>
  );
}
