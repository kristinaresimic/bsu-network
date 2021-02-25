import React, { Component } from "react";
import { Line } from "react-simple-maps";
import { LineChart, Tooltip, XAxis, YAxis } from "recharts";
import polygonImg from "../img/polygon.svg";

const data = [
  {
    name: "17. May",
    uv: 0.4,
    pv: 0.75,
    amt: 0.2,
  },
  {
    name: "25. May",
    uv: 0.4,
    pv: 0.58,
    amt: 0.3,
  },
  {
    name: "2. June",
    uv: 0.2,
    pv: 0.78,
    amt: 0.2,
  },
  {
    name: "9. June",
    uv: 0.68,
    pv: 0.4,
    amt: 0.8,
  },
];

export default class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    return (
      <div className=" background-white  d-flex flex-column justify-content-start align-items-center pt-3">
        <div className=" col-12 col-xl-12 w-100 row mt-5  analytics d-flex justify-content-around">
          <div className="col-12 col-lg-5 flex-center flex-column ">
            {/* <div>
              <h4 className="font-weight-500">Overview – Coming Soon!</h4>
              <p className="font-weight-500 mt-3">
                View network statistics for the entire Inery blockchain here.
              </p>
            </div> */}
            <div className="col-12 col-lg-7  chart-mobile  py-2 mt-3  flex-center ">
              <LineChart
                width={380}
                height={200}
                data={data}
                margin={{
                  top: 5,
                  right: 55,
                  left: 0,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  strokeWidth={2}
                  type="monotone"
                  dataKey="pv"
                  stroke="#1a1a1a"
                  activeDot={{ r: 2 }}
                />
                <Line
                  strokeWidth={2}
                  type="monotone"
                  dataKey="uv"
                  stroke="green"
                />
              </LineChart>
            </div>
            <div className="col-12 col-lg-7 chart-tablet  py-2 mt-3  flex-center ">
              <LineChart
                width={450}
                height={200}
                data={data}
                margin={{
                  top: 5,
                  right: 55,
                  left: 0,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  strokeWidth={3}
                  type="monotone"
                  dataKey="pv"
                  stroke="#1a1a1a"
                  activeDot={{ r: 2 }}
                />
                <Line
                  strokeWidth={3}
                  type="monotone"
                  dataKey="uv"
                  stroke="green"
                />
              </LineChart>
            </div>
            <div className="col-12 col-lg-7 chart-xl  py-2 mt-3  flex-center ">
              <LineChart
                width={550}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 55,
                  left: 0,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  strokeWidth={3}
                  type="monotone"
                  dataKey="pv"
                  stroke="#1a1a1a"
                  activeDot={{ r: 2 }}
                />
                <Line
                  strokeWidth={3}
                  type="monotone"
                  dataKey="uv"
                  stroke="green"
                />
              </LineChart>
            </div>

            <div className=" col-12 col-md-10  flex-center">
              <div className="text-center  col-12 col-md-7 col-lg-10  row d-flex justify-content-around ">
                <div
                  style={{ borderLeftColor: "green" }}
                  className="analytics-stats-item1 col-5 col-md-6 col-lg-6 my-3"
                >
                  <p className="analytics-stats-item1--text font-color-silver m-1 ">Price</p>
                  <p
                    style={{ color: "green" }}
                    className="analytics-stats-item1--price m-1 font-weight-bold f "
                  >
                    0.8$
                  </p>
                </div>
                <div
                  // style={{ borderLeftColor: "#164f6d" }}
                  className="analytics-stats-item1 col-5 col-md-6 col-lg-6 my-3 "
                >
                  <p className="analytics-stats-item1--text font-color-silver m-1 ">Market cap</p>
                  <p className="analytics-stats-item1--price m-1 font-weight-bold font-color-blue ">
                    250$
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="analytics-stats col-12 col-lg-5 col-md-12 background-silver">
            <div className=" col-12 col-lg-12 row" style={{margin: 0, padding: 0}}>
              <div
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                className="analytics-stats-item col-6 col-md-6 col-lg-6 text-center"
              >
                <p className="p1 font-color-silver ">Average block time</p>
                <p className="p1 font-color-silver font-weight-bold c-blue">
                  15.3s
                </p>
              </div>
              <div
                style={{boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.4)" }}
                className="analytics-stats-item col-6 col-md-6 col-lg-6 text-center"
              >
                <p className="p1 font-color-silver  ">Total transactions</p>
                <p className="p1 font-color-silver font-weight-bold c-blue">
                  5903865
                </p>
              </div>
              <div className=" col-12 col-lg-12 row" style={{margin: 0, padding: 0}}>
                
                
              <div
                style={{ boxShadow: "inset 0px -4px 4px rgba(0, 0, 0, 0.4)" }}
                className="analytics-stats-item col-6 col-md-6 col-lg-6 text-center"
              >
                <p className="p1 font-color-silver ">Total blocks</p>
                <p className="p1 font-color-silver font-weight-bold c-blue">
                  15.3s
                </p>
              </div>
              <div
                style={{ boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.25)" }}
                className="analytics-stats-item col-6 col-md-6 col-lg-6 text-center"
              >
                <p className="p1 font-color-silver  ">Total accounts</p>
                <p className="p1 font-color-silver font-weight-bold c-blue">
                  5903865
                </p>
              </div>
                
                
                
                {/* <div
                  style={{ borderLeftColor: "#164f6d" }}
                  className="analytics-stats-item col-5 col-md-6 col-lg-6 text-center"
                >
                  <p className="p7 font-color-silver ">Total blocks</p>
                  <p className="p1 font-color-silver font-weight-bold font-color-blue">
                    1045759
                  </p>
                </div>
                <div
                  style={{ borderLeftColor: "#164f6d" }}
                  className="analytics-stats-item col-5 col-md-6 col-lg-6 text-center"
                >
                  <p className="p7 font-color-silver ">Accounts</p>
                  <p className="p1 font-color-silver font-weight-bold font-color-blue">
                    36
                  </p>
                </div> */}
              </div>
            </div>
            <img className="analytics-stats--img" src={polygonImg} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}
