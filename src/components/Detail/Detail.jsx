/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { getProductById } from "../../api/storeAPI";
import { Context } from "../../globalState/store";
import { cartModel } from "../../models/cart";
import { modalModel } from "../../models/modal";
import { handleActionItem, handleActionModal } from "../../globalState/action";

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
  ProductHeader,
} from "./styled";

const Detail = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [invalidData, setInvalidData] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [state, dispatch] = useContext(Context);

  const handleAddCart = () => {
    const selectedProduct = { ...product, quantity };
    const duplicateStateCart = { ...state.cart };

    const productOnCart = duplicateStateCart.item.find(
      (val) => val.id == selectedProduct.id
    );

    let cart = cartModel();

    if (productOnCart) {
      const totalQuantity = productOnCart.quantity + quantity;
      const totalPrice = +productOnCart.price * +totalQuantity;

      const updateSelectedProduct = {
        ...productOnCart,
        quantity: totalQuantity,
        totalPrice,
      };

      const findIndex = duplicateStateCart.item.findIndex(
        (val) => val.id === updateSelectedProduct.id
      );

      duplicateStateCart.item[findIndex] = updateSelectedProduct;

      cart = {
        ...duplicateStateCart,
        item: [...duplicateStateCart.item],
      };
    } else {
      const totalItemOnCart = duplicateStateCart.totalItem;
      const totalPrice = +selectedProduct.price * +quantity;

      const updateTotalPriceSelectedProduct = {
        ...selectedProduct,
        totalPrice,
      };

      cart = {
        item: [
          ...duplicateStateCart.item,
          { ...updateTotalPriceSelectedProduct },
        ],
        totalItem: +totalItemOnCart + 1,
      };
    }

    setQuantity(0);

    handleActionItem(cart)(dispatch);

    handleActionModal(
      modalModel(true, "Produk berhasil ditambahkan ke keranjang")
    )(dispatch);
  };

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
        <Wrapper>
          {invalidData ? (
            <>
              <ProductNotFound>
                Produk tidak ditemukan, silahkan kembali
              </ProductNotFound>
              <Link href="/store" passHref>
                <ButtonBack>Kembali</ButtonBack>
              </Link>
            </>
          ) : (
            <>
              <WrapperRow>
                <ImageWrapper>
                  <Image src={product?.image} alt="product" />
                </ImageWrapper>
              </WrapperRow>
              <WrapperRow>
                <ProductHeader>
                  <ProductCategory>{product?.category}</ProductCategory>
                  <Link href="/store" passHref>
                    <ButtonBack>Kembali</ButtonBack>
                  </Link>
                </ProductHeader>

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
                  <ButtonCart disabled={quantity === 0} onClick={handleAddCart}>
                    Tambah ke keranjang
                  </ButtonCart>
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
