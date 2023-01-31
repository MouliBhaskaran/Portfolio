import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png"


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-sky-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-indigo-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-cyan-500",
    },
    {
      id: 7,
      src: node,
      title: "NODE",
      style: "shadow-lime-500",
    },

    {
      id: 8,
      src: mongodb,
      title: "MONGODB",
      style: "shadow-green-600",
    },
    {
      id: 9,
      src: express,
      title: "EXPRESS",
      style: "shadow-white",
    },
  ];
  return (
    
    <div
      name="experience"
      className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-black p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} bg-black`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
