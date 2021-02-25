import React from "react";
import dataBg from "../../img/bsu/data.jpg";

const Data = () => {
  return (
    <div className="data full-section">
      <div className="data-wrapper col-12 col-xl-8">
        <h2 className="mb-5 col-sm-10 col-md-10">Data</h2>
        <p className=" col-sm-10 col-md-10">
        The amount of BSU is determined by the number of Masternodes. Each node must add certain storage capacity to Inery. The amount of BSU in the Inery Blockchain is  directly connected with the amount of data users add to the blockchain. It can be compared to RAM, which is needed to store a computers short time memory, as BSU is required for every transaction on the blockchain network.
        </p>
      </div>

      <img
        className="data--background"
        src={dataBg}
        alt="data background image"
      />
    </div>
  );
};

export default Data;
