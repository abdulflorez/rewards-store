import { createContext, useState, useEffect } from "react";
import { getProducts } from "../utils/requests";

export const ProductContext = createContext();

export function ProductProvider(props) {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    if (productsData.length === 0) {
      getProducts(setProductsData, setFilterList);
    }
  }, [productsData]);

  const [byCategories, setByCategories] = useState("All Categories");
  const [byPrices, setByPrices] = useState("All Prices");
  const [filterList, setFilterList] = useState([]);

  const value ={
    productsData, setProductsData, 
    byCategories, setByCategories,
    byPrices, setByPrices,
    filterList, setFilterList
  }

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
}
