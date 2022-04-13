import Store from "../../src/components/store"
import { getProduct } from "../../src/api/storeAPI"

export async function getStaticProps() {
  const products = await getProduct()
  return {
    props: { products },
  }
}

const StorePage = ({ products }) => {
  return <Store products={products} />
}

export default StorePage
