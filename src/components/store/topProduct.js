import { Swiper, SwiperSlide } from "swiper/react"
import ReadMoreReact from "read-more-react"
import {
  Box,
  MenuTitle,
  ProductBox,
  ProductDetail,
  ProductName,
  ProductImage,
  ProductDescription,
  ProductPrice,
} from "./StoreStyled"
import "swiper/css"

const TopProduct = ({ products }) => {
  return (
    <div>
      <MenuTitle>Top Product</MenuTitle>
      <Box>
        <Swiper slidesPerView={"2.5"} spaceBetween={8}>
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
    </div>
  )
}

export default TopProduct
