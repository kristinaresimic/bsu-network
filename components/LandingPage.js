// import Link from "next/link";
import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/ModalStyles/index.scss";

import homeBg from "../img/home/background.svg";
import logoBSU from "../img/bsu/logo-bsu.svg";
import DataState from "./store/DataState";
import ModalForm from "./ModalForm";


const LandingPage = (props) => {
  const visible = props.inViewport ? " is-visible" : "";
  const [show, setShow] = useState(false);

  return (
    <div className='home full-section' ref={props.forwardedRef}>
      <div className='container-fluid'>
        <div className=" ml-lg-5 ml-xl-5 mt-lg-3 mt-xl-3">
          <a href="#">
            <img
              className="bsu-logo"
              src={logoBSU}
              alt="bsu logo"
            />
          </a>

        </div>
        <div className='home-text col-12 col-md-12 col-lg-6 col-xl-6'>

          <div className='home-text-left col-12 col-md-6 col-lg-10 col-xl-9'>
            <h1 className={"c-blue fade-in-section-top" + visible}>BSU</h1>
            <h3 className={"fade-in-section" + visible}>network</h3>
            <p className={"my-5 fade-in-section-top" + visible}>
              Explore the entire node network on the Inery Blockchain. Become a Masternode and
              passively earn BSU for each successful transaction made.{" "}
            </p>
            {/*  <div className={"fade-in-section" + visible}>
              <Link
                activeClass='active'
                className={"fade-in-section " + visible}
                to='join-network'
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={1000}>
                FIND OUT MORE
              </Link>
            </div> */}
            <div
              className={
                "home-text-left-btn col-8 col-sm-4 col-md-6 col-lg-5 col-xl-6 fade-in-section-top pl-0" + visible
              }>
              {/* <Link href='#' className='join-bsu--button'>
            APPLY
          </Link> */}
              <p
                className='home-text-left-button'
                onClick={() => {
                  setShow(true);
                }}>
                APPLY
          </p>

              <DataState>
                <ModalForm show={show} toggleModal={() => setShow(false)} />
              </DataState>
            </div>
          </div>
        </div>
      </div>

      <img src={homeBg} alt='home background image' className='home--background' />
      <div className='home--dashboardLogin'>
        <a href=''>Dashboard login</a>
      </div>
    </div>
  );
};

export default LandingPage;
