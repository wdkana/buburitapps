import styled from "styled-components";

export const Footer = styled.footer`
  padding: 5em 10em 3em 10em;
  background-color: #fff;
  z-index: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  letter-spacing: 4px;
  line-height: 1.2;
  font-size: 1.5em;
  color: #566ffe;
  font-weight: 800;
  text-transform: uppercase;

  @media (max-width: 768px) {
    margin-bottom: 2em;
  }
`;

export const Copyright = styled.p`
  font-size: 0.8em;
  color: #183b56;
`;

export const MenuWrapper = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;

  &:nth-child(2) {
    margin-right: 0;
  }
`;

export const SubTitle = styled.h3`
  letter-spacing: 4px;
  line-height: 1.2;
  font-size: 1em;
  color: #183b56;
  font-weight: 800;
  margin-bottom: 22px;
`;

export const Item = styled.p`
  font-size: 0.9em;
  color: #183b56;
  margin-bottom: 12px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #566ffe;
  }
`;
