import styled from "styled-components";

export const paddingSpace = "1.5rem";

export const StoreHeaderContainer = styled.div`
  background: #fff;
  padding: 100px 0;
  border-bottom: 1px solid #c5d0d3;
  position: relative;
  z-index: 0;
`;

export const StoreHeaderTitle = styled.h1`
  text-align: center;
  letter-spacing: 2px;
  line-height: 1.2;
  font-size: 3em;
  color: #183b56;
  font-weight: 800;
`;

export const StoreCategoryWrapper = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #c5d0d3;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 580px) {
    overflow-y: auto;
  }
`;

export const StoreCategory = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 580px) {
    width: 600px;
  }
`;

export const StoreCategoryItem = styled.div`
  margin-left: 30px;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: #636266;

  &:hover {
    transform: scale(1.05);
    color: #000;
  }

  &:nth-child(1) {
    margin-left: 0;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 700px;
  background-color: #ecf1f9;
`;

export const ProductWrapper = styled.div`
  padding-top: 60px;
  padding-left: calc(${paddingSpace} / 2);
  padding-right: calc(${paddingSpace} / 2);
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1400px) {
    max-width: 1250px;
  }

  @media (max-width: 768px) {
    max-width: 800px;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 2em;
  color: #183b56;
  font-weight: 700;
  padding-left: 10px;
`;

export const ProductListWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 1em 0;
`;

export const ProductCol = styled.div`
  max-width: 100%;
  width: 100%;
  flex: 0 0 auto;

  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 25%;
  }

  @media (min-width: 768px) AND (max-width: 991px) {
    flex: 0 0 auto;
    width: 25%;
  }

  @media (min-width: 576px) AND (max-width: 575px) {
    flex: 0 0 auto;
    width: 50%;
  }
`;

export const ProductBox = styled.div`
  max-width: 300px;
  background: #fff;
  border: 1px solid #e2eef1;
  padding: 16px;
  border-radius: 20px;
  box-shadow: 0 17px 13px 0 rgba(25, 44, 75, 0.0196078431372549);
  margin: 10px;
  margin-bottom: 30px;
  max-width: 30rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImageWrapper = styled.div`
  width: 60%;
  height: 270px;
  position: relative;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) AND (max-width: 992px) {
    width: 80%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) scale(1);
  -moz-transform: translate(-50%, -50%) scale(1);
  -o-transform: translate(-50%, -50%) scale(1);
  transform: translate(-50%, -50%) scale(1);
`;

export const ProductDetail = styled.div`
  padding: 14px 0;
  border-bottom: 1px solid #c5d0d3;
`;

export const ProductDetailCategory = styled.p`
  letter-spacing: 2px;
  font-size: 12px;
  text-align: right;
  padding-bottom: 2em;
`;

export const ProductDetailTitle = styled.h3`
  letter-spacing: 2px;
  font-size: 14px;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
`;

export const ProductDetailPrice = styled.h3`
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: 600;
  padding-top: 6px;
`;

export const ProductDetailDesc = styled.p`
  letter-spacing: 2px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 6px;
  font-weight: 400;
`;

export const ProductButton = styled.button`
  border: 0;
  padding: 0 2.5em;
  height: 45px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 4em;
  background-color: #566ffe;
  color: #fff;
  transition: 0.2s;
  box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    filter: brightness(115%);
  }
`;

export const ProductShowed = styled.p`
  color: #8a8890;
  margin-bottom: 50px;
`;

export const ProductDetailButton = styled.button`
  width: 100%;
  border: 0;
  padding: 0 1em;
  margin-top: 10px;
  height: 30px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.8em;
  background-color: #566ffe;
  color: #fff;
  transition: 0.2s;
  box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    filter: brightness(115%);
  }
`;
