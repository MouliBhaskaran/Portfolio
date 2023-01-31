import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          With a strong foundation in HTML, CSS, JavaScript, React, Node and
          MongoDB, I craft dynamic and user-friendly web applications that meet
          the high standards for functionality and performance. With a focus
          on delivering exceptional results, I bring a creative and
          solutions-focused approach to every project.
        </p>
        <br />
        <p className="text-xl">
          My experience across a range of projects and industries, combined with
          my commitment to staying up-to-date with the latest technologies and
          best practices, allows me to bring unique and innovative solutions to
          every project. Whether working independently or as part of a team, I
          am dedicated to delivering top-quality software solutions that exceed
          client expectations. I am always eager to take on new challenges and
          bring my expertise to bear in creating amazing digital experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
