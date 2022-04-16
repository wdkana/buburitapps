/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getCategories, getProduct } from "../../api/storeAPI";

import {
  Container,
  ProductBox,
  ProductButton,
  ProductCol,
  ProductDetail,
  ProductDetailCategory,
  ProductDetailDesc,
  ProductDetailPrice,
  ProductDetailTitle,
  ProductImage,
  ProductImageWrapper,
  ProductList,
  ProductListWrapper,
  ProductShowed,
  ProductTitle,
  ProductWrapper,
  StoreCategory,
  StoreCategoryItem,
  StoreCategoryWrapper,
  StoreHeaderContainer,
  StoreHeaderTitle,
} from "./styled";

const StoreComponent = () => {
  const [productsList, setProductsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [isAllDataFetched, setAllDataFetched] = useState(false);

  const getProductData = async () => {
    try {
      const products = await getProduct({ page });

      if (products === undefined) {
        setAllDataFetched(true);
      } else {
        setProductsList([...productsList, ...products]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getCategoriesData = async () => {
    try {
      const categories = await getCategories();

      const allData = { category: "all" };
      setCategories([allData, ...categories]);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddPage = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    getProductData();
  }, [page]);

  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <>
      <StoreHeaderContainer>
        <StoreHeaderTitle>Explore Produk</StoreHeaderTitle>
      </StoreHeaderContainer>
      <StoreCategoryWrapper>
        <StoreCategory>
          {categories?.map((val, i) => {
            return (
              <StoreCategoryItem key={i}>{val.category}</StoreCategoryItem>
            );
          })}
        </StoreCategory>
      </StoreCategoryWrapper>
      <Container color="#ecf1f9" zIndex="0">
        <ProductWrapper>
          <ProductTitle>Semua Produk</ProductTitle>
          <ProductListWrapper>
            <ProductList>
              {productsList?.map((product, index) => {
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
            {isAllDataFetched ? (
              <ProductShowed>Semua produk telah ditampilkan</ProductShowed>
            ) : (
              <ProductButton onClick={handleAddPage}>
                Lihat lainnya
              </ProductButton>
            )}
          </ProductListWrapper>
        </ProductWrapper>
      </Container>
    </>
  );
};

export default StoreComponent;
