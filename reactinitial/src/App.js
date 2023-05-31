import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Laptop from "./components/Laptop";
import Sort from "./components/Sort";

const url = "https://demoapi.com/api/laptop";
const App = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const resp = await fetch(url);
        console.log(resp);
        const data = await resp.json();
        setLaptops(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLaptops();
  }, []);

  console.log(laptops);
  return (
    <div>
      <h1>Laptops</h1>
      <Sort laptops={laptops} />
      {laptops.length === 0 ? (
        <LoadingMask />
      ) : (
        laptops.map((laptop, index) => {
          return <Laptop key={index} laptop={laptop} />;
        })
      )}
    </div>
  );
};

export default App;
