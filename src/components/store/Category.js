import { CategoryTitle, Category, CategoryImage } from "./StoreStyled"

const goToCategory = (link) => {
  return (location.href = `/${link}`)
}

const CategoryComponent = ({ categories }) => {
  return (
    <Category>
      {categories.map((category, index) => {
        return (
          <div
            onClick={() => goToCategory(`category/${category.name}`)}
            key={index}
            className="categorybox"
          >
            <CategoryImage src={category.image} />
            <CategoryTitle>{category.name}</CategoryTitle>
          </div>
        )
      })}
    </Category>
  )
}

export default CategoryComponent
