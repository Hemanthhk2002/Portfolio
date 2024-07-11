import bgimage from "../images/profile.jpeg";
import { IoMdMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

export default function Herio() {
  return (
    <section id="Hero" className="flex px-5 py-32 justify-center gap-12 ">
      <div className="w-1/2 flex flex-col">
        <h1 className=" text-3xl py-20 font-hero-font">
          Hi,
          <br />
          <b className="text-5xl">I am Hemanth Kumar V</b>
          <br />
          <p className="text-2xl text-gray-300">MCA</p>
          <div className="flex gap-5  py-5">
            <a
              className="hover:text-gray-500"
              href="mailto:hemanthkumarv2k02@gmail.com?subject=Hello%20there&body=This%20is%20a%20predefined%20email%20body."
            >
              <IoMdMail />
            </a>

            <a
              className="hover:text-gray-500"
              href="https://www.linkedin.com/in/hemanth-kumar-655b6a235/"
            >
              <IoLogoLinkedin />
            </a>
            <a
              className="hover:text-gray-500"
              href="https://github.com/Hemanthhk2002"
            >
              <IoLogoGithub />
            </a>
          </div>
        </h1>{" "}
      </div>

      <img class="profile rounded-xl border-black   border-4 border-solid  shadow-lg shadow-zinc-400   hover:shadow-xl  hover:border-dotted " src={bgimage} />
    </section>
  );
}
