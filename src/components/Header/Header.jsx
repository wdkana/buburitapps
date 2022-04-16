import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const [filterOption, setFilterOption] = useState({
    search: "",
    addData: false,
  });

  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filterOption.value === "") return;
    console.log({ filterOption });
    router.push({ pathname: "/store", query: filterOption }, undefined);
  };

  const handleSearch = (e) => {
    const newQuery = {
      ...filterOption,
      search: e.target.value,
    };
    setFilterOption(newQuery);
  };

  const toggleShrinkHeader = () => {
    setIsShrinkHeader((state) => !state);
  };

  return (
    <HeaderWrapper height={`${isShrinkHeader}`}>
      <Container>
        <Wrapper>
          <Link href="/" passHref>
            <Title>Cuyshop</Title>
          </Link>
          <Menu>
            <Link href="/store" passHref>
              <MenuItem>Produk</MenuItem>
            </Link>
            <MenuItem>Tentang Kami</MenuItem>
          </Menu>
          <MenuSearch>
            <form onSubmit={handleSearchSubmit}>
              <input
                placeholder="Cari produk"
                className={styled.input}
                onChange={handleSearch}
              />
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
