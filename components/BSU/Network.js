import React from "react";
import networkBg from "../../img/bsu/network-bg.jpg";

const Network = () => {
  return (
    <div className="network full-section">
      <div className="network-wrapper col-12 col-xl-8">
        <h2 className="mb-5 col-sm-10 col-md-10">Network</h2>
        <p className=" col-sm-10 col-md-10">
          Only a set number of nodes are needed for the Inery blockchain to run
          smoothly, therefore, registrations will be closed as soon as that
          number has been reached. If the number of transactions increases more
          nodes will be required in order to keep the infrastructure intact. A
          new port will open by default, allowing new users to register as a
          node and enter the blockchain
        </p>
       {/*  <p className="mt-5">
          Enter your email adress below to get more information on BSU and
          becoming a node.
        </p>
        <div className="network-wrapper-send">
          <input
            type="text"
            className="network-wrapper--input"
            placeholder="Enter your email here"
          />
          <button className="my-1">Send</button>
        </div> */}
      </div>

      <img
        className="network--background"
        src={networkBg}
        alt="network background image"
      />
    </div>
  );
};

export default Network;
