import React from "react";
import advantagesBg from "../img/masternode/background.png";

const Adventages = (props) => {
  const visible = props.inViewport ? " is-visible" : "";
  return (
    <div className="adventages" ref={props.forwardedRef}>
      <div className="adventages-background-wrapper">
        <div className="adventages-text">
          <h3 className={"fade-in-section-top" + visible}>
            Advantages of becoming an
          </h3>
          <h4 className={"fade-in-section-top" + visible}>INERY MASTERNODE</h4>
          <div className="adventages-cards row justify-content-around">
            <div
              className={
                "adventages-cards--card col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2 fade-in-section" +
                visible
              }
            >
              Receive a proportional amount of Blockchain Storage Units (BSU)
            </div>
            <div
              className={
                "adventages-cards--card col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2 fade-in-section" +
                visible
              }
            >
              Generate a considerable passive income
            </div>
            <div
              className={
                "adventages-cards--card col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2 fade-in-section" +
                visible
              }
            >
              Choose to portion off and sell your node at a later date
            </div>
          </div>
        </div>
        <img
          className="adventages-background--img"
          src={advantagesBg}
          alt="sadasd"
        />
      </div>
    </div>
  );
};

export default Adventages;
