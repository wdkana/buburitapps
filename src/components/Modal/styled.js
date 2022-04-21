import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 35px;
  opacity: ${(props) => (props?.isOpen ? "1" : "0")};
  visibility: ${(props) => (props?.isOpen ? "visible" : "hidden")};
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(86, 111, 254, 40%);
  background-color: white;
  transition: 0.2s;
  position: fixed;
  top: 100px;
  left: 10px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;
