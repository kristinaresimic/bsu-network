import React from "react";
import BSUnetwork from "../../img/bsu/logo-bsu.svg";


export const LastStep = () => {
  return (
    <div className='finish mx-0 d-flex flex-column align-items-center text-center'>
      <h1 className='h2 fw-700'>Thank you!</h1>
      <h2 className='h5 fw-500 p-3 px-0 col-12  col-md-8 col-lg-7 col-xl-6'>
        Your application has been successfully submitted!
      </h2>
      <h2 className='h5 col-12 col-md-9 fw-500'>
        You will receive an email from us within 72 hours with more information on how to purchase
        BTC and your node dashboard log in details.{" "}
      </h2>
      <img className='finish-img mx-auto my-3 col-4 col-sm-3 col-md-3 col-lg-2 col-xl-2' src={BSUnetwork} alt='bsu-network' />
    </div>
  );
};
