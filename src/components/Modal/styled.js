import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 30px;
  opacity: ${(props) => (props?.isOpen ? "1" : "0")};
  visibility: ${(props) => (props?.isOpen ? "visible" : "hidden")};
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.55);
  color: #fff;
  transition: 0.2s;
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;
