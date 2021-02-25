import React, { useEffect, useState } from "react";

const Overview = (props) => {
  const [state, setState] = useState({
    nodeCoverageStart: 0,
    nodeCoverageEnd: 55,
    one: false,
  });

  const progress = async (start, end, name) => {
    for (let index = start, length = end; index < length; index += 1) {
      await new Promise((resolve) => setTimeout(resolve, 25));
      setState({ [name]: index });
    }
  };

  const startProgress = () => {
    setState({ one: true });
    progress(
      state.nodeCoverageStart,
      state.nodeCoverageEnd,
      "nodeCoverageStart"
    );
  };

  useEffect(() => {
    if (props.inViewport === true && state.one === false) {
      startProgress();
    }
    return () => {
      //   cleanup
    };
  }, [state, props.inViewport]);

  const visible = props.inViewport ? " is-visible" : "";
  return (
    <div className="overview" ref={props.forwardedRef}>
      <div className="overview-content col-10 col-xl-8">
        <h2 className={"fade-in-section-top" + visible}>Overview</h2>
        <div className="overview-content-progress my-5">
          <div
            className="overview-content-progress--bar"
            style={{ width: state.nodeCoverageStart + "%" }}
          ></div>
        </div>
        <p className={"fade-in-section" + visible}>Coming soon...</p>
      </div>
    </div>
  );
};

export default Overview;
