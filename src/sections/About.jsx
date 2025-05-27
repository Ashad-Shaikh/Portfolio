import React, { useRef } from "react";
import Cards from "../components/Cards";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import Frameworks from "../components/Frameworks";
import DownloadResume from "../components/DownloadResume";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1  */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt=""
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Ashad Shaikh</p>
            <p className="subtext">
              A Frontend Devopler with Skills to deliver dynamic and responsive
              website applications
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2  */}
        <div className="grid-default-color grid-2">
          <div
            className="flex items-center justify-center w-full h-full"
            ref={grid2Container}
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Cards
              style={{ rotate: "75deg", bottom: "30%", left: "20%" }}
              text="Grasp"
              containerRef={grid2Container}
            />
            <Cards
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Solid"
              containerRef={grid2Container}
            />
            <Cards
              style={{ rotate: "80deg", bottom: "30%", left: "65%" }}
              text="Design Pattern"
              containerRef={grid2Container}
            />
            <Cards
              style={{ rotate: "15deg", top: "75%", left: "1%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Cards
              style={{ rotate: "30deg", top: "78%", right: "22%" }}
              image="assets/logos/vitejs.svg"
              containerRef={grid2Container}
            />
            <Cards
              style={{ rotate: "-45deg", top: "50%", right: "70%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Cards
              style={{ rotate: "0deg", bottom: "33%", left: "45%" }}
              image="assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3  */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%] flex flex-col gap-5">
            <div>
              <p className="headtext">Time Zone</p>
              <p className="subtext">
                I'm based in Pakistan, and open to remote work worldwide
              </p>
            </div>
            <div className="flex items-start flex-col justify-between">
              <p>Socials</p>
              <p className="flex subtext items-center gap-1">
                <img
                  src="/assets/socials/whatsApp.svg"
                  className="w-4 h-4"
                  alt=""
                />{" "}
                +92 317 0020682
              </p>
              <p className="flex subtext items-center gap-1">
                <img
                  src="/assets/logos/github.svg"
                  className="w-4 h-4 invert-100"
                  alt=""
                />
                Ashad-Shaikh
              </p>
              <p className="flex subtext items-center gap-1">
                <img
                  src="/assets/socials/linkedIn.svg"
                  className="w-4 h-4"
                  alt=""
                />
                Ashad Shaikh
              </p>
            </div>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4  */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
            <DownloadResume />
          </div>
        </div>
        {/* Grid 5  */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks and tools that
              allow me to build robust and scalable web applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
