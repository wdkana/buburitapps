/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { getProductById } from "../../api/storeAPI";
import { Context } from "../../globalState/store";
import { ADD_ITEM } from "../../globalState/types";
import { cartModel } from "../../models/cart";

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
import Modal from "../Modal/Modal";

const Detail = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [invalidData, setInvalidData] = useState(false);
  const [isShowModal, setShowModal] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [state, dispatch] = useContext(Context);

  const toggleShowModal = () => {
    setShowModal((state) => !state);
  };

  const handleAddCart = () => {
    const selectedProduct = { ...product, quantity };
    const duplicateStateCart = { ...state.cart };

    const productOnCart = duplicateStateCart.item.find(
      (val) => val.id == selectedProduct.id
    );

    let cart = cartModel;
    const totalItemOnCart = duplicateStateCart.totalItem;

    if (productOnCart) {
      const increateQuantitySelectedProduct = {
        ...productOnCart,
        quantity: productOnCart.quantity + quantity,
      };

      const findIndex = duplicateStateCart.item.findIndex(
        (val) => val.id === increateQuantitySelectedProduct.id
      );

      duplicateStateCart.item[findIndex] = increateQuantitySelectedProduct;

      cart = {
        ...duplicateStateCart,
        item: [...duplicateStateCart.item],
      };
    } else {
      cart = {
        item: [...duplicateStateCart.item, { ...selectedProduct }],
        totalItem: +totalItemOnCart + 1,
      };
    }

    dispatch({
      type: ADD_ITEM,
      payload: cart,
    });

    setQuantity(0);

    toggleShowModal();

    setTimeout(() => {
      toggleShowModal();
    }, 2000);
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
          <Modal text="Produk berhasil ditambahkan" isOpen={isShowModal} />
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
