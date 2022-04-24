import { useState, useContext, memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaGripLines } from "react-icons/fa";
import Image from "next/image";

import { Context } from "../../globalState/store";
import FloatingCart from "../FloatingCart/FloatingCart";

import {
  Container,
  HeaderWrapper,
  Menu,
  MenuBurger,
  MenuItem,
  RightMenu,
  Search,
  Cart,
  Title,
  Wrapper,
  CartItemCount,
} from "./styled";
import styled from "./index.module.css";

const Header = () => {
  const [isShrinkHeader, setIsShrinkHeader] = useState(true);
  const [isShowCart, setIsShowCart] = useState(false);
  const [filterOption, setFilterOption] = useState({
    search: "",
    addData: false,
  });
  const [state] = useContext(Context);
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filterOption.search === "") return;
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

  const toggleShowCart = () => {
    setIsShowCart((state) => !state);
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
            <Link href="/about" passHref>
              <MenuItem>Tentang Kami</MenuItem>
            </Link>
          </Menu>
          <RightMenu>
            <Search>
              <form onSubmit={handleSearchSubmit}>
                <input
                  placeholder="Cari produk"
                  className={styled.input}
                  onChange={handleSearch}
                />
              </form>
            </Search>
            <Cart
              ml="18px"
              displayMobile="none"
              width="28px"
              onClick={() => toggleShowCart()}>
              {state.cart.totalItem > 0 && (
                <CartItemCount>{state.cart.totalItem}</CartItemCount>
              )}
              <Image
                src="/assets/icon-cart.svg"
                alt="cart"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </Cart>
          </RightMenu>
          <MenuBurger>
            <Cart mr="24px" width="24px" onClick={() => toggleShowCart()}>
              {state.cart.totalItem > 0 && (
                <CartItemCount>{state.cart.totalItem}</CartItemCount>
              )}
              <Image
                src="/assets/icon-cart.svg"
                alt="cart"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </Cart>
            <FaGripLines size={28} onClick={toggleShrinkHeader} />
          </MenuBurger>
        </Wrapper>
        <FloatingCart isOpen={isShowCart} />
      </Container>
    </HeaderWrapper>
  );
};

export default memo(Header);
