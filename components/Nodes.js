import React from "react";

const Nodes = (props) => {
  const visible = props.inViewport ? " is-visible" : "";
  return (
    <div className="nodes" ref={props.forwardedRef}>
      <div className="nodes-text col-12 col-md-8 col-xl-10 mx-auto">
        <h2 className={"c-blue fade-in-section-top" + visible}>
          What are nodes?
        </h2>
        <p className={"fade-in-section" + visible}>
          Nodes form the entire infrastructure of the Blockchain, allowing it to
          function and survive. They preserve, store and spread data while being
          connected to each other at all times. Even if one node shuts down
          there are plenty of others to keep the system alive – Without a single
          point of failure.
        </p>
        <h2 className={"c-blue fade-in-section-top" + visible}>Masternodes</h2>
        <p className={"fade-in-section" + visible}>
          Masternodes are dominant servers on the blockchain that act as the
          backbone of the network, requiring a certain amount of BSU as a form
          of collateral. Hosting a masternode requires additional resources than
          typical nodes and in turn generates a healthy amount of rewards
          through successful transactions.
        </p>
      </div>
    </div>
  );
};

export default Nodes;
