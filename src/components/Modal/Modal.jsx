import { Container } from "./styled";

const Modal = ({ isOpen, text }) => {
  return <Container isOpen={isOpen}>{text}</Container>;
};

export default Modal;
