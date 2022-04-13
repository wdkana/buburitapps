import { CategoryTitle, Category, CategoryImage } from "./StoreStyled"
import Link from "next/link"

const CategoryComponent = ({ categories }) => {
  return (
    <Category>
      {categories.map((category, index) => {
        return (
          <Link href={`category/${category.name}`} key={index}>
            <div style={{ cursor: "pointer" }}>
              <CategoryImage src={category.image} />
              <CategoryTitle>{category.name}</CategoryTitle>
            </div>
          </Link>
        )
      })}
    </Category>
  )
}

export default CategoryComponent
