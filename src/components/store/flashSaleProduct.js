import {
  Box,
  MenuTitle,
  ProductBox,
  ProductImage,
  ProductName,
  ProductDescription,
  ProductDetail,
  ProductPrice,
} from "./storeStyled"
const FlashSaleProduct = () => {
  return (
    <div>
      <MenuTitle>Flash Sale Product</MenuTitle>
      <Box>
        <ProductBox>
          <ProductImage src="https://images.tokopedia.net/img/cache/700/product-1/2020/4/12/8227926/8227926_5a9e333f-b26d-4ee4-8dfc-128d2c419d0c_490_490.jpg" />
          <ProductDetail>
            <ProductName>Test deskripsi</ProductName>
            <ProductDescription>
              Deskripsi test Deskripsi test Deskripsi test Deskripsi test
            </ProductDescription>
            <ProductPrice>Rp. XXX.XXX</ProductPrice>
          </ProductDetail>
        </ProductBox>
        <ProductBox>
          <ProductImage src="https://images.tokopedia.net/img/cache/700/product-1/2020/4/12/8227926/8227926_5a9e333f-b26d-4ee4-8dfc-128d2c419d0c_490_490.jpg" />
          <ProductDetail>
            <ProductName>Test deskripsi</ProductName>
            <ProductDescription>
              Deskripsi test Deskripsi test Deskripsi test Deskripsi test
            </ProductDescription>
            <ProductPrice>Rp. XXX.XXX</ProductPrice>
          </ProductDetail>
        </ProductBox>
      </Box>
    </div>
  )
}

export default FlashSaleProduct
