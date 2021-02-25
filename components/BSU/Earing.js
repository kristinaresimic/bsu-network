import React from "react";
import earingBg from "../../img/bsu/earing-bg.jpg";

const Earing = () => {
  return (
    <div className="earing full-section">
      <div className="earing-wrapper col-12 col-xl-8">
        <h2 className="mb-5 col-sm-10 col-md-10">Earning with BSU</h2>
        <p className="col-sm-10 col-md-10">
        Monetization from BSU comes from the running of nodes, with each verified transaction receiving BSU as a reward.. Users can either run their own masternode , with specific server requirements, or simply stake their BSU to an existing masternode. The price of BSU also increases with each year, effectively boosting overall earnings. 
        </p>
      </div>

      <img
        className="earing--background"
        src={earingBg}
        alt="earing background image"
      />
    </div>
  );
};

export default Earing;
