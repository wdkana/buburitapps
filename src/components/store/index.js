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

import ReadMoreReact from "read-more-react"

const InfoComponent = ({ products }) => {
  return (
    <Container>
      <Title>CUY STORE</Title>
      <h3>Flash Sale Product</h3>
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
      <h3>Top Product</h3>
      <Box>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductBox>
                  <ProductImage src={product.image} />
                  <ProductDetail>
                    <ProductName>
                      <ReadMoreReact
                        text={product.title}
                        min={5}
                        ideal={8}
                        max={10}
                        readMoreText="show more"
                      />
                    </ProductName>
                    <ProductDescription>
                      <ReadMoreReact
                        text={product.description}
                        min={20}
                        ideal={25}
                        max={35}
                        readMoreText="show more"
                      />
                    </ProductDescription>
                    <ProductPrice>{product.price}</ProductPrice>
                  </ProductDetail>
                </ProductBox>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Box>
      <Box>
        {/* <QuoteBox>
          <video
            controls
            width="100%"
            height="100%"
            // autoPlay="autoplay"
            src="./assets/intro.mp4"
            type="video/mp4"
          ></video>
        </QuoteBox> */}
      </Box>
    </Container>
  )
}

export default InfoComponent
