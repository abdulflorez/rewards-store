const API_URL = "https://coding-challenge-api.aerolab.co";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZmNjE3NDY3Mjk2ZTAwMTk5NjQxNDgiLCJpYXQiOjE2MjczNDkzNjR9.RXl7IBspfCgl_O49ryUTUo57QYHpKi6ZQjTXRJSzEJg",
};

// REQUEST FOR GET USER
const optionsGet = {
  method: "GET",
  headers: HEADERS,
  redirect: "follow",
};
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

export const getProducts = async (setProductData) => {
  try {
    const response = await fetch(`${API_URL}/products`, optionsGet);
    const data = await response.json();
    setProductData(data);
  } catch (error) {
    console.log("error", error);
  }
};

export const getHistory = async (setOrdersData) => {
  try {
    const response = await fetch(`${API_URL}/user/history`, optionsGet);
    const data = await response.json();
    setOrdersData(data);
  } catch (error) {
    console.log("error", error);
  }
};
//REQUEST FOR POST POINTS
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
