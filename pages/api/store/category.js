export default function handler(req, res) {
  let categorys = [
    {
      id: 1,
      name: "burger",
      image: "./assets/category/burger.png",
    },
    {
      id: 2,
      name: "merch",
      image: "./assets/category/merch.png",
    },
    {
      id: 3,
      name: "fashion",
      image: "./assets/category/wardrobe.png",
    },
    {
      id: 4,
      name: "voucher",
      image: "./assets/category/voucher.png",
    },
    {
      id: 5,
      name: "ticket",
      image: "./assets/category/ticket.png",
    },
  ]

  res.status(200).json({
    code: 200,
    status: "OK",
    result: categorys,
  })
}
