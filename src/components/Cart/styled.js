import styled from "styled-components";

export const CartHeaderContainer = styled.div`
  background: #fff;
  padding: 50px 0;
  border-bottom: 1px solid #c5d0d3;
  position: relative;
  z-index: 0;
`;

export const CartHeaderTitle = styled.h1`
  text-align: center;
  letter-spacing: 2px;
  line-height: 1.2;
  font-size: 40px;
  color: #183b56;
  font-weight: 800;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: #ecf1f9;
`;

export const Wrapper = styled.div`
  min-height: 200px;
  display: flex;
  width: 100%;
  padding: 3em 8em;
  margin: auto;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 2em;
  }
`;

export const ProductNotFound = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: inherit;
`;

export const ProductNotFoundText = styled.p`
  font-size: 18px;
  color: #183b56;
`;

export const ProductSection = styled.div`
  width: 65%;
  margin-right: 45px;
  border-radius: 8px;
  box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.12);
  background-color: #fff;
  padding: 24px;
  min-height: 400px;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const ProductList = styled.div`
  margin-bottom: 20px;
  width: 100%;
  border-bottom: 4px solid #c4dbe1;
  padding-bottom: 16px;
`;

export const ProductItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.div`
  width: 14%;

  @media (max-width: 720px) {
    width: 20%;
  }

  @media (max-width: 560px) {
    width: 40%;
  }
`;

export const ProductData = styled.div`
  margin-left: 16px;
  width: 85%;
`;

export const ProductTitle = styled.p`
  font-size: 16px;
`;

export const ProductPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const ProductPrice = styled.p`
  font-size: 14px;
`;

export const ProductTotalPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding-left: 8px;
`;

export const ProductButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  justify-content: flex-end;
`;

export const ButtonQuantity = styled.div`
  display: flex;
`;

export const ButtonAction = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  height: 18px;
  width: 18px;
  background-color: transparent;
  margin-right: ${(props) => `${+props.mr}em`};

  @media (max-width: 400px) {
    margin-right: ${(props) => `${+props.mr - 1}em`};
  }
`;

export const ProductQuanity = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0 20px;
`;

export const ProductSummary = styled.div`
  width: 32%;
  position: relative;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const ProductSummaryWrapper = styled.div`
  position: ${(props) => (props.isScrollBottom ? "absolute" : "fixed")};
  width: ${(props) => (props.isScrollBottom ? "100%" : "25.5%")};
  bottom: ${(props) => (props.isScrollBottom ? 0 : "inherit")};
  right: auto;

  @media (max-width: 992px) {
    position: relative;
    width: 100%;
    margin-top: 16px;
  }
`;

export const ProductSummaryCard = styled.div`
  display: block;
  position: relative;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.12);
  background-color: #fff;
  cursor: default;
`;

export const ProductSummaryCardContent = styled.div``;

export const ProductSummaryText = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: ${(props) => props.mt};
`;

export const ProductSummaryHead = styled.div`
  font-weight: bold;
`;

export const ProductSummarySubHead = styled.div`
  font-weight: 200;
`;

export const ProductSummarySpacer = styled.hr`
  margin: 26px 0px;
  height: 1px;
  background-color: #c4dbe1;
  border: none;
`;

export const ButtonBuy = styled.button`
  border: 0;
  height: 45px;
  width: 100%;
  border-radius: 8px;
  margin-top: 26px;
  cursor: pointer;
  font-size: 16px;
  background-color: #566ffe;
  color: #fff;
  transition: 0.6s;
  box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    filter: brightness(115%);
  }
`;
