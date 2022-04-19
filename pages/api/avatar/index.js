export default function handler(req, res) {
    if (req.method !== "GET")
        return res.status(405).json({
        code: 405,
        status: "error",
        result: "Method Not Allowed",
        });

    if (req.method === "GET") {
        const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        const random = char.charAt(Math.floor(Math.random() * 
        char.length))
        const avatar = `https://robohash.org/${random}.png`
        res.status(200).json({
            code: 200,
            status: "OK",
            result: avatar
        })
    }
}
