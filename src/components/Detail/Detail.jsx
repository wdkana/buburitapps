/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getProductById } from "../../api/storeAPI";

import {
  Container,
  ProductCategory,
  ProductName,
  Description,
  Price,
  Wrapper,
  ImageWrapper,
  Image,
  WrapperRow,
  ButtonCart,
  Quantity,
  ButtonWrapper,
  ButtonQuantity,
  ButtonCalc,
  ButtonBack,
  ProductNotFound,
} from "./styled";

const Detail = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [invalidData, setInvalidData] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const handleClickQuantity = (increment) => {
    if (increment) {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => (prev === 0 ? prev : prev - 1));
    }
  };

  const getProductData = async () => {
    const results = await getProductById(id);
    const { result } = results;

    if (result === "Data tidak ditemukan") return setInvalidData(true);
    return setProduct(result[0]);
  };

  useEffect(() => {
    if (id) getProductData();
  }, [id]);

  return (
    <>
      <Container>
        <Link href="/store" passHref>
          <ButtonBack>Kembali</ButtonBack>
        </Link>
        <Wrapper>
          {invalidData ? (
            <ProductNotFound>
              Produk tidak ditemukan, silahkan kembali
            </ProductNotFound>
          ) : (
            <>
              <WrapperRow>
                <ImageWrapper>
                  <Image src={product?.image} alt="product" />
                </ImageWrapper>
              </WrapperRow>
              <WrapperRow>
                <ProductCategory>{product?.category}</ProductCategory>
                <ProductName>{product?.title}</ProductName>
                <Description>{product?.description}</Description>
                <Price>${product?.price}</Price>
                <ButtonWrapper>
                  <ButtonQuantity>
                    <ButtonCalc onClick={() => handleClickQuantity(false)}>
                      -
                    </ButtonCalc>
                    <Quantity>{quantity}</Quantity>
                    <ButtonCalc onClick={() => handleClickQuantity(true)}>
                      +
                    </ButtonCalc>
                  </ButtonQuantity>
                  <ButtonCart>Tambah ke keranjang</ButtonCart>
                </ButtonWrapper>
              </WrapperRow>
            </>
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default Detail;
