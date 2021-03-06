import { data } from "autoprefixer";
import React from "react";
import useCustomerData from "../../hooks/useCustomerData";
import Customer from "../Customer/Customer";
import Spinner from "../Spinner/Spinner";

const Reviews = () => {
  const [customer, setCustomer, spinner, setSpinner] = useCustomerData();

  return spinner ? (
    <Spinner />
  ) : (
    <div className="mt-12  px-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center ">
      {customer.map((data) => (
        <Customer key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Reviews;
