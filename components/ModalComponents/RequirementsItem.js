import React from "react";
import { useState } from "react";

export const RequirementsItem = (props) => {
  const { heading, paragraph, processor, ram, storage, network, server, system, radioName } = props;
  const [checked, setChecked] = useState(1);
  return (
    <div className=''>
      <p className='h5 fw-700'>{heading}</p>
      <p className='col-12 col-lg-9 col-md-12 col-xl-10 p1 fw-500 ml-3 pl-1'>{paragraph}</p>
      <div>
        <div className='requirements-item '>
          <ul className='requirements-item-top p-0 m-0'>
            <li className='p1 fw-500'>{processor}</li>
            <li className='p1 fw-500'>{ram}</li>
            <li className='p1 fw-500'>{storage}</li>
            <li className='p1 fw-500'>{network}</li>
            <li className='p1 fw-500'>{server}</li>
            <li className='p1 fw-500'>{system}</li>
          </ul>
        </div>

        <div className='requirements-part m-0 p-0 mt-5  '>
          <label
            className='sq-radio d-flex align-items-center fw-500 p1'
            htmlFor={`first-${radioName}`}>
            I can meet the selected requirements.
            <input
              type='radio'
              id={`first-${radioName}`}
              checked={checked === 1}
              onChange={() => setChecked(1)}
              name={radioName}
            />
            <span className='checkmark'></span>
          </label>
          <label
            className='sq-radio d-flex align-items-center fw-500 p1'
            htmlFor={`second-${radioName}`}>
            I would like Inery to set up the selected hardware requirements for me.
            <input
              type='radio'
              id={`second-${radioName}`}
              checked={checked === 2}
              onChange={() => setChecked(2)}
              name={radioName}
            />
            <span className='checkmark'></span>
          </label>
        </div>
      </div>
    </div>
  );
};
