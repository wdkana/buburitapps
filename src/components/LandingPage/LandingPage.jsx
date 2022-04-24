import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { getProduct } from "../../api/storeAPI";
import { getRandomInt } from "../../helpers/number";

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
    const [resultFirstPage, resultSecondPage, resultThirdPage] =
      await Promise.all([
        getProduct({ page: 1 }),
        getProduct({ page: 2 }),
        getProduct({ page: 3 }),
      ]);

    const { result: firstPageProduct } = resultFirstPage || [];
    const { result: secondPageProduct } = resultSecondPage || [];
    const { result: thirdPageProduct } = resultThirdPage || [];

    const productData =
      [...firstPageProduct, ...secondPageProduct, ...thirdPageProduct] || [];

    const getFirstItem = getRandomInt(0, productData.length - 8);
    const sliceProduct = productData.slice(getFirstItem, getFirstItem + 8);

    setListProduct(sliceProduct);
  };

  useEffect(() => {
    getListProduct();
  }, []);

  return (
    <>
      <Container src="/assets/hero-new.webp" color="#fff" zIndex="1">
        <Wrapper>
          <Hero>
            <HeroRow>
              <HeroImage>
                <Image
                  src="/assets/hero-1-new.png"
                  alt="hero"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  priority
                />
              </HeroImage>
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
                    <Link href={`/store/${product.id}`} passHref>
                      <ProductBox>
                        <ProductImageWrapper>
                          <Image
                            src={product.image}
                            alt="product"
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="contain"
                          />
                        </ProductImageWrapper>
                        <ProductDetail>
                          <ProductDetailCategory>
                            {product.category}
                          </ProductDetailCategory>
                          <ProductDetailTitle>
                            {product.title}
                          </ProductDetailTitle>
                          <ProductDetailPrice>
                            {product.price}$
                          </ProductDetailPrice>
                          <ProductDetailDesc>
                            {product.description}
                          </ProductDetailDesc>
                        </ProductDetail>
                      </ProductBox>
                    </Link>
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
