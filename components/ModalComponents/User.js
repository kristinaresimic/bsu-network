import React, { useState, useContext } from "react";
// import PhoneInput from "react-phone-number-input";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.scss";
// import 'react-phone-input-2/lib/style.css'
import "../../styles/ModalStyles/phoneInput.scss";
import { UserProof } from "./UserProof";
import PhoneInput from "react-phone-input-2";
import DataContext from "../store/dataContext";
import { createPopper } from "@popperjs/core";

export const User = () => {
  const {
    firstName,
    lastName,
    email,
    residence,
    gender,
    phone,
    date,
    identyImg,
    addressImg,
    setLastName,
    setFirstName,
    setEmail,
    setResidence,
    setGender,
    setPhone,
    setDate,
    setIdentyImg,
    setAddressImg,
  } = useContext(DataContext);

  const [value, setValue] = useState("en");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  //email state
  // const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [residenceError, setResidenceError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  //date state
  const [startDate, setStartDate] = useState("");
  const [dateError, setDateError] = useState("");

  //identity image state

  //address image state

  const emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const checkInput = (input) => {
    switch (input) {
      case "firstName":
        if (firstName === "") {
          setFirstNameError("Enter first name");
        } else {
          setFirstNameError("");
        }
        break;
      case "lastName":
        if (lastName === "") {
          setLastNameError("Enter last name");
        } else {
          setLastNameError("");
        }
        break;
      case "email":
        if (email === "") {
          setEmailError("Enter email");
        } else if (!emailReg.test(email.toLowerCase())) {
          setEmailError("Enter valid email addres");
        } else {
          setEmailError("");
        }
        break;
      case "residence":
        if (residence === "") {
          setResidenceError("Enter your current residence");
        } else {
          setResidenceError("");
        }
        break;
      case "gender":
        if (gender === 0 || gender === "0") {
          setGenderError("Select your gender");
        } else {
          setGenderError("");
        }
        break;
      case "phone":
        if (phone.length <= 4) {
          setPhoneError("Enter valid number");
        } else {
          setPhoneError("");
        }
        break;
      case "date":
        if (date === "") {
          setDateError("Enter date of birth");
        } else {
          setDateError("");
        }
        break;
    }
  };

  const createDate = () => {
    // setDate(date);
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    return date;
  };

  return (
    <div className='user '>
      <div className='mt-5'>
        <h5 className='h5 fw-700'>1. Basic Details:</h5>
        <div className='ml-1 '>
          <p className='p1 fw-500 col-xl-6'>
            {" "}
            Please provide the following details and documents in order to complete the KYC process.{" "}
          </p>
          <div className='row col-12 col-md-12 col-lg-12  col-xl-10 m-0 p-0 mt-3 ml-4'>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={() => checkInput("firstName")}
              type='text'
              placeholder='First Name'
              className={`user-inp ${
                firstNameError && "user-inp-error"
              } col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 p2 c-grey mr-4 mt-2`}
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={() => checkInput("lastName")}
              type='text'
              placeholder='Last Name'
              className={`user-inp ${
                lastNameError && "user-inp-error"
              } col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 p2 c-grey mt-2  mr-4`}
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => checkInput("email")}
              type='text'
              placeholder='E - mail'
              className={`user-inp ${
                emailError && "user-inp-error"
              } col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 p2 c-grey  mt-2 mr-4`}
            />
            <input
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
              onBlur={() => checkInput("residence")}
              type='text'
              placeholder='Current Residence'
              className={`user-inp ${
                residenceError && "user-inp-error"
              } col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 p2 c-grey mt-2 mr-4`}
            />

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              onBlur={() => checkInput("gender")}
              className={`user-inp ${
                genderError && "user-inp-error"
              } col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 p2 mr-4 ml-0 c-grey mt-2`}>
              <option className='p2' name='male' value={0}>
                {" "}
                Gender
              </option>
              <option className='p2' name='male' value='male'>
                {" "}
                Male
              </option>
              <option className='p2' name='female' value='female'>
                Female
              </option>
            </select>

            <PhoneInput
              country={"rs"} //initial country
              value={phone}
              onChange={(phone) => setPhone(phone)}
              onBlur={() => checkInput("phone")}
              containerClass={`user-phone ${
                phoneError && "border-error"
              } col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 p2 c-grey mt-2 mr-4`}
              inputClass='input'
              dropdownClass='country-dropdown'
            />

            <div
              className={`  ${
                dateError && "border-error"
              } user-inp d-flex col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 m-0 p-0 mt-2`}>
              <DatePicker
                className='user-inp-date border-0 p2 c-grey  mr-4 pl-4 pl-lg-3'
                placeholderText="Date of Birth"
                selected={date ? date : ""}
                onChange={(date) => {
                  setDate(date);
                  checkInput("date");
                }}
                maxDate={createDate()}
                showMonthDropdown
                showYearDropdown
                yearDropdownItemNumber={85}
                scrollableYearDropdown
                placeholderText="Date of Birth"
                onCalendarClose={() => checkInput("date")}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='user-proof row mb-5'>
          <UserProof
            img={identyImg}
            setImg={(img) => setIdentyImg(img)}
            checkboxName='identity'
            heading='2. Proof of identity'
            p1=' Upload one of the following documents: ID, Passport or Driving licence.'
            p2=' The document must include your: Full name, date of birth and a photo of yourself.'
            p3=' The photo should be clear and focused.'
          />
          <UserProof
            img={addressImg}
            setImg={(img) => setAddressImg(img)}
            checkboxName='address'
            heading='3. Proof of address'
            p1=' Upload one of the following documents: bank statement or utility bill.'
            p2=' Document must include your full name, adress and date.'
            p3=' Must be within 3 months from the current date.'
          />
        </div>
      </div>
    </div>
  );
};
