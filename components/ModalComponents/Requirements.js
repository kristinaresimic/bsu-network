import React from "react";
import { RequirementsItem } from "./RequirementsItem";
import "../../styles/ModalStyles/radio.scss";

export const Requirements = () => {
  return (
    <div className='requirements row d-flex justify-content-between pt-4 pt-lg-0 '>
      <div className=' col-12 col-xl-6 '>
        <RequirementsItem
          heading='1.   Minimum requirements:'
          paragraph='View the following requirements and check the box that applies to you.'
          processor='3GHz'
          ram='8GB DDR4 RAM'
          storage='500GB SSD Storage'
          network='1 GBit/s port (125 MB/s)'
          server='24/7 Server Uptime'
          system='Ubuntu 18.04.'
          radioName='minimum'
        />
      </div>
      <div className='  col-12 col-xl-6  '>
        <RequirementsItem
          heading='2. Recommended requirements:'
          paragraph='View the following requirements and check the box that applies to you.'
          processor='4GHz'
          ram='32GB DDR4 RAM'
          storage='2TB SSD Storage'
          network='1 GBit/s port (125 MB/s)'
          server='24/7 Server Uptime'
          system='Ubuntu 20.04.'
          radioName='recommended'
        />
      </div>
    </div>
  );
};
