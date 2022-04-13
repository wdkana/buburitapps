export default function handler(req, res) {
  let categorys = [
    {
      id: 1,
      name: "burger",
      image: "",
    },
    {
      id: 2,
      name: "burger",
      image: "",
    },
    {
      id: 3,
      name: "burger",
      image: "",
    },
    {
      id: 4,
      name: "burger",
      image: "",
    },
    {
      id: 5,
      name: "burger",
      image: "",
    },
  ];

  res.status(200).json({
    code: 200,
    status: "OK",
    result: categorys,
  });
}
