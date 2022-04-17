/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { getCategories, getProduct } from "../../api/storeAPI";

import {
  Container,
  ProductBox,
  ProductButton,
  ProductCol,
  ProductDetail,
  ProductDetailButton,
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
  const [filterOption, setFilterOption] = useState({
    page: 1,
    filter: "",
    value: "",
    addData: false,
  });
  const [isAllDataFetched, setAllDataFetched] = useState(false);

  const router = useRouter();
  const { isReady, pathname, query } = router;

  const setQueryFilter = (query) => {
    router.push({ pathname, query }, undefined, {
      shallow: true,
    });
  };

  const getProductData = async (param) => {
    try {
      const queryParam = {
        ...(param?.page && { page: param.page }),
        ...(param?.filter &&
          param?.value !== "all" && { filter: param.filter }),
        ...(param?.value && param?.value !== "all" && { value: param.value }),
        ...(param?.search && { search: param.search }),
      };

      const results = await getProduct(queryParam);
      const { result: products, next_page: nextPage } = results;

      const isAddData =
        param?.addData === "true"
          ? true
          : param?.addData === "false"
          ? false
          : param?.addData;

      const newData = isAddData ? [...productsList, ...products] : products;
      setProductsList(newData);
      setAllDataFetched(nextPage === "-" && true);
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
    const newQuery = {
      ...filterOption,
      page: filterOption.page ? filterOption.page + 1 : 2,
      addData: true,
    };

    setFilterOption(newQuery);
    getProductData(newQuery);
  };

  const handleChangeCategories = (e) => {
    const {
      target: { innerHTML },
    } = e;

    const newQuery = {
      ...filterOption,
      filter: "category",
      value: innerHTML,
      addData: false,
    };

    delete newQuery.page;

    setFilterOption(newQuery);
    setQueryFilter(newQuery);
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  useEffect(() => {
    if (isReady && Object.keys(query).length === 0) {
      getProductData();
    }
    if (isReady && Object.keys(query).length > 0) {
      getProductData(query);
    }
  }, [isReady, query]);

  return (
    <>
      <StoreHeaderContainer>
        <StoreHeaderTitle>Explore Produk</StoreHeaderTitle>
      </StoreHeaderContainer>
      <StoreCategoryWrapper>
        <StoreCategory>
          {categories?.map((val, i) => {
            return (
              <StoreCategoryItem
                key={i}
                onClick={handleChangeCategories}
                value={val.category}>
                {val.category}
              </StoreCategoryItem>
            );
          })}
        </StoreCategory>
      </StoreCategoryWrapper>
      <Container>
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
                      <Link href={`/store/${product.id}`} passHref>
                        <ProductDetailButton>Detail</ProductDetailButton>
                      </Link>
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
