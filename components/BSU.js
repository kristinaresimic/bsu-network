import React, { useState } from "react";
import { useEffect } from "react";
import dataBtn from "../img/bsu/data-icon.svg";
import earingBtn from "../img/bsu/earing-icon.svg";
import logoBSU from "../img/bsu/logo-bsu.svg";
import networkBtn from "../img/bsu/network-icon.svg";
import nodesBtn from "../img/bsu/nodes-icon.svg";
import bsuLogo from "../img/logo.svg";
import Data from "./BSU/Data";
import Earing from "./BSU/Earing";
import Network from "./BSU/Network";
import Nodes from "./BSU/Nodes";

const BSU = (props) => {
  // const [networkVisible, setNetworkVisible] = useState(true);
  // const [nodesVisible, setNodesVisible] = useState(false);
  // const [dataVisible, setDataVisible] = useState(false);
  // const [earingVisible, setEaringVisible] = useState(false);

  // const networkShow = () => {
  //   setNetworkVisible(true);
  //   setNodesVisible(false);
  //   setDataVisible(false);
  //   setEaringVisible(false);
  // };

  // const nodesShow = () => {
  //   setNetworkVisible(false);
  //   setNodesVisible(true);
  //   setDataVisible(false);
  //   setEaringVisible(false);
  // };

  // const dataShow = () => {
  //   setNetworkVisible(false);
  //   setNodesVisible(false);
  //   setDataVisible(true);
  //   setEaringVisible(false);
  // };

  // const earingShow = () => {
  //   setNetworkVisible(false);
  //   setNodesVisible(false);
  //   setDataVisible(false);
  //   setEaringVisible(true);
  // };

  const [active, setActive] = useState(0)

  const handleChange = item => {
    setActive(item)
  }
  const change = () => {

  }
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(active)
      switch (active) {
        case 0:
          setActive(1)
          break;
        case 1:
          setActive(2)
          break;
        case 2:
          setActive(3);
          break
        case 3:
          setActive(0);
          break
        default:
          setActive(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [active])


  const visible = props.inViewport ? " is-visible" : "";
  return (
    <div className="bsu" ref={props.forwardedRef}>
      <div>
        <h2 className={"fade-in-section-top" + visible}>
          <span>B</span>lockchain <span>S</span>torage <span>U</span>nit
        </h2>
        <div className="bsu-wrapper">
          {active === 0 && <Network />}
          {active === 1 && <Nodes />}
          {active === 2 && <Data />}
          {active === 3 && <Earing />}
          <div className="bsu-wrapper-nav">
            <div className="bsu-wrapper-nav-items">
              <div
                onClick={() => handleChange(0)}
                className={
                  active === 0
                    ? "bg-blue "
                    : "" + "bsu-wrapper-nav--item flex-center-r "
                }
              >
                <img src={networkBtn} alt="network button" />
              </div>
              <div
                onClick={() => handleChange(1)}
                className={
                  active === 1
                    ? "bg-blue "
                    : "" + "bsu-wrapper-nav--item flex-center-r "
                }
              >
                <img src={nodesBtn} alt="nodes button" />
              </div>
              <div
                onClick={() => handleChange(2)}
                className={
                  active === 2
                    ? "bg-blue "
                    : "" + "bsu-wrapper-nav--item flex-center-r "
                }
              >
                <img src={dataBtn} alt="data button" />
              </div>
              <div
                onClick={() => handleChange(3)}
                className={
                  active === 3
                    ? "bg-blue "
                    : "" + "bsu-wrapper-nav--item flex-center-r "
                }
              >
                <img src={earingBtn} alt="earing button" />
              </div>
            </div>
            {/*    <div className="bsu-wrapper-logo">
              <img
                className="bsu-wrapper-nav--logo"
                src={logoBSU}
                alt="bsu logo"
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className="bsu-abs"></div>
      {/* <img
        src={bsuLogo}
        alt="bsu logo"
        className={"bsu--logo my-4 fade-in-section-top" + visible}
      /> */}
    </div>
  );
};

export default BSU;
