import React, { useContext, useState } from "react";
import ReactTooltip from "react-tooltip";

import DataContext from "../store/dataContext";
export const Layout = (props) => {
  const { pageError, page, resetModalData } = useContext(DataContext);

  const close = () => {
    props.closeModal();
    resetModalData();
  };

  return (
    <div className='layout col-12 mx-auto'>
      <div className='layout-content mt-3 mt-lg-5  col-12 col-md-11 col-lg-9 mx-auto  '>
        {props.children}
      </div>
      <div className='layout-bottom  mt-4 mb-5 '>
        {pageError && (
          <span className='layout-bottom-error-mes'>*Please fill out all mandatory fields</span>
        )}
        <div className='layout-bottom-row'>
          <button
            style={{ display: props.backNo ? "none" : null }}
            onClick={props.page === 3 ? close : props.backClick}
            className='p1 border-0 my-auto c-white fw-500  mx-3'>
            {props.page === 3 ? "Close" : "Back"}
          </button>
          <button
            id='nextBtn'
            style={{ display: props.nextNo ? "none" : null }}
            onClick={props.nextClick}
            className='p1 border-0 my-auto c-white  fw-500 mx-3 '>
            Next
          </button>
          <a data-tip data-for='finishBtn'>
            <button
              style={{ display: props.page === 2 ? "block" : "none" }}
              onClick={() => {
                props.nextClick();
                props.send();
              }}
              className='p1 border-0 my-auto c-white fw-500  mx-3 '>
              Finish
            </button>
          </a>
        </div>
        <div className='layout-bottom-page ml-4 '>
          <p
            onClick={() => props.goToPage(0)}
            className={props.page == 0 ? "h2 mx-1 c-main" : "p1 mx-1  c-main"}>
            1
          </p>
          <p
            onClick={() => (page > 1 ? props.goToPage(1) : null)}
            className={props.page == 1 ? "h2 mx-1 c-main" : "p1 mx-1  c-main"}>
            2
          </p>
          <p
            onClick={() => (page > 2 ? props.goToPage(2) : null)}
            className={props.page == 2 ? "h2 mx-1 c-main" : "p1 mx-1  c-main"}>
            3
          </p>
          <p
            onClick={() => null}
            className={props.page == 3 ? "h2 mx-1 c-main" : "p1 mx-1  c-main"}>
            4
          </p>
        </div>
      </div>
    </div>
  );
};
