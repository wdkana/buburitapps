import { useEffect, useState } from "react";
import Link from "next/link";

import { getProduct } from "../../api/storeAPI.js";

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

const LandingPage = () => {
  const [listProduct, setListProduct] = useState([]);

  const getListProduct = async () => {
    const products = await getProduct({ page: 1 });
    setListProduct(products);
  };

  useEffect(() => {
    getListProduct();
  }, []);

  return (
    <>
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
                  Cuyshop adalah e-commerce yang dapat memberikan pengalaman
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
