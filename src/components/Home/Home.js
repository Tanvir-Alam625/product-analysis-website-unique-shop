import React from "react";
import useCustomerData from "../../hooks/useCustomerData";
import Customer from "../Customer/Customer";
import Slider from "../sand-removebg-preview.png";
const Home = () => {
  const [customer, setCustomer] = useCustomerData();
  const customerData = customer.slice(0, 3);
  console.log(customerData);
  return (
    <div className="flex  flex-col items-center mt-12">
      <div className="slider max-w-screen-lg flex flex-col lg:flex-row justify-between items-center px-2 md:px-4 lg:px-8">
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
      {/* // review section  */}
      <div className="review-container  mt-8 px-2 lg:px-8">
        <h2 className="text-4xl text-center font-semibold">
          Customer Reviews(3)
        </h2>
        <div className="customer w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-screen-lg">
          {customerData.map((data) => (
            <Customer key={data.id} data={data} />
          ))}
        </div>

        <div className="btn flex justify-center">
          <button className="text-center py-2 px-4 bg-purple-500  text-xl rounded  hover:text-white">
            See All Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
