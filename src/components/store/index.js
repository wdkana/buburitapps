import { Container, Title } from "./StoreStyled"
import "swiper/css"
import FlashSaleProduct from "./FlashSaleProduct"
import TopProduct from "./TopProduct"
import CategoryProduct from "./Category"

const StoreComponent = ({ products }) => {
  return (
    <Container>
      <Title>CUY STORE</Title>
      <CategoryProduct category={products} />
      <FlashSaleProduct />
      <TopProduct products={products} />
    </Container>
  )
}

export default StoreComponent
