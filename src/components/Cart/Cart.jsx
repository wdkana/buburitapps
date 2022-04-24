import { useContext } from "react";
import Image from "next/image";
import { FaPlusCircle, FaMinusCircle, FaTrash } from "react-icons/fa";

import { Context } from "../../globalState/store";
import { HANDLE_ITEM, HANDLE_MODAL } from "../../globalState/types";
import { modalModel } from "../../models/modal";
import { cartModel } from "../../models/cart";

import {
  ButtonAction,
  ButtonBuy,
  ButtonQuantity,
  CartHeaderContainer,
  CartHeaderTitle,
  Container,
  ProductButtonWrapper,
  ProductData,
  ProductImage,
  ProductItem,
  ProductList,
  ProductNotFound,
  ProductNotFoundText,
  ProductPrice,
  ProductPriceWrapper,
  ProductQuanity,
  ProductSection,
  ProductSummary,
  ProductSummaryCard,
  ProductSummaryCardContent,
  ProductSummaryHead,
  ProductSummarySpacer,
  ProductSummarySubHead,
  ProductSummaryText,
  ProductSummaryWrapper,
  ProductTitle,
  ProductTotalPrice,
  ProductWrapper,
  Wrapper,
} from "./styled";

const CartComponent = ({ isScrollBottom }) => {
  const [state, dispatch] = useContext(Context);
  const { cart } = state || {};
  const { totalItem, item = [] } = cart || {};

  const getGrandTotalPrice = () => {
    return +item.reduce((n, { totalPrice }) => n + +totalPrice, 0).toFixed(2);
  };

  const handleRemoveProduct = (id) => {
    const duplicateStateCart = { ...cart };
    const { item: listItem } = duplicateStateCart || {};

    const deleteSelectedCart = listItem.filter((item) => item.id !== id);

    const updateCart = {
      ...duplicateStateCart,
      item: deleteSelectedCart,
      totalItem: duplicateStateCart.totalItem - 1,
    };

    dispatch({
      type: HANDLE_ITEM,
      payload: updateCart,
    });

    dispatch({
      type: HANDLE_MODAL,
      payload: modalModel(true, "Produk berhasil dihapus"),
    });
  };

  const handleClickQuantity = (increment, id) => {
    const duplicateStateCart = { ...state.cart };

    const productOnCart = duplicateStateCart.item.find((val) => val.id == id);
    let totalQuantity = productOnCart.quantity;
    let totalPrice = productOnCart.totalPrice;

    let cart = cartModel();

    if (increment) {
      totalQuantity = totalQuantity + 1;
      totalPrice = +productOnCart.price * +totalQuantity;
    } else {
      totalQuantity =
        totalQuantity - 1 === 0 ? totalQuantity : totalQuantity - 1;
      totalPrice = +productOnCart.price * +totalQuantity;
    }

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

    dispatch({
      type: HANDLE_ITEM,
      payload: cart,
    });
  };

  return (
    <div>
      <CartHeaderContainer>
        <CartHeaderTitle>Keranjang</CartHeaderTitle>
      </CartHeaderContainer>
      <Container>
        <Wrapper>
          {item.length === 0 ? (
            <ProductNotFound>
              <ProductNotFoundText>
                Tidak ada item dalam keranjang
              </ProductNotFoundText>
            </ProductNotFound>
          ) : (
            <>
              <ProductSection>
                <ProductWrapper>
                  {item.map((product, index) => {
                    return (
                      <ProductList key={index}>
                        <ProductItem>
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
                            <ProductPriceWrapper>
                              <ProductPrice>${product.price}</ProductPrice>
                              <ProductTotalPrice>
                                ${product.totalPrice}
                              </ProductTotalPrice>
                            </ProductPriceWrapper>
                          </ProductData>
                        </ProductItem>
                        <ProductButtonWrapper>
                          <ButtonAction
                            mr="6"
                            onClick={() => handleRemoveProduct(product.id)}>
                            <FaTrash size={16} color="#a2a0a0" />
                          </ButtonAction>
                          <ButtonQuantity>
                            <ButtonAction
                              onClick={() =>
                                handleClickQuantity(false, product.id)
                              }>
                              <FaMinusCircle size={18} color="#a2a0a0" />
                            </ButtonAction>
                            <ProductQuanity>{product.quantity}</ProductQuanity>
                            <ButtonAction
                              onClick={() =>
                                handleClickQuantity(true, product.id)
                              }>
                              <FaPlusCircle size={18} color="#a2a0a0" />
                            </ButtonAction>
                          </ButtonQuantity>
                        </ProductButtonWrapper>
                      </ProductList>
                    );
                  })}
                </ProductWrapper>
              </ProductSection>
              <ProductSummary>
                <ProductSummaryWrapper isScrollBottom={isScrollBottom}>
                  <ProductSummaryCard>
                    <ProductSummaryCardContent>
                      <ProductSummaryHead>Ringkasan belanja</ProductSummaryHead>
                      <ProductSummaryText mt="20px">
                        <ProductSummarySubHead>
                          Total barang
                        </ProductSummarySubHead>
                        <ProductSummarySubHead>
                          {totalItem}
                        </ProductSummarySubHead>
                      </ProductSummaryText>
                      <ProductSummaryText mt="8px">
                        <ProductSummarySubHead>
                          Total diskon
                        </ProductSummarySubHead>
                        <ProductSummarySubHead>0</ProductSummarySubHead>
                      </ProductSummaryText>
                      <ProductSummarySpacer />
                      <ProductSummaryText mt="26px">
                        <ProductSummaryHead>Total harga</ProductSummaryHead>
                        <ProductSummaryHead>
                          ${getGrandTotalPrice()}
                        </ProductSummaryHead>
                      </ProductSummaryText>
                      <ButtonBuy>Beli ({totalItem})</ButtonBuy>
                    </ProductSummaryCardContent>
                  </ProductSummaryCard>
                </ProductSummaryWrapper>
              </ProductSummary>
            </>
          )}
        </Wrapper>
      </Container>
      ;
    </div>
  );
};

export default CartComponent;
