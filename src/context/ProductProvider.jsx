import { createContext, useState, useEffect } from "react";
import { getProducts } from "../utils/requests";

export const ProductContext = createContext();

export function ProductProvider(props) {
const [productsData, setProductsData] = useState([])
useEffect(()=>{
  if(productsData.length === 0){
    getProducts(setProductsData)
  }
}, [productsData])

  return (
    <ProductContext.Provider value={{ productsData, setProductsData }}>
      {props.children}
    </ProductContext.Provider>
  );
}
