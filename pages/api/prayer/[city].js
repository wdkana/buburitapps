import axios from "axios";

export default async function handler(req, res) {
  const { city } = req.query;

  if (!city)
    return res.status(404).json({
      code: 404,
      status: "error",
      result: "Id city is required",
    });

  if (req.method !== "GET")
    return res.status(405).json({
      code: 405,
      status: "error",
      result: "Method Not Allowed",
    });

  const date = new Date().toISOString().substring(0, 10).split("-");
  const getYear = date[0];
  const getMonth = date[1];

  try {
    const { data } = await axios(
      `https://api.myquran.com/v1/sholat/jadwal/${city}/${getYear}/${getMonth}`
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
