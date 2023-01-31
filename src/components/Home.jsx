import React from "react";
import HeroImage from "../assets/Untitled design (2).png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-white py-4 max-w-md">
          Hey !!, This is Mouli Bhaskaran. With a year of experience as a Full Stack Developer, I bring technical knowledge and a passion for building effective web applications. Utilizing my skills in JavaScript, React, Node.js, and MongoDB.
          </p>
          <Link to="portfolio" smooth className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-black cursor-pointer">
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
