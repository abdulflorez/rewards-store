import { createContext, useState, useEffect } from "react";
import { getUser } from "../utils/requests";

export const UserContext = createContext();

export function UserProvider(props) {
  //CONTEXT to get usedata
  //states
  const [userData, setUserData] = useState([]);
  const [refresh, setRefresh] = useState(false)
  //fetching
  useEffect(() => {
    if (userData.length === 0 || refresh) {
      getUser(setUserData, setRefresh);
    }
  }, [userData, refresh]);
  return (
    <UserContext.Provider value={ { userData, setUserData, refresh, setRefresh }}>
      {props.children}
    </UserContext.Provider>
  );
}
