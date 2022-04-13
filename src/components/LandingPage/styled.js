import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 700px;
`;

export const Hero = styled.div`
  min-height: inherit;
  width: 100%;
  background: #171717;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: -3em;
  text-transform: uppercase;
  color: #ededed;
  letter-spacing: 10px;
  font-size: 2em;
  font-weight: bold;
`;

export const Timer = styled.h3`
  margin-top: 18px;
  color: #da0037;
  letter-spacing: 10px;
  font-size: 3em;
  font-weight: bold;
`;

export const Wrapper = styled.div`
  background: #444444;
  min-height: 400px;
`;
