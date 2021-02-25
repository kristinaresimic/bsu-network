import React, { Component } from "react";
import OSNodeView from "./OSNodeView";
export default class OperatingSystemPart extends Component {
  render() {
    return (
      <div className=" col-12   flex-center font-color-white">
        <div className=" flex-center flex-column ">
          <p className="p2 font-weight-500 mt-3 text-center ">
            Distribution of operationg systems used by nodes
          </p>
          <p className="p3 text-center my-4 col-12 col-md-10 col-xl-9">
            Inery blockchain is very flexibile regarding operating systems
            support. All major desktop operating systems are supported, among
            them Windows, Linux, and Mac OS X.
          </p>
          <div className="row flex-center my-5 pt-4 ">
            <div className="col-10 col-md-6 col-xl-3 m-0 ">
              <OSNodeView
                name="Windows"
                width="70%"
                color="rgba(196, 196, 196, 0.63)"
                percent="30"
              />
            </div>
            <div className="col-10 col-md-6 col-xl-3 m-0 ">
              <OSNodeView
                name="Linux"
                width="30%"
                color="#FF0000"
                percent="20"
              />
            </div>
            <div className="col-10 col-md-6 col-xl-3 m-0 ">
              <OSNodeView
                name="Mac OSX"
                width="30%"
                color="rgba(24, 202, 74, 0.81)"
                percent="20"
              />
            </div>
            <div className="col-10 col-md-6 col-xl-3 m-0 ">
              <OSNodeView
                name="Others"
                width="70%"
                color="rgba(255, 153, 0, 0.58)"
                percent="30"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
