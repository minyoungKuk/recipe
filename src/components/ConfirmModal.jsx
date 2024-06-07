import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/slices/modal.slice";
import Button from "./Button";

const ConfirmModal = ({ message }) => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    onConfirm();
    dispatch(closeModal());
  };

  const handleCancel = () => {
    onCancel();
    dispatch(closeModal());
  };

  return (
    <div className="modal-content">
      <p> {message} </p>
      <div className="modal-btn-wrap">
        <Button color="#ff851b" onClick={handleConfirm}>
          확인
        </Button>
        <Button color="#ff851b" onClick={handleCancel}>
          취소
        </Button>
      </div>
    </div>
  );
};

export default ConfirmModal;
