import React from "react";
import nationalize from "../assets/portfolio/nationalize.png";
import reactWeather from "../assets/portfolio/reactWeather.png";
import way2speed from "../assets/portfolio/way2speed.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: nationalize,
      demo: "https://webcode-nationalize-api-mouli.netlify.app/",
      code: "https://github.com/MouliBhaskaran/Guvi-Tasks-Webcode-1",
    },
    {
      id: 2,
      src: reactWeather,
      demo: "https://weather-app-mouli.netlify.app/",
      code: "https://github.com/MouliBhaskaran/react-weather-app.git",
    },
    {
      id: 3,
      src: way2speed,
      demo: "https://github.com/MouliBhaskaran/ecommerce.git",
      code: "https://github.com/MouliBhaskaran/ecommerce.git",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg bg-black "
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-30 mt-4"
              />
              <div className="flex items-center justify-center bg-black opacity-4">
                <button
                  onClick={(event) => window.open(demo, "_blank")}
                  className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  border border-white  "
                >
                  Live
                </button>
                <button
                  onClick={(event) => window.open(code, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border border-white"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
