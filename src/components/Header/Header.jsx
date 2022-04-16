import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/Gi";

import {
  Container,
  HeaderWrapper,
  Menu,
  MenuBurger,
  MenuItem,
  MenuSearch,
  Title,
  Wrapper,
} from "./styled";
import styled from "./index.module.css";

const Header = () => {
  const [isShrinkHeader, setIsShrinkHeader] = useState(true);

  const toggleShrinkHeader = () => {
    setIsShrinkHeader((state) => !state);
  };

  return (
    <HeaderWrapper height={isShrinkHeader}>
      <Container>
        <Wrapper>
          <Title>Cuyshop</Title>
          <Menu>
            <MenuItem>Produk</MenuItem>
            <MenuItem>Kategori</MenuItem>
            <MenuItem>Tentang Kami</MenuItem>
          </Menu>
          <MenuSearch>
            <form>
              <input placeholder="Cari produk" className={styled.input} />
            </form>
          </MenuSearch>
          <MenuBurger>
            <GiHamburgerMenu size={28} onClick={toggleShrinkHeader} />
          </MenuBurger>
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
