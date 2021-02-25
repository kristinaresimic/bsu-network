import React, { Component } from "react";

export default class OSNodeView extends Component {
  render() {
    return (
      <div className=" row OSNodeView my-4">
        <div className="col-12">
          <p className="p2 font-color-white font-weight-bold">
            {this.props.name}
          </p>
        </div>
        <div className="col-12">
          <p className="p2 font-weight-500 font-color-gray">
            {this.props.percent}%
          </p>
        </div>
        <div className="col-12 d-flex justify-content-start align-items-center">
          <div
            style={{
              width: this.props.width,
              height: "12px",
              background: this.props.color,
            }}
          ></div>
        </div>
      </div>
    );
  }
}
