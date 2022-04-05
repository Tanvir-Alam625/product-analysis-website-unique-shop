import { useEffect, useState } from "react";

const useCustomerData = () => {
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setCustomer(data));
  }, []);
  return [customer, setCustomer];
};
export default useCustomerData;
