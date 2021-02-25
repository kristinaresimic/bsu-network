import React, { useState, useEffect, useContext } from "react";
import Masternode1 from "../../img/modalForm/Masternode1.svg";
import arrow from "../../img/modalForm/arrow.png";
import DataContext from "../store/dataContext";
const Masternode = () => {
  const { bsuAmmount, setBsuAmmount } = useContext(DataContext);

  const [sumMB, setSumMB] = useState(80);
  const [sumD, setSumD] = useState(null);

  useEffect(() => {
    setSumD(bsuAmmount * 0.1);
  }, [bsuAmmount]);

  const changeBSU = (e) => {
    setBsuAmmount(e.target.value * 1);
  };
  const incrementMB = () => {
    setBsuAmmount(bsuAmmount + 1);
  };
  const decrementMB = () => {
    setBsuAmmount(bsuAmmount - 1);
  };
  return (
    <div className='masternode '>
      <div className='masternode-top row mt-5 '>
        <div className='col-12 col-lg-6  col-xl-7 '>
          <h2 className='h5 fw-700'>1. Masternode collateral requirements</h2>
         {/*  <p className='col-12 col-xl-11 p1 fw-500'>
          Upon completion of the application, you will receive an e - mail with further instructions on how to <strong className='p1'>purchase BSU</strong> and access your{" "}
            <strong className='p1'>masternode dashboard.</strong>
          </p> */}
           <p className='col-12 col-xl-11 p1 fw-500'>
           Each masternode requires <strong className='p1'>500 000 BSU</strong> in order to work and remain profitable. You will have full control over your funds at all times.
          </p>
        </div>
        <div className='col-12  col-lg-6 col-xl-5 mt-3 mt-lg-0'>
          <h2 className='h5 fw-700'>2. BSU Pricing</h2>
          <div className='masternode-bottom  row mt-3  d-flex justify-content-center align-items-center pl-5 pl-md-4 mx-auto'>
            <div className='masternode-bsu-mbD row '>
              <input
                className=' m-0 p-0 pr-1 text-right bg-transparent border-0 col-4 c-white p1 fw-500'
                type='number'
                value={bsuAmmount}
                onChange={changeBSU}
              />
              <p className='p-0 m-0 c-white p1 d-flex justify-content-center align-items-center fw-500 '>
                MB
              </p>
              <div className='col-4 ml-auto d-flex flex-column justify-content-center align-items-center'>
                <div>
                  <img
                    onClick={incrementMB}
                    className='masternode-bsu-mbD-img'
                    src={arrow}
                    alt=''
                  />
                </div>
                <div>
                  <img
                    onClick={decrementMB}
                    className='masternode-bsu-mbD-img-down '
                    src={arrow}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <p className='h5 p-0 m-0 mx-5 my-3'>=</p>
            <div className='masternode-bsu-dolar row'>
              <p className='p-0 m-0 p1 col-1 d-flex justify-content-center align-items-center fw-500 '>
                $
              </p>
              <input
                className='masternode-bsu-dolar-input  m-0 p-0 bg-transparent border-0 p1 fw-500 '
                type='number'
                value={parseFloat(sumD).toFixed(2)}
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='col-12  d-flex justify-content-center flex-column mt-3 pt-4 mt-md-5 mt-sm-5 mt-xl-4'>
        {/* <h1 className='h5 fw-700 text-center'>20% Discount for the FIRST 10 MASTERNODES! </h1> */}
        <p className='col-12 col-xl-11 p1 fw-500 text-center'>
          Upon completion of the application, you will receive an e - mail with further instructions on how to <strong className='p1'>purchase BSU</strong> and access your{" "}
            <strong className='p1'>masternode dashboard.</strong>
            </p>
        <img className='masternode-img mx-auto mt-4 mt-sm-5' src={Masternode1} alt='masternode' />
        <h1 className='h5 fw-700 mt-5 mb-2 text-center mt-sm-5 mt-lg-5'>ONLY 6 LEFT!</h1>
      </div>
    </div>
  );
};
export default Masternode;
