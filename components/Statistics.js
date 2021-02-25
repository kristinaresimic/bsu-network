import React from "react";
import StatisticsChart from "../components/StatisticsChart";

const Statistics = (props) => {
  const visible = props.inViewport ? " is-visible" : "";
  return (
    <div className="statistics" ref={props.forwardedRef}>
      {/* <h2 className={"fade-in-section-top" + visible}>Network statistics</h2> */}
     {/*  <h6 className={"fade-in-section-top col-9 mx-auto" + visible}>Don't want to run your own masternode? You can still get involved with Masternode Staking!  </h6> */}

{/*       <h6 className={"fade-in-section-top" + visible}>
        For the entire Inery blockchain
      </h6> */}
     {/*  <h6 className={"fade-in-section-top" + visible}>
      Find out more at <a className="fade-in-section-top-link" href="https://bsu.community/" target="_blank">BSU Community</a>
      </h6> */}

     {/*  <StatisticsChart /> */}
    </div>
  );
};

export default Statistics;
