import ResumeImg from "/Users/hemanthkumar/Documents/MCA/23mx110/portfolio/src/images/resumeimg.png";

export default function Resume() {
  const config = {
    link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:74b05de0-c92a-4be1-9b59-f8181ed25e59",
  };

  return (
    // <section id="Resume" className="flex flex-col md:flex-row px-5">
    //   <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
    //     <img className="w-[300px]" src={ResumeImg} />
    //   </div>
    //   <div className="md:w-1/2 flex justify-center">
    //     <div className="flex flex-col justify-center text-white">
    //       <h1 className="text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold">
    //         Resume
    //       </h1>
    //       <p className="pb-5">
    //         You can view my resume{" "}
    //         <a className="btn" href={config.link} download>
    //           {" "}
    //           Download
    //         </a>
    //       </p>
    //       <h1 className="text-2xl border-b-3 border-primary mb-5 w-[140px] p font-bold">
    //         Contact
    //       </h1>
    //     </div>
    //   </div>
    // </section>

    <section class="">
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-52">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          ABOUT ME
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Hello, I'm Hemanth Kumar, currently a student at PSG College,
          specializing as a full-stack developer. My expertise spans MongoDB,
          React.js, Node.js, Express.js, HTML, CSS, and I am skilled in using
          Tailwind CSS and Bootstrap.
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:74b05de0-c92a-4be1-9b59-f8181ed25e59"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            resume
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
