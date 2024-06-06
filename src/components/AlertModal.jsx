import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/slices/modal.slice";
import Button from "./Button";

const AlertModal = ({ message }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal-content">
      <p> {message} </p>
      <Button color="#ff851b" size="large" onClick={handleClose}>
        확인
      </Button>
    </div>
  );
};

export default AlertModal;
