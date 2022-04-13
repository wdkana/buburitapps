import {
  Container,
  Box,
  Title,
  ProductBox,
  ProductDetail,
  ProductName,
  ProductImage,
  ProductDescription,
  ProductPrice,
  QuoteBox,
} from "./store"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

const InfoComponent = () => {
  return (
    <Container>
      <Title>CUY STORE</Title>
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
          {" "}
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
      <Box>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <ProductBox>
              <ProductImage src="https://images.tokopedia.net/img/cache/700/product-1/2020/4/12/8227926/8227926_5a9e333f-b26d-4ee4-8dfc-128d2c419d0c_490_490.jpg" />
              <ProductDetail>
                <ProductName>Test deskripsi</ProductName>
                <ProductDescription>Deskripsi test</ProductDescription>
                <ProductPrice>Rp. XXX.XXX</ProductPrice>
              </ProductDetail>
            </ProductBox>
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox>
              <ProductImage src="https://images.tokopedia.net/img/cache/700/product-1/2020/4/12/8227926/8227926_5a9e333f-b26d-4ee4-8dfc-128d2c419d0c_490_490.jpg" />
              <ProductDetail>
                <ProductName>Test deskripsi</ProductName>
                <ProductDescription>Deskripsi test</ProductDescription>
                <ProductPrice>Rp. XXX.XXX</ProductPrice>
              </ProductDetail>
            </ProductBox>
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox>
              {" "}
              <ProductImage src="https://images.tokopedia.net/img/cache/700/product-1/2020/4/12/8227926/8227926_5a9e333f-b26d-4ee4-8dfc-128d2c419d0c_490_490.jpg" />
              <ProductDetail>
                <ProductName>Test deskripsi</ProductName>
                <ProductDescription>Deskripsi test</ProductDescription>
                <ProductPrice>Rp. XXX.XXX</ProductPrice>
              </ProductDetail>
            </ProductBox>
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox>
              {" "}
              <ProductImage src="https://images.tokopedia.net/img/cache/700/product-1/2020/4/12/8227926/8227926_5a9e333f-b26d-4ee4-8dfc-128d2c419d0c_490_490.jpg" />
              <ProductDetail>
                <ProductName>Test deskripsi</ProductName>
                <ProductDescription>Deskripsi test</ProductDescription>
                <ProductPrice>Rp. XXX.XXX</ProductPrice>
              </ProductDetail>
            </ProductBox>
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox>
              {" "}
              <ProductImage src="https://images.tokopedia.net/img/cache/700/product-1/2020/4/12/8227926/8227926_5a9e333f-b26d-4ee4-8dfc-128d2c419d0c_490_490.jpg" />
              <ProductDetail>
                <ProductName>Test deskripsi</ProductName>
                <ProductDescription>Deskripsi test</ProductDescription>
                <ProductPrice>Rp. XXX.XXX</ProductPrice>
              </ProductDetail>
            </ProductBox>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box>
        <QuoteBox>
          <video
            controls
            width="100%"
            height="100%"
            autoPlay="autoplay"
            src="./assets/intro.mp4"
            type="video/mp4"
          ></video>
        </QuoteBox>
      </Box>
    </Container>
  )
}

export default InfoComponent
