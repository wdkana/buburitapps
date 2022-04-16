import { useState } from "react";

import {
  Container,
  HeaderWrapper,
  Menu,
  MenuItem,
  MenuSearch,
  Title,
  Wrapper,
} from "./styled";
import styled from "./index.module.css";

const Header = () => {
  const [isShrinkHeader, setIsShrinkHeader] = useState(true);

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
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
