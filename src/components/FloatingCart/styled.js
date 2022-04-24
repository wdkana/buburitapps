import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: ${(props) => (props?.isOpen ? "300px" : "0px")};
  opacity: ${(props) => (props?.isOpen ? "1" : "0")};
  visibility: ${(props) => (props?.isOpen ? "visible" : "hidden")};
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 20%);
  background-color: white;
  transition: 0.2s;
  position: absolute;
  top: 80px;
  right: 10px;
  z-index: 100;
  padding: 18px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding-bottom: 12px;
  border-bottom: 1px solid #c4dbe1;
`;

export const HeaderText = styled.p`
  font-size: 14px;
`;

export const HeaderButton = styled.button`
  border: 0;
  height: 45px;
  cursor: pointer;
  font-size: 14px;
  color: #566ffe;
  transition: 0.2s;
  background: none;
  font-weight: bold;

  &:hover {
    filter: brightness(120%);
  }
`;

export const Content = styled.div`
  padding-top: 8px;
  overflow: auto;
  max-height: 90%;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const ProductItem = styled.div`
  margin-bottom: 10px;
  width: 100%;
  border-bottom: 1px solid #c4dbe1;
  padding-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;

  :nth-last-child(1) {
    border: none;
    margin-bottom: 0;
    padding-bottom: 6px;
  }
`;

export const ProductImage = styled.div`
  width: 10%;
`;

export const ProductData = styled.div`
  margin-left: 16px;
  width: 58%;
`;

export const ProductTitle = styled.p`
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
`;

export const ProductQuanity = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

export const ProductPrice = styled.div`
  font-size: 16px;
  margin-left: auto;
  color: #e02954;
  font-weight: bold;
  padding-right: 8px;
`;
