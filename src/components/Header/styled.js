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
  padding: 0 60px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1400px) {
    max-width: 1250px;
  }

  @media (max-width: 992px) {
    max-width: 800px;
    padding: 0 40px;
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

export const RightMenu = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    margin-left: 0;
    width: 99%;
  }
`;

export const Search = styled.div`
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

export const Cart = styled.div`
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  width: ${(props) => props.width};
  height: auto;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 992px) {
    display: ${(props) => props.displayMobile};
  }
`;

export const CartItemCount = styled.div`
  position: absolute;
  background-color: #e02954;
  font-size: 12px;
  width: 18px;
  height: 18px;
  font-weight: bold;
  border-radius: 50%;
  color: white;
  z-index: 2;
  right: -8px;
  top: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuBurger = styled.div`
  display: none;

  @media screen and (max-width: 992px) {
    display: flex;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 1.5em;
    cursor: pointer;
  }
`;
