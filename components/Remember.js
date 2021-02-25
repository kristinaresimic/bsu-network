import React from "react";
import rememberImg from "../img/remember/background.png";

const Remember = (props) => {
  const visible = props.inViewport ? " is-visible" : "";
  return (
    <div className="remember"  ref={props.forwardedRef}>
      <div className="remember-text col-12 col-xl-7">
        <div>
          <h5 className={"c-blue fade-in-section-top" + visible}>Remember!</h5>
          <p className={"fade-in-section" + visible}>
            As the price of BSU increases,
            <br />
            <span>So does the value of your rewards!</span>
          </p>
        </div>
      </div>
      <img className="remember--background" src={rememberImg} alt="remember background"/>
    </div>
  );
};

export default Remember;
