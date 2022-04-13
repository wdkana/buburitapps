import { CategoryImage, Container, Title } from "./StoreStyled"
import { CategoryTitle, Category } from "./StoreStyled"

const CategoryComponent = ({ products }) => {
  return (
    <Category>
      <div>
        <CategoryImage src="./assets/category/wardrobe.png" />
        <CategoryTitle>Fashion</CategoryTitle>
      </div>
      <div>
        <CategoryImage src="./assets/category/burger.png" />
        <CategoryTitle>Food</CategoryTitle>
      </div>
      <div>
        <CategoryImage src="./assets/category/merch.png" />
        <CategoryTitle>Merch</CategoryTitle>
      </div>
      <div>
        <CategoryImage src="./assets/category/voucher.png" />
        <CategoryTitle>voucher</CategoryTitle>
      </div>
      <div>
        <CategoryImage src="./assets/category/ticket.png" />
        <CategoryTitle>ticket</CategoryTitle>
      </div>
    </Category>
  )
}

export default CategoryComponent
