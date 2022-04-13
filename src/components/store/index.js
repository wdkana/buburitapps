import { Container } from "./StoreStyled"
import FlashSaleProduct from "./FlashSaleProduct"
import TopProduct from "./TopProduct"
import CategoryProduct from "./Category"

const StoreComponent = ({ products, categories }) => {
  return (
    <Container>
      <CategoryProduct categories={categories} />
      <TopProduct products={products} />
      <FlashSaleProduct />
    </Container>
  )
}

export default StoreComponent
