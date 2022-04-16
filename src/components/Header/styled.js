import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  background: #fff;
  border-bottom: 1px solid #e2eef1;
  width: 100%;
  white-space: nowrap;
  height: 80px;

  @media (max-width: 992px) {
    /* height: ${(props) => (props.height ? "80px" : "270px")}; */
    height: 270px;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 100px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1400px) {
    max-width: 1250px;
  }

  @media (max-width: 768px) {
    max-width: 800px !important;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 992px) {
    align-items: start;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  letter-spacing: 4px;
  font-size: 2em;
  color: #566ffe;
  font-weight: 800;

  @media (max-width: 992px) {
    margin-top: 15px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  margin-top: 5px;
  margin-left: 100px;

  @media (max-width: 992px) {
    margin-left: 0;
    flex-direction: column;
    margin-top: 15px;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  margin-right: 3em;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 500;

  &:hover {
    color: #566ffe;
  }

  @media (max-width: 992px) {
    margin-top: 10px;
  }
`;

export const MenuSearch = styled.div`
  width: 250px;
  background: none;
  border: 1.5px solid black;
  border-radius: 16px;
  margin-left: auto;

  @media (max-width: 992px) {
    margin-left: 0;
    margin-top: 25px;
  }
`;
