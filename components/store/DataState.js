import React, { useReducer } from "react";
import {
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_EMAIL,
  SET_RESIDENCE,
  SET_GENDER,
  SET_PHONE,
  SET_DATE,
  SET_BSU_AMMOUNT,
  GO_TO_NEXT_PAGE,
  GO_TO_PREV_PAGE,
  GOT_TO_SPECIFIC_PAGE,
  SET_IDENTY_IMG,
  SET_ADDRESS_IMG,
  SET_PAGE_ERROR,
  RESET_MODAL_DATA,
} from "./types";
import DataContext from "./dataContext";
import dataReducer from "./dataReducer";

const initialState = {
  page: 0,
  bsuAmmount: 80,
  firstName: "",
  lastName: "",
  email: "",
  residence: "",
  gender: "",
  phone: "",
  date: "",
  identyImg: "",
  addressImg: "",
  pageError: "",
};
const DataState = (props) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const setFirstName = (firstName) => {
    dispatch({ type: SET_FIRST_NAME, payload: firstName });
  };

  const setLastName = (lastName) => {
    dispatch({ type: SET_LAST_NAME, payload: lastName });
  };

  const setEmail = (email) => {
    dispatch({ type: SET_EMAIL, payload: email });
  };
  const setResidence = (residence) => {
    dispatch({ type: SET_RESIDENCE, payload: residence });
  };

  const setGender = (gender) => {
    dispatch({ type: SET_GENDER, payload: gender });
  };

  const setPhone = (phone) => {
    dispatch({ type: SET_PHONE, payload: phone });
  };
  const setDate = (date) => {
    dispatch({ type: SET_DATE, payload: date });
  };
  const setBsuAmmount = (data) => {
    dispatch({ type: SET_BSU_AMMOUNT, payload: data });
  };
  const setIdentyImg = (img) => {
    dispatch({ type: SET_IDENTY_IMG, payload: img });
  };
  const setAddressImg = (img) => {
    dispatch({ type: SET_ADDRESS_IMG, payload: img });
  };

  //pages
  const goNextPage = () => {
    dispatch({ type: GO_TO_NEXT_PAGE });
  };
  const goToPage = (page) => {
    dispatch({ type: GOT_TO_SPECIFIC_PAGE, payload: page });
  };
  const goPreviousPage = () => {
    dispatch({ type: GO_TO_PREV_PAGE });
  };
  const setPageError = (err) => {
    dispatch({ type: SET_PAGE_ERROR, payload: err });
  };

  const resetModalData = () => {
    dispatch({ type: RESET_MODAL_DATA });
  };

  const send = () => {
    const {
      bsuAmmount,
      firstName,
      lastName,
      email,
      residence,
      gender,
      phone,
      date,
      identyImg,
      addressImg,
      pageError,
    } = state;
    if (
      bsuAmmount &&
      firstName &&
      lastName &&
      email &&
      residence &&
      gender &&
      phone &&
      date &&
      identyImg &&
      addressImg
    ) {
      console.log("Thank you");
    }
  };

  return (
    <DataContext.Provider
      value={{
        ...state,
        setBsuAmmount,
        setFirstName,
        setLastName,
        setEmail,
        setResidence,
        setGender,
        setPhone,
        setDate,
        goNextPage,
        goToPage,
        goPreviousPage,
        setIdentyImg,
        setAddressImg,
        setPageError,
        send,
        resetModalData,
      }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
