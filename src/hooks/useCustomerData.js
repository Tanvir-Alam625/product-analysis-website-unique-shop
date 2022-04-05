import { useEffect, useState } from "react";

const useCustomerData = () => {
  const [customer, setCustomer] = useState([]);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => {
        setCustomer(data);
        setSpinner(false);
      });
  }, []);
  return [customer, setCustomer, spinner, setSpinner];
};
export default useCustomerData;
