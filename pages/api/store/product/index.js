import data from "../../../../product.json";

export default function handler(req, res) {
    if (req.method !== "GET" && req.method !== "POST")
        return res.status(405).json({
            code: 405,
            status: "error",
            result: "Method Not Allowed",
        });

    if (req.method === "GET") {
        const page = req.query.page || 1
        let search = req.query.search
        let filter = req.query.filter
        let valueFilter = req.query.value
        let total_page = Math.ceil(data.products.length / 8)
        let dataProduct
        let next_page

        if (page == 1 && filter === undefined && search === undefined || page == undefined && filter === undefined && search === undefined) {
            dataProduct = data.products.slice(0, 8)
            next_page = 2
        } else if (page > 1 && page <= total_page && filter === undefined && search === undefined) {
            dataProduct = data.products.slice(`${(page * 8) - 8}`, `${page * 8}`)
            next_page = parseInt(page) + 1
        } else if (page == 1 && filter !== undefined && search === undefined || page == undefined && filter !== undefined && search === undefined) {
            if (filter === "price" && valueFilter === "asc") {
                const produkFilter = data.products.sort((a, b) => { return a.price - b.price });
                total_page = Math.ceil(produkFilter.length / 8)
                dataProduct = produkFilter.slice(0, 8)
                next_page = 2
            } else if (filter === "price" && valueFilter === "desc") {
                const produkFilter = data.products.sort((a, b) => { return b.price - a.price });
                total_page = Math.ceil(produkFilter.length / 8)
                dataProduct = produkFilter.slice(0, 8)
                next_page = 2
            } else {
                const produkFilter = data.products.filter(product => { return product[filter] == valueFilter })
                total_page = Math.ceil(produkFilter.length / 8)
                dataProduct = produkFilter.slice(0, 8)
                next_page = 2
            }
        } else if (page > 1 && page <= total_page && filter !== undefined) {
            if (filter === "price" && valueFilter === "asc") {
                const produkFilter = data.products.sort((a, b) => { return a.price - b.price });
                total_page = Math.ceil(produkFilter.length / 8)
                dataProduct = produkFilter.slice(`${(page * 8) - 8}`, `${page * 8}`)
                next_page = 2
            } else if (filter === "price" && valueFilter === "desc") {
                const produkFilter = data.products.sort((a, b) => { return b.price - a.price });
                total_page = Math.ceil(produkFilter.length / 8)
                dataProduct = produkFilter.slice(`${(page * 8) - 8}`, `${page * 8}`)
                next_page = 2
            } else {
                const produkFilter = data.products.filter(product => { return product[filter] == valueFilter })
                total_page = Math.ceil(produkFilter.length / 8)
                dataProduct = produkFilter.slice(`${(page * 8) - 8}`, `${page * 8}`)
                next_page = 2
            }
        } else if (page == 1 && filter === undefined && search !== undefined || page == undefined && filter === undefined && search !== undefined) {
            const datas = data.products.filter(product => { return product.title.includes(search) })
            total_page = Math.ceil(datas.length / 8)
            dataProduct = datas.slice(0, 8)
            next_page = 2
        } else if (page > 1 && page <= total_page && search !== undefined && filter === undefined) {
            const datas = data.products.filter(product => { return product.title.includes(search) })
            total_page = Math.ceil(datas.length / 8)
            dataProduct = datas.slice(`${(page * 8) - 8}`, `${page * 8}`)
            next_page = page + 1
        }

        if (page > total_page) {
            res.status(200).json({
                code: 200,
                status: "OK",
                message: "Page tidak ditemukan",
                next_page: "-"
            });
        } else {
            res.status(200).json({
                code: 200,
                status: "OK",
                result: dataProduct,
                page: page == undefined ? 1 : parseInt(page),
                next_page: next_page > total_page ? "-" : next_page,
                total_Page: total_page
            });
        }
    }
}
