import { useContext, useEffect } from "react";

import { Context } from "../../globalState/store";
import { handleActionModal } from "../../globalState/action";
import { modalModel } from "../../models/modal";

import { Container } from "./styled";

const Modal = () => {
  const [state, dispatch] = useContext(Context);
  const { modal } = state || {};
  const { isShowModal, modalText } = modal || {};

  useEffect(() => {
    if (isShowModal) {
      setTimeout(() => {
        handleActionModal(modalModel(false, ""))(dispatch);
      }, 2000);
    }
  }, [isShowModal]);

  return <Container isOpen={isShowModal}>{modalText}</Container>;
};

export default Modal;
