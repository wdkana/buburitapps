import styled from "styled-components";

export const paddingSpace = "1.5rem";

export const Container = styled.div`
  box-shadow: 0 17px 13px 0 rgb(25 44 75 / 8%);
  overflow: hidden;
  background: ${(props) => props.color};
  z-index: ${(props) => props.zIndex};
  position: relative;
  box-sizing: border-box;
  display: block;

  &:before {
    content: "";
    position: absolute;
    right: 0;
    background: url(${(props) => props.src});
    width: 315px;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
    box-sizing: border-box;

    @media (max-width: 1400px) {
      width: 285px;
    }

    @media (max-width: 992px) {
      width: 500px;
    }
  }
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 700px;
  padding-left: calc(${paddingSpace} / 2);
  padding-right: calc(${paddingSpace} / 2);
  margin-left: auto;
  margin-right: auto;
  margin-top: ${(props) => props.mt};

  @media (max-width: 1400px) {
    max-width: 1250px;
  }

  @media (max-width: 768px) {
    max-width: 800px !important;
  }
`;

export const Hero = styled.div`
  min-height: inherit;
  display: flex;
  flex-wrap: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;

export const HeroRow = styled.div`
  max-width: 100%;
  flex-shrink: 0;
  width: 100%;

  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 50%;
  }
`;

export const HeroImage = styled.img`
  width: 85%;
  max-width: 100%;
  height: auto;
  user-select: none;
  vertical-align: middle;
  padding-left: 40px;

  @media (max-width: 1270px) {
    width: 100%;
  }

  @media (max-width: 992px) {
    padding-left: 0;
  }
`;

export const Text = styled.div`
  padding: 100px 0;
  margin-left: 50px;

  @media (max-width: 992px) {
    margin: 0 40px;
    padding-top: 100px;
    padding-bottom: 20px;
  }
`;

export const Title = styled.h1`
  letter-spacing: 4px;
  line-height: 1.2;
  font-size: 2.5em;
  color: #183b56;
  font-weight: 800;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #6f7d95;
  max-width: 37.5rem;
  margin: 16px 0;
`;

export const Timer = styled.h3`
  margin-top: 8px;
  color: #da0037;
  letter-spacing: 10px;
  font-size: 3em;
  font-weight: bold;

  @media (max-width: 850px) {
    font-size: 2em;
  }
`;

export const ProductWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50;
`;

export const ProductTitle = styled.h2`
  font-size: 2em;
  color: #183b56;
  font-weight: 700;
  padding-left: 10px;
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
  padding: 14px;
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
  padding: 0 1.5em;
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
