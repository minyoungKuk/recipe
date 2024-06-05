import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/slices/modal.slice";
import Button from "./Button";

const LoginModal = ({ message, onConfirm, onCancel }) => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    onConfirm && onConfirm();
    dispatch(closeModal());
  };

  const handleCancel = () => {
    onCancel && onCancel();
    dispatch(closeModal());
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <p> {message} </p>
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

export default LoginModal;
