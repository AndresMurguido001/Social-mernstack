import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";
// ACTION CREATORS

//Register User

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("api/user/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login User - Get user Token

export const loginUser = userData => dispatch => {
  axios
    .post("/api/user/login", userData)
    .then(res => {
      //Save To Local Storage - Token
      const { token } = res.data;
      //Set Token to localStorage
      localStorage.setItem("jwtToken", token);
      // Set token to auth header
      setAuthToken(token);
      //Decode the token to set User data
      const decoded = jwt_decode(token);
      //Set current User
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
//Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
//Log user out
export const logoutUser = () => dispatch => {
  //remove token from localStorage
  localStorage.removeItem("jwtToken");
  //remove auth header for future requests
  setAuthToken(false);
  //Set current user to empty object which sets isAuthenticated to false
  dispatch(setCurrentUser({}));
};
