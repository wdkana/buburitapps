import React from "react";
import {
  About,
  Container,
  Image,
  ImageColumn,
  ImageContainer,
  ImageText,
  ImageWrapper,
  Title,
} from "./styled";

const AboutComponent = () => {
  return (
    <Container>
      <About>
        <Title>Tentang Kami</Title>
        <ImageContainer>
          <ImageWrapper>
            <Image src="/assets/dea.png" alt="about" />
            <ImageText>Dea Afrizal</ImageText>
          </ImageWrapper>
          <ImageColumn>
            <ImageWrapper mr="6em">
              <Image src="/assets/gegy.jpeg" alt="about" />
              <ImageText>Gegy Hamdani</ImageText>
            </ImageWrapper>
            <ImageWrapper>
              <Image src="/assets/tedi.png" alt="about" />
              <ImageText>Tedi Suryadi</ImageText>
            </ImageWrapper>
          </ImageColumn>
        </ImageContainer>
      </About>
    </Container>
  );
};

export default AboutComponent;
