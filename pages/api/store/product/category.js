import data from "../../../../product.json";

export default function handler(req, res) {
    if (req.method !== "GET")
        return res.status(405).json({
        code: 405,
        status: "error",
        result: "Method Not Allowed",
        });

        let listCategory = []
        if (req.method === "GET") {
            data.products.map( data => {
                const category = { category: data.category}
                listCategory.push(category)
            })
        }

        const Category = [];
        const dataCategory = listCategory.filter( item => {
            if (item.category in Category) {
                return false;
            } else {
                Category[item.category] = true;
                return true;
            }
        })
        res.status(200).json({
            code: 200,
            status: "OK",
            result: dataCategory.length === 0 ? "Data tidak ditemukan" : dataCategory
        })
}
