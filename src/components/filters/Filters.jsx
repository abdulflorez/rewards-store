import "./filters.css";

import { ProductContext } from "../../context/ProductProvider";
import { useContext, useEffect } from "react";

function Filters() {
  const {
    productsData,
    byCategories, setByCategories,
    byPrices, setByPrices,
    setFilterList,
  } = useContext(ProductContext);

  const handleCategories = (e) => {
    setByCategories(e.target.value);
  };
  const handlePrices = (e) => {
    setByPrices(e.target.value);
  };
  function sortByPrice(a, b) {
    if (byPrices === "Prices: Low to High") {
      return a.cost - b.cost;
    } else if (byPrices === "Prices: High to Low") {
      return b.cost - a.cost;
    } else {
      return 0;
    }
  }
  function filtering() {
    const newList = productsData
      .filter((elements) => {
        if (byCategories !== "All Categories") {
          return elements.category === byCategories;
        }
        return elements;
      })
      .sort(sortByPrice);

    return newList;
  }

  useEffect(() => {
    setFilterList(filtering);
  }, [byCategories, byPrices]);

  const categories = [
    "All Categories",
    "Phones",
    "Gaming",
    "Laptops",
    "Cameras",
    "Monitors & TV",
    "Drones",
    "Phone Accessories",
    "Smart Home",
    "Audio",
    "Tablets & E-readers",
  ];
  const prices = ["All Prices", "Prices: Low to High", "Prices: High to Low"];

  const optionsSelect = (array) => {
    return array.map((element) => {
      return (
        <option className="filters__select--options" value={element}>
          {element}
        </option>
      );
    });
  };
  return (
    <section className="filters">
      <p className="filters__text">Short by:</p>
      <select
        className="filters__select"
        value={byCategories}
        onChange={handleCategories}
      >
        {optionsSelect(categories)}
      </select>
      <select
        className="filters__select"
        value={byPrices}
        onChange={handlePrices}
      >
        {optionsSelect(prices)}
      </select>
    </section>
  );
}

export default Filters;
