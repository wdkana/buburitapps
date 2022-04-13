import Store from "../../src/components/Store"
import { getProduct, getCategories } from "../../src/api/storeAPI"
import { useEffect, useState } from "react"

const StorePage = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    productData()
  }, [])

  const productData = async () => {
    try {
      const products = await getProduct()
      const categories = await getCategories()
      setProducts(products)
      setCategories(categories)
    } catch (e) {
      console.log(e)
    }
  }
  return <Store products={products} categories={categories} />
}

export default StorePage
