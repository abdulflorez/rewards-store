import { createContext, useState, useEffect } from "react";
import { getHistory } from "../utils/requests";

export const OrdersContext = createContext();

export function OrdersProvider(props) {   
const [ ordersData, setOrdersData ] = useState([])

useEffect(()=>{
    if(ordersData.length === 0) {
        getHistory(setOrdersData)

    }
},[ordersData])

  return (
    <OrdersContext.Provider value={{ ordersData, setOrdersData }}>
      {props.children}
    </OrdersContext.Provider>
  );
}