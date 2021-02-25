import React from "react";

export const ModalNavbar = ({ pageName }) => {
  return (
    <div className='layout-top-navbar d-flex flex-row justify-content-space-between'>
      <div className='col-12 col-md-11 col-10 mx-auto layout-top-navbar-container d-flex justify-content-space-between align-items-center col-12'>
        <div className='layout-top-navbar-left col-7 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
          <div>
            <h5 className='c-white h5 font-weight-bold m-0 p-0'>BSU Network</h5>
          </div>
          <div>
            <h5 className='c-white h5  m-0 p-0'>Masternode Registration Form</h5>
          </div>
        </div>
        <div className='layout-top-navbar-right col-2 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
          <p className='p1 c-white p-0 m-0'>{pageName}</p>
        </div>
      </div>
    </div>
  );
};
