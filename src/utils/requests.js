//Constants
const API_URL = "https://coding-challenge-api.aerolab.co";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZmNjE3NDY3Mjk2ZTAwMTk5NjQxNDgiLCJpYXQiOjE2MjczNDkzNjR9.RXl7IBspfCgl_O49ryUTUo57QYHpKi6ZQjTXRJSzEJg",
};
//ALL FECTHING with callbacks from states
// FETCHING GET
//constant for get requests
const optionsGet = {
  method: "GET",
  headers: HEADERS,
  redirect: "follow",
};
//function userData
export const getUser = async (setUserData, setRefresh) => {
  try {
    const response = await fetch(`${API_URL}/user/me`, optionsGet);
    const data = await response.json();
    setUserData(data);
    setRefresh(false);
  } catch (error) {
    setRefresh(false);
    console.log("error", error);
  }
};
//function product
export const getProducts = async (setProductData, setFilterList) => {
  try {
    const response = await fetch(`${API_URL}/products`, optionsGet);
    const data = await response.json();
    setProductData(data);
    setFilterList(data);
  } catch (error) {
    console.log("error", error);
  }
};
//function history
export const getHistory = async (setOrdersData) => {
  try {
    const response = await fetch(`${API_URL}/user/history`, optionsGet);
    const data = await response.json();
    setOrdersData(data.reverse());
  } catch (error) {
    console.log("error", error);
  }
};
//FETCHING POST
//function to get new points
export const postPoints = async (
  amount,
  setRefresh,
  setShowSuccess,
  setShowError
) => {
  const myBody = JSON.stringify({ amount: amount });
  const optionsPost = {
    method: "POST",
    headers: HEADERS,
    body: myBody,
    redirect: "follow",
  };
  try {
    await fetch(`${API_URL}/user/points`, optionsPost);
    setRefresh(true);
    setShowSuccess(true);
  } catch (error) {
    console.log("error", error);
    setShowError(true);
  }
};

//function to get new order redeem
export const postRedeem = async (
  productId,
  setRefresh,
  setOrdersData,
  setShowSuccess,
  setShowError
) => {
  const myBody = JSON.stringify({ productId: productId });
  const optionsPost = {
    method: "POST",
    headers: HEADERS,
    body: myBody,
    redirect: "follow",
  };
  try {
    await fetch(`${API_URL}/redeem`, optionsPost);
    setRefresh(true);
    setOrdersData([]);
    setShowSuccess(true);
  } catch (error) {
    console.log("error", error);
    setShowError(true);
  }
};
