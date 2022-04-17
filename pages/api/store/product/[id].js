import data from "../../../../product.json";

export default function handler(req, res) {
    if (req.method !== "GET")
        return res.status(405).json({
        code: 405,
        status: "error",
        result: "Method Not Allowed",
        });

    if (req.method === "GET") {
        const dataProduct = data.products.filter( product => { return product.id == req.query.id})
        res.status(200).json({
            code: 200,
            status: "OK",
            result: dataProduct.length === 0 ? "Data tidak ditemukan" : dataProduct
        })
    }
}
