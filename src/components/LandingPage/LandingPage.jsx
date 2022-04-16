import { useEffect, useState, useCallback } from "react";

import {
  Container,
  Hero,
  Text,
  Title,
  ProductWrapper,
  ProductTitle,
  ProductList,
  ProductBox,
  ProductButton,
  ProductImage,
  ProductImageWrapper,
  ProductDetailTitle,
  ProductDetail,
  ProductDetailPrice,
  ProductDetailDesc,
  ProductDetailCategory,
  HeroImage,
  SubTitle,
  HeroRow,
  Wrapper,
  ProductCol,
} from "./styled";
import { getProduct } from "../../api/storeAPI.js";
import Link from "next/link";
import Header from "../Header/Header.jsx";

const LandingPage = () => {
  const [listProduct, setListProduct] = useState([]);

  const getListProduct = async () => {
    const products = await getProduct();
    const sliceProducts = products.slice(0, 8);
    setListProduct(sliceProducts);
  };

  useEffect(() => {
    getListProduct();
  }, []);

  return (
    <>
      <Header />
      <Container src="./assets/hero-new.webp" color="#fff" zIndex="1">
        <Wrapper>
          <Hero>
            <HeroRow>
              <HeroImage src="./assets/hero-1.webp" />
            </HeroRow>
            <HeroRow>
              <Text>
                <Title>Temukan barang yang kamu inginkan di Cuyshop</Title>
                <SubTitle>
                  Cuyshop adalah e-commerce yang dapat memberiukan pengalaman
                  terbaik untuk jual beli bagi pengguna
                </SubTitle>
                <Link href="/store" passHref>
                  <ProductButton>Explore produk</ProductButton>
                </Link>
              </Text>
            </HeroRow>
          </Hero>
        </Wrapper>
      </Container>
      <Container color="#ecf1f9" zIndex="0">
        <Wrapper mt="100px">
          <ProductTitle>Product</ProductTitle>
          <ProductWrapper>
            <ProductList>
              {listProduct.map((product, index) => {
                return (
                  <ProductCol key={index}>
                    <ProductBox>
                      <ProductImageWrapper>
                        <ProductImage src={product.image} />
                      </ProductImageWrapper>
                      <ProductDetail>
                        <ProductDetailCategory>
                          {product.category}
                        </ProductDetailCategory>
                        <ProductDetailTitle>{product.title}</ProductDetailTitle>
                        <ProductDetailPrice>
                          {product.price}$
                        </ProductDetailPrice>
                        <ProductDetailDesc>
                          {product.description}
                        </ProductDetailDesc>
                      </ProductDetail>
                    </ProductBox>
                  </ProductCol>
                );
              })}
            </ProductList>
            <Link href="/store" passHref>
              <ProductButton>Lihat seluruh produk</ProductButton>
            </Link>
          </ProductWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default LandingPage;
