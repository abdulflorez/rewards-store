import { createContext, useState, useEffect } from "react";
import { getHistory } from "../utils/requests";

export const OrdersContext = createContext();

export function OrdersProvider(props) {
//CONTEXT TO GET ORDERS HISTORY
const [ ordersData, setOrdersData ] = useState([])
//Fetching history
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