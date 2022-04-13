import Store from "../../src/components/Store"
import { getProduct, getCategories } from "../../src/api/storeAPI"

export async function getStaticProps() {
  const products = await getProduct()
  const categories = await getCategories()
  return {
    props: { products, categories },
  }
}

const StorePage = ({ products, categories }) => {
  return <Store products={products} categories={categories} />
}

export default StorePage
