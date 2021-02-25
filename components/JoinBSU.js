import Link from "next/link";
import React, { useState } from "react";
import MapChart from "./MapChart";

const JoinBSU = (props) => {
  const [content, setContent] = useState("");
  const visible = props.inViewport ? " is-visible" : "";

  return (
    <div className='join-bsu' id='join-network' ref={props.forwardedRef}>
      <div className='join-bsu-text col-12 col-xl-8 mx-auto'>
        <h3 className={"c-blue fade-in-section-top" + visible}>Join the</h3>
        <h4 className={"c-blue fade-in-section-top" + visible}>BSU NETWORK</h4>
        <h5 className={"c-blue fade-in-section" + visible}>
          Be part of the Inery network by running a masternode.
        </h5>
        {/* <MapChart setTooltipContent={setContent} /> */}
        <h5 className={"c-blue fade-in-section-top" + visible}>
          Start a Master or Light node on your operating system and ensure the safety of the Inery
          Blockchain.
        </h5>
        <p className={"c-blue pt-5 fade-in-section" + visible}>
          By running a masternode you will become a part of a new ecosystem ensuring the safety and
          privacy of the data stored within the Inery Blockchain. You will guarantee faster queries
          and, together with other nodes, you will have full control of data maintenance with no
          single entity capable of controlling or manipulating it.
        </p>
        <p className={"c-blue fade-in-section" + visible}>
          Instead of relying on a third party, you operate in a trusted end-to-end environment where
          you can implement additional counter measures to secure services. You can earn Inery BSUs
          while doing your part as a node and trade them on an exchange.
        </p>
        <div
          className={
            "col-8 col-sm-6 col-md-4 col-lg-3 col-xl-4 mx-auto pt-5 fade-in-section-top" + visible
          }>
          {/* <Link href="#" className="join-bsu--button">
            JOIN NOW
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default JoinBSU;
