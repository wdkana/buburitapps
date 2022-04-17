import styled from "styled-components";

export const paddingSpace = "1.5rem";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 760px;
  background-color: #ecf1f9;
`;

export const Wrapper = styled.div`
  min-height: inherit;
  display: flex;
  flex-wrap: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1152px;
  margin: auto;
  padding: 20px 10px;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 50px 100px;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    padding: 50px 40px;
  }
`;

export const WrapperRow = styled.div`
  max-width: 100%;
  flex-shrink: 0;
  width: 100%;
  margin-bottom: 4em;

  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 50%;
    margin-bottom: 0;
  }
`;

export const ProductNotFound = styled.p`
  color: #183b56;
  margin-right: 2em;
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 15px;
`;

export const ImageWrapper = styled.div`
  width: 450px;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 20px;
`;

export const ProductCategory = styled.p`
  text-transform: uppercase;
  color: #566ffe;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 1.5px;
`;

export const ProductName = styled.h2`
  font-size: 45px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const ProductDetails = styled.div``;

export const Description = styled.div`
  color: #183b56;
  margin-bottom: 20px;
  line-height: 1.6;
  height: 140px;
  overflow: auto;
`;

export const Price = styled.div`
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 25px;
  margin-right: 15px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 478px) {
    margin-top: 20px;
  }
`;

export const ButtonQuantity = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: hsl(223, 64%, 98%);
  width: fit-content;
  height: 45px;
  width: 160px;
  border-radius: 10px;
  user-select: none;
  margin-right: 20px;
  box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);

  @media (max-width: 478px) {
    width: 60%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ButtonCalc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  padding: 25px;
  cursor: pointer;
  font-weight: 800;
  transition: 0.2s;
  color: #566ffe;

  &:hover {
    font-size: 1.5em;
  }
`;

export const Quantity = styled.div`
  font-weight: 700;
  width: 50px;
  text-align: center;
  font-size: 1.2em;
`;

export const ButtonCart = styled.button`
  border: 0;
  padding: 0 1.5em;
  height: 45px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1em;
  background-color: #566ffe;
  color: #fff;
  transition: 0.2s;
  box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    filter: brightness(115%);
  }

  @media (max-width: 478px) {
    width: 60%;
  }
`;

export const ButtonBack = styled.button`
  border: 1px solid #566ffe;
  padding: 0 1em;
  height: 32px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 12px;
  background-color: #fff;
  color: #566ffe;
  transition: 0.2s;
  box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 5px 8px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    filter: brightness(115%);
  }
`;
