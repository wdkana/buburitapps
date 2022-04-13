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

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 850px) {
    margin-top: 6em;
  }
`;

export const Title = styled.h1`
  margin-top: -3em;
  text-transform: uppercase;
  color: #ededed;
  letter-spacing: 10px;
  font-size: 2em;
  font-weight: bold;

  @media (max-width: 850px) {
    font-size: 1.8em;
  }
`;

export const Timer = styled.h3`
  margin-top: 18px;
  color: #da0037;
  letter-spacing: 10px;
  font-size: 3em;
  font-weight: bold;

  @media (max-width: 850px) {
    font-size: 2em;
  }
`;

export const ProductWrapper = styled.div`
  background: #444444;
  min-height: 400px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ProductTitle = styled.h2`
  text-align: center;
  letter-spacing: 10px;
  font-size: 2em;
  padding-top: 3em;
  color: #ededed;
  text-transform: uppercase;
`;

export const ProductList = styled.div`
  flex-direction: row;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5em;
  width: 100%;
  margin: 3em 0;
  padding: 0 4em;
  box-sizing: border-box;
`;

export const ProductBox = styled.div`
  min-height: 300px;
  min-width: 250px;
  background-color: #575757;
  box-shadow: 8px 5px 8px 1px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: 8px 5px 8px 1px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 8px 5px 8px 1px rgba(0, 0, 0, 0.29);
`;

export const ProductButton = styled.button`
  border: 0;
  width: 230px;
  height: 45px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 4em;
  background-color: #da0037;
  color: #fff;
  transition: 0.2s;
  box-shadow: 8px 5px 8px 1px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: 8px 5px 8px 1px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 8px 5px 8px 1px rgba(0, 0, 0, 0.29);

  &:hover {
    filter: brightness(110%);
  }
`;
