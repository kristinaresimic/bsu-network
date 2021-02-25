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
  SET_ADDRESS_IMG,
  SET_IDENTY_IMG,
  RESET_MODAL_DATA,
  SET_PAGE_ERROR,
} from "./types";

const emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const dataReducer = (state, { type, payload }) => {
  switch (type) {
    //second page
    case SET_BSU_AMMOUNT:
      let val;
      if (payload < 80) {
        val = 80;
      } else {
        val = payload;
      }
      return {
        ...state,
        bsuAmmount: val,
      };
    //third page
    case SET_FIRST_NAME:
      return {
        ...state,
        firstName: payload,
      };
    case SET_LAST_NAME:
      return {
        ...state,
        lastName: payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: payload,
      };
    case SET_RESIDENCE:
      return {
        ...state,
        residence: payload,
      };
    case SET_GENDER:
      return {
        ...state,
        gender: payload,
      };
    case SET_PHONE:
      return {
        ...state,
        phone: payload,
      };
    case SET_DATE:
      return {
        ...state,
        date: payload,
      };
    case SET_IDENTY_IMG:
      return {
        ...state,
        identyImg: payload,
      };
    case SET_ADDRESS_IMG:
      return {
        ...state,
        addressImg: payload,
      };
    case GO_TO_NEXT_PAGE:
      const {
        page,
        firstName,
        lastName,
        email,
        residence,
        gender,
        phone,
        date,
        identyImg,
        addressImg,
      } = state;
      if (page === 2) {
        if (
          firstName === "" ||
          lastName === "" ||
          email === "" ||
          !emailReg.test(email.toLowerCase()) ||
          residence === "" ||
          gender === "" ||
          phone === "" ||
          date == "" ||
          identyImg === "" ||
          addressImg === ""
        ) {
          return {
            ...state,
            pageError: "Please fill all fields",
          };
        } else {
          return {
            ...state,
            page: state.page + 1,
            pageError: "",
          };
        }
      } else {
        return {
          ...state,
          page: state.page + 1,
          pageError: "",
        };
      }
    case GOT_TO_SPECIFIC_PAGE:
      return {
        ...state,
        page: payload,
        pageError: "",
      };
    case GO_TO_PREV_PAGE:
      return {
        ...state,
        page: state.page - 1,
        pageError: "",
      };
    case SET_PAGE_ERROR:
      return {
        ...state,
        pageError: payload,
      };
    case RESET_MODAL_DATA: {
      return {
        ...state,
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
    }
    default:
      return state;
  }
};

export default dataReducer;
