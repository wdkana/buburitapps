import styled from "styled-components";

export const paddingSpace = "1.5rem";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 760px;
  background-color: #ecf1f9;
  z-index: 0;
  display: block;

  &:before {
    content: "";
    position: absolute;
    right: 0;
    background: url("./assets/hero-new.webp");
    width: 310px;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
    box-sizing: border-box;

    @media (max-width: 1400px) {
      width: 285px;
    }

    @media (max-width: 992px) {
      width: 400px;
    }

    @media (max-width: 635px) {
      width: 350px;
    }
  }
`;

export const About = styled.div`
  min-height: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  letter-spacing: 4px;
  line-height: 1.2;
  font-size: 3em;
  color: #183b56;
  font-weight: 800;
  position: relative;
  text-transform: uppercase;
  margin-right: 4em;

  &:before {
    content: "";
    display: block;
    position: absolute;
    bottom: 2px;
    width: 98%;
    left: 9%;
    border-top: 8px solid #566ffe;
  }

  @media (max-width: 992px) {
    text-align: center;
    margin-right: 0;
    padding-top: 100px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4em;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  margin-right: ${(props) => props.mr};

  @media (max-width: 992px) {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: auto;
  border-radius: 50%;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageText = styled.p`
  color: #183b56;
  margin-top: 12px;
`;

export const ImageColumn = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;

  @media (max-width: 992px) {
    flex-direction: column;
    margin-top: 0;
  }
`;
