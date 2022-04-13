import axios from "axios";

export default async function handler(req, res) {
  const { slug } = req.query;

  let city = slug[0];
  let year = slug[1];
  let month = slug[2];

  if (req.method !== "GET")
    return res.status(405).json({
      code: 405,
      status: "error",
      result: "Method Not Allowed",
    });

  if (!city)
    return res.status(404).json({
      code: 404,
      status: "error",
      result: "city is required",
    });

  if (!year)
    return res.status(404).json({
      code: 404,
      status: "error",
      result: "year is required",
    });

  if (!month)
    return res.status(404).json({
      code: 404,
      status: "error",
      result: "month is required",
    });

  try {
    const { data } = await axios(
      `https://api.myquran.com/v1/sholat/jadwal/${city}/${year}/${month}`
    );

    const { jadwal } = data.data;

    res.status(200).json({
      code: 200,
      status: "OK",
      result: jadwal,
    });
  } catch (error) {
    return res.status(404).json({
      code: 404,
      status: "error",
      result: "Data not found",
    });
  }
}
