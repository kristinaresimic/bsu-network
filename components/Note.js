import React, { useState } from "react";
import "../styles/ModalStyles/index.scss";
import ModalForm from "./ModalForm";
import DataState from "./store/DataState";

const Note = (props) => {
  const visible = props.inViewport ? " is-visible" : "";
  const [show, setShow] = useState(false);

  return (
    <div className='note' style={{ marginBottom: 100 }} ref={props.forwardedRef}>
      <div className='note-text-wrapper col-12 col-xl-7 mx-auto'>
        <p className={"text-center pb-3 fade-in-section-top" + visible}>Note:</p>
        <p className={"fade-in-section" + visible}>
          Only a certain amount of Masternodes are allowed on the blockchain. The earlier you join,
          the higher the rewards become as the price of BSU increases.
        </p>
        <div
          className={
            "col-8 col-sm-4 col-md-4 col-lg-3 col-xl-4 mx-auto pt-5 fade-in-section-top" + visible
          }>
          {/* <Link href='#' className='join-bsu--button'>
            APPLY
          </Link> */}
          <p
            className='join-bsu--button' 
            onClick={() => {
              setShow(true);
            }}>
            APPLY
          </p>
        </div>
        <p className={"pt-3 fade-in-section" + visible}>To become a node now</p>
        <p className={"pt-5 fade-in-section" + visible}>Don't want to run your own masternode? You can still get involved with Masternode Staking!</p>
        
      </div>
      <p> Find out more at <a className="fade-in-section-top-link" href="https://bsu.community/" target="_blank">BSU Community</a></p>
      <DataState>
        <ModalForm show={show} toggleModal={() => setShow(false)} />
      </DataState>
    </div>


    
  );
};

export default Note;
