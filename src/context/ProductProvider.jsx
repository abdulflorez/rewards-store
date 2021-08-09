import { createContext, useState, useEffect } from "react";
import { getProducts } from "../utils/requests";

export const ProductContext = createContext();

export function ProductProvider(props) {
  //CONTEXT TO GET PRODUCTS LIST
  //STATE for fetching
  const [productsData, setProductsData] = useState([]);
  //STATES to sort and filerts 
  const [byCategories, setByCategories] = useState("All Categories");
  const [byPrices, setByPrices] = useState("All Prices");
  const [filterList, setFilterList] = useState([]);
  //Fetching
  useEffect(() => {
    if (productsData.length === 0) {
      getProducts(setProductsData, setFilterList);
    }
  }, [productsData]);
  //Variable with states
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
