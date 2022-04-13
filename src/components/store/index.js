import { Container, Title } from "./storeStyled"
import "swiper/css"
import FlashSaleProduct from "./flashSaleProduct"
import TopProduct from "./topProduct"

const StoreComponent = ({ products }) => {
  return (
    <Container>
      <Title>CUY STORE</Title>
      <FlashSaleProduct />
      <TopProduct products={products} />
    </Container>
  )
}

export default StoreComponent
