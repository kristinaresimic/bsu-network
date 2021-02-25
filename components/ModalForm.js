import { useState, useContext } from "react";
import { Modal } from "react-overlays";
import { LastStep } from "./ModalComponents/Finish";
import { Layout } from "./ModalComponents/Layout";

import MasterNode from "./ModalComponents/MasterNode";
import { ModalNavbar } from "./ModalComponents/ModalNavbar";
import { Requirements } from "./ModalComponents/Requirements";
import { User } from "./ModalComponents/User";
import DataContext from "./store/dataContext";

const Backdrop = () => {
  return <div className='modal--backdrop'></div>;
};

const ModalForm = ({ show, toggleModal }) => {
  const { page, goNextPage, goToPage, goPreviousPage, send } = useContext(DataContext);

  const renderBackdrop = () => <Backdrop />;
  return (
    <div className='modal'>
      <Modal
        className='modal--content'
        show={show}
        onHide={toggleModal}
        renderBackdrop={renderBackdrop}
        onBackdropClick={toggleModal}
        aria-labelledby='modal-label'
        keyboard={true}>
        <div className='text'>
          <button className='close  p-3' onClick={toggleModal}>
            X
          </button>
          {/* <h4 id='modal-label'>Text in a modal</h4>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          <button onClick={toggleModal}></button> */}
          <ModalNavbar pageName={page === 0 ? "Requirements" : page === 1 ? "Mastenode" : page === 2 ? "User" : "Finish"} />
          <div className='modal--change-content'></div>
          <Layout
            backNo={page === 0}
            nextNo={page === 2 || page === 3}
            nextClick={goNextPage}
            backClick={goPreviousPage}
            page={page}
            closeModal={toggleModal}
            send={send}
            goToPage={(p) => goToPage(p)}>
            {page === 0 && <Requirements />}
            {page === 1 && <MasterNode />}
            {page === 2 && <User />}
            {page === 3 && <LastStep />}
          </Layout>
          {/* <ModalForm /> */}
        </div>
      </Modal>
    </div>
  );
};

export default ModalForm;
