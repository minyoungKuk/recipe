import { useSelector } from "react-redux";
import { selectedModal } from "../redux/slices/modal.slice";
import AlertModal from "./AlertModal";
import Backdrop from "./Backdrop";
import ConfirmModal from "./ConfirmModal";
import LoginModal from "./LoginModal";

const GlobalModal = () => {
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
  return isOpen ? <Backdrop>{renderModal()}</Backdrop> : null;
};
export default GlobalModal;
