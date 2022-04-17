import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  border-bottom: 1px solid #c4dbe1;
  width: 100%;
  white-space: nowrap;
  height: 80px;
  transition: 0.2s;
  z-index: 999;

  @media (max-width: 992px) {
    height: ${(props) => (props?.height === "true" ? "80px" : "310px")};
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

  @media (max-width: 992px) {
    max-width: 800px;
    padding: 0 50px;
  }

  @media (max-width: 768px) {
    max-width: 800px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  @media (max-width: 992px) {
    align-items: start;
    flex-direction: column;
    overflow: hidden;
  }
`;

export const Title = styled.h1`
  letter-spacing: 4px;
  font-size: 2em;
  color: #566ffe;
  font-weight: 800;
  cursor: pointer;

  @media (max-width: 992px) {
    margin-top: 20px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  margin-top: 5px;
  margin-left: 100px;

  @media (max-width: 992px) {
    margin-left: 0;
    flex-direction: column;
    margin-top: 25px;
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
    margin-top: 20px;
  }
`;

export const MenuSearch = styled.div`
  width: 250px;
  background: none;
  border: 1px solid #91a0a4;
  border-radius: 16px;
  margin-left: auto;

  @media (max-width: 992px) {
    margin-left: 0;
    margin-top: 40px;
    width: 99%;
  }
`;

export const MenuBurger = styled.div`
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
    position: absolute;
    right: 0;
    top: 1.5em;
    cursor: pointer;
  }
`;
