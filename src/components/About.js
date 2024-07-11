import abg from "../images/aboutme.jpg";
export default function About() {
  return (
    <section id="About" className="backdrop-filter backdrop-blur-lg ...">
      <div className="flex px-10 py-10 gap-10">
        <div className="w-1/3">
          <img src={abg} />
        </div>
        <div className="w-75 flex justify-center">
          <div className=" flex  flex-col justify-center">
            <h1 className="text-4xl font-hero-font mb-5">
              <b>About Me</b>
            </h1>
            <p className="text-2xl ">
              Hi,Iam hemanth Kumar A highly organized, enthusiastic and
              hard-working individual looking for a responsible career
              opportunity in a reputed organization to utilize the training and
              skills, expand the knowledge and contribute to the success of the
              company.
            </p>

            <p className="text-xl ">
              Iam proficient in fullstack skills like
              mongodb,react.js,node.js,express.js,html,css,tailwind and
              bootstrap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
