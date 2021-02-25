import React, { useState, useEffect } from "react";
import "../../styles/ModalStyles/checkbox.scss";
import "../../styles/ModalStyles/fileUpload.scss";
import questionIcon from "../../img/question.png";
import ReactTooltip from "react-tooltip";

export const UserProof = (props) => {
  const file = props.img;
  const [imgDisplay, setImgDisplay] = useState("none");
  const [infoDisplay, setInfoDisplay] = useState("flex");

  useEffect(() => {
    if (file) {
      setImgDisplay("flex");
      setInfoDisplay("none");
    } else {
      setImgDisplay("none");
      setInfoDisplay("flex");
    }
  });

  const uploadImage = (e) => {
    if (e) {
      props.setImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className=' col-12 col-sm-10 col-md-10 col-lg-6 col-xl-6 user-proof mt-5'>
      <h5 className='h5 fw-700'>{props.heading} </h5>
      <div className='col-12 user-proof-content mt-4'>
        <p className='p1 m-0 p-0 ml-2 '>-{props.p1}</p>
        <p className='p1 m-0 p-0 ml-2'> - {props.p2}</p>
        <p className='p1 m-0 p-0 ml-2'>- {props.p3}</p>
      </div>
      <div className=' ml-2 p-3'>
        <div onClick={() => document.getElementById("input").click()}
          className=' cursor d-flex align-items-center'>
          <div
            style={{
              background: file ? "white" : "rgba(40, 49, 131, 0.3)",
            }}
            className={`user-proof-import ${!file && " border-error "
              } mb-4 d-flex flex-column justify-content-center align-items-center`}>
            <div style={{ display: imgDisplay }} className='user-proof-import-img '>
              <img src={file} style={{ marginRight: 10 }} />
            </div>
            <div style={{ display: infoDisplay }} className='user-proof-import-info '>
              <div>
                <p className='p1 c-grey'>Insert your file here</p>
                <p className='text-center p4 c-grey'>(Max size 2MB)</p>
              </div>
            </div>
          </div>
          <div>
            {file && (
              <a data-tip data-for='question'>
                <img src={questionIcon} />
                <ReactTooltip id='question' type='warning' aria-haspopup='true'>
                  <span>We will contact you as soon as we review your information</span>
                </ReactTooltip>
              </a>
            )}
            {/* <input
              checked={file}
              type='checkbox'
              id={props.checkboxName}
              name={props.checkboxName}
              value='Apple'
            />
            <label for={props.checkboxName}></label> */}
          </div>
        </div>
        <div className='user-proof-upload m-0 p-0 d-flex justify-content-space-around '>
          <div className='fileUpload user-proof-upload-btn  d-flex justify-content-center align-items-center text-align-center'>
            <input
              type='file'
              id="input"
              onChange={(e) => uploadImage(e)}
              
              />
            <span className='cursor c-white p2'>Browse</span>
          </div>
          {file && (
            <button
              onClick={() => props.setImg("")}
              className='p2 user-proof-upload-btn border-0 c-white ml-4 p-0 m-0 '>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
