import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CloseIcon from "../assets/close";
import { closeModal, selectedModal } from "../redux/slices/modal.slice";
import AlertModal from "./AlertModal";
import Backdrop from "./Backdrop";
import ConfirmModal from "./ConfirmModal";
import LoginModal from "./LoginModal";

const GlobalModal = () => {
  const dispatch = useDispatch();

  const { isOpen, modalType, modalProps } = useSelector(selectedModal);

  const renderModal = () => {
    switch (modalType) {
      case "alert":
        return <AlertModal {...modalProps} />;
      case "confirm":
        return <ConfirmModal {...modalProps} />;
      case "login":
        return <LoginModal {...modalProps} />;
      default:
        return null;
    }
  };

  const handleBackdropClick = () => {
    dispatch(closeModal());
    dispatch(setIsLoginOpen(false));
  };

  return isOpen ? (
    <Backdrop>
      <div className="modal">
        <StyledSpan onClick={handleBackdropClick}>
          <CloseIcon />
        </StyledSpan>
        {renderModal()}
      </div>
    </Backdrop>
  ) : null;
};
export default GlobalModal;

const StyledSpan = styled.span`
  position: absolute;
  top: -30px;
  right: -30px;
  cursor: pointer;
`;
