import React, { useState } from "react";
import Laptop from "./Laptop";

const Sort = ({ laptops }) => {
  const [sort, setSort] = useState(false);
  const [nameFilter, setNameFilter] = useState("");

  const handleSortLaptops = () => {
    const weight = laptops.map((laptop) => {
      return laptop.weight;
    });
    if (sort === false) {
      weight.sort((a, b) => a - b);
      setSort(true);
    } else if (sort === true) {
      weight.sort((a, b) => b - a);
    }
    console.log(weight);
  };

  const handleFilterName = (e) => {
    setNameFilter(e.target.value);
    if (laptops.name === nameFilter) {
      return <Laptop nameFilter={nameFilter} />;
    }
  };

  return (
    <header>
      <input type="text" value={nameFilter} onChange={handleFilterName} />
      <button onClick={handleSortLaptops}>Sort</button>
    </header>
  );
};

export default Sort;
