import Store from "../../src/components/store"
import axios from "axios"

// export async function getStaticProps() {
//   const req = axios.get("/api/product")
//   const products = await req.data
//   return {
//     props: { products },
//   }
// }

const StorePage = ({ products }) => {
  return <Store />
}

export default StorePage
