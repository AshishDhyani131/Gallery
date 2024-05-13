import React from "react";
import about from "../assets/about.jpg";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import about3 from "../assets/about-3.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 ">
      <div className="h-screen w-screen md:w-auto">
        <img
          src={about}
          alt="image of photographer"
          className="h-full w-full object-cover "
        />
      </div>
      <div className="flex items-center">
        <div className="mx-3 mt-6 ml-5 md:mx-5">
          <h1 className="text-4xl text-white">
            Hello! <br />
            I'm <span className="text-yellow-400">Jeffrey White</span> the CEO
            of Mostudio Photography
          </h1>
          <p className="text-white/25 mt-4">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth. It is a
            paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center mt-4">
              <div className="w-1/4 aspect-square rounded-full bg-about-1 bg-center bg-cover md:w-3/5"></div>
              <h4 className="text-white mt-3 font-semibold text-lg md:text-base">
                John Doe
              </h4>
              <p className="text-white/25 text-sm md:text-xs">Photographer</p>
            </div>
            <div className="flex flex-col items-center mt-4">
              <div className="w-1/4 aspect-square rounded-full bg-about-2 bg-center bg-cover md:w-3/5"></div>
              <h4 className="text-white mt-3 font-semibold text-lg md:text-base">
                John Flex
              </h4>
              <p className="text-white/25 text-sm md:text-xs">Photographer</p>
            </div>
            <div className="flex flex-col items-center mt-4">
              <div className="w-1/4 aspect-square rounded-full bg-about-3 bg-center bg-cover md:w-3/5"></div>
              <h4 className="text-white mt-3 font-semibold text-lg md:text-base">
                John Doe
              </h4>
              <p className="text-white/25 text-sm md:text-xs">Photographer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
