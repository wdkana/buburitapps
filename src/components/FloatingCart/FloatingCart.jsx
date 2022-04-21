import { useContext } from "react";
import Image from "next/image";

import { Context } from "../../globalState/store";

import {
  Container,
  Content,
  Header,
  HeaderButton,
  HeaderText,
  ProductList,
  ProductItem,
  ProductTitle,
  ProductPrice,
  ProductData,
  ProductQuanity,
  ProductImage,
} from "./styled";

const FloatingCart = ({ isOpen }) => {
  const [state] = useContext(Context);
  const { cart } = state || {};
  const { totalItem, item = [] } = cart || {};

  return (
    <Container isOpen={isOpen}>
      <Header>
        <HeaderText>Keranjang ({totalItem})</HeaderText>
        <HeaderButton>Lihat semua keranjang</HeaderButton>
      </Header>
      <Content>
        <ProductList>
          {item.map((product, index) => {
            return (
              <ProductItem key={index}>
                <ProductImage>
                  <Image
                    src={product.image}
                    alt="cart"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </ProductImage>

                <ProductData>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductQuanity>{product.quantity} Barang</ProductQuanity>
                </ProductData>
                <ProductPrice>${product.price}</ProductPrice>
              </ProductItem>
            );
          })}
        </ProductList>
      </Content>
    </Container>
  );
};

export default FloatingCart;
