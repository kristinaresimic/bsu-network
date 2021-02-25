import React from "react";
import nodesBg from "../../img/bsu/nodes.jpg";

const Nodes = () => {
  return (
    <div className="nodes-bsu full-section">
      <div className="nodes-bsu-wrapper col-12 col-xl-8">
        <h2 className="mb-5 col-sm-10 col-md-10">Nodes</h2>
        <p className="col-sm-10 col-md-10">
        A set amount of BSU is required to enter the Inery Blockchain and become a node. Becoming a masternode early on will give you a chance to obtain BSU at a set price, and solidify your position on the network as it expands.
        </p>
      </div>

      <img
        className="nodes-bsu--background"
        src={nodesBg}
        alt="nodes background image"
      />
    </div>
  );
};

export default Nodes;
