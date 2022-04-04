import React from "react";
import Slider from "../sand-removebg-preview.png";
const Home = () => {
  return (
    <div className="flex justify-center  flex-col items-center mt-12">
      <div className="slider max-w-screen-lg flex flex-col lg:flex-row justify-between items-center px-8">
        {/* slider information  */}
        <div className="slider-info w-full lg:w-1/2 order-2 lg:order-1">
          <h2 className="text-6xl">
            Metal Decorative <br />
            <span className="text-purple-600">Sand Timer Hourglass</span>
          </h2>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem velit minima dolorem inventore quam nam enim
            consequatur quidem corrupti! Maiores dolores quibusdam magni
            necessitatibus repudiandae consectetur illo dolore nisi iusto.
          </p>
          <button className="py-2 px-6 bg-purple-400 mt-4 rounded font-semibold text-xl hover:bg-purple-500 duration-200 hover:text-white">
            Live Now
          </button>
        </div>
        {/* slider image  */}
        <div className="slider-img w-full lg:w-1/2 order-1 lg:order-2">
          <img src={Slider} alt="slider-img" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
