import { memo } from "react";
import Link from "next/link";

import {
  Copyright,
  Footer,
  Item,
  Menu,
  MenuWrapper,
  SubTitle,
  Title,
  Wrapper,
} from "./styled";

const FooterComponent = () => {
  return (
    <Footer>
      <Wrapper>
        <div>
          <Link href="/" passHref>
            <Title>Cuyshop</Title>
          </Link>
          <Copyright>
            Copyright &copy; {new Date().getFullYear()}. Cuy Team
          </Copyright>
        </div>
        <MenuWrapper>
          <Menu>
            <SubTitle>Cuyshop</SubTitle>
            <Link href="/store" passHref>
              <Item>Produk</Item>
            </Link>
            <Link href="/about" passHref>
              <Item>Tentang Kami</Item>
            </Link>
          </Menu>
          <Menu>
            <SubTitle>Kontak</SubTitle>
            <a
              target="_blank"
              href="https://www.youtube.com/c/DeaAfrizal"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}>
              <Item>Youtube</Item>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/dea.afrizal/"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}>
              <Item>Instagram</Item>
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@dea.afrizal"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}>
              <Item>Tiktok</Item>
            </a>
          </Menu>
        </MenuWrapper>
      </Wrapper>
    </Footer>
  );
};

export default memo(FooterComponent);
