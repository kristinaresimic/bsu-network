import React from "react";
import bsuIcon from "../../img/bsu-icon.png";
import icon1 from "../../img/storage-icon-01.png";
import icon2 from "../../img/storage-icon-02.png";
import icon3 from "../../img/storage-icon-03.png";
import icon4 from "../../img/storage-icon-04.png";
import storageUnitImg from "../../img/storage-unit.png";

const StorageUnit = () => {
  return (
    <>
      <div
        className="background-silver d-flex  flex-column justify-content-start align-items-center pt-1 pb-5"
        id="join-network"
      >
        <div className="col-12 col-md-8">
          <div className="d-flex justify-content-center my-5">
            <img src={bsuIcon} alt="storage unit" width="100" className="bsu-icon" />
          </div>
          <h3 className="h4 font-weight-500 w-100 text-center">
            Blockchain Storage Unit
          </h3>

          <p className="p5 mt-3 font-weight-300 px-5 w-100 text-justify">
            BSU is the storage space used for secure hosting of users’ data and
            Value contract details. BSU memory is required for every transaction
            on the network and will be given as a reward for each verified
            transaction. Initially the amount of BSU is determined by the number
            of Masternodes, as each node must add certain storage capacity to
            Inery. The amount of BSU in the Inery blockchain is directly
            connected with the amount of data users add to the blockchain
          </p>
        </div>
        <div className=" col-12 col-lg-5    d-flex flex-column justify-content-center align-items-center ">
          <img src={storageUnitImg} alt="storage unit" className="storageImg" />
          <div className="storage-text col-12 col-md-8">
            <div className="d-flex flex-column justify-content-center align-items-center mt-4">
              <img src={icon1} alt="storage unit" width="60" />
              <h3
                className="h4 font-weight-500 mt-4 w-100 text-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Data
              </h3>
            </div>

            <p className="p5 mt-3 font-weight-300 px-4 w-100 text-justify">
              The amount of BSU is determined by the number of Master nodes.
              Each node must add certain storage capacity to Inery. The amount
              of BSU in the Inery blockchain is directly connected with the
              amount of data users add to the blockchain.
            </p>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <img src={icon2} alt="storage unit" width="60" />
              <h3
                className="h4 font-weight-500 mt-4 w-100 text-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Earning with BSU
              </h3>
            </div>
            {/* <h3 className="h4 font-weight-500 mt-5 w-100 text-center">
              Earning with BSU
            </h3> */}
            <p className="p5 mt-3 font-weight-300 px-4 w-100 text-justify">
              Monetization from BSU comes from the running of nodes, with each
              verified transaction receiving BSU as a reward. Users can also
              trade their BSU memory for BTC.
            </p>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <img src={icon3} alt="storage unit" width="60" />
              <h3
                className="h4 font-weight-500 mt-4 w-100 text-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Nodes
              </h3>
            </div>
            {/* <h3 className="h4 font-weight-500 mt-5 w-100 text-center">Nodes</h3> */}
            <p className="p5 mt-3 font-weight-300 px-4 w-100 text-justify">
              A set amount of BSU is required to enter the Inery Blockchain and
              become a node. Becoming a master node early on will give you a
              chance to purchase BSU at a set price.
            </p>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <img src={icon4} alt="storage unit" width="60" />
              <h3
                className="h4 font-weight-500 mt-4 w-100 text-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Network
              </h3>
            </div>
            {/* <h3 className="h4 font-weight-500 mt-5 w-100 text-center">
              Network
            </h3> */}
            <p className="p5 mt-3 font-weight-300 px-4 w-100 text-justify">
              Only a set number of nodes are needed for the Inery blockchain to
              run smoothly, therefore, registrations will be closed as soon as
              that number has been reached. If the number of transactions
              increases more nodes will be required in order to keep the
              infrastructure intact. A new port will open by default, allowing
              new users to register as a node and enter the blockchain.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorageUnit;
