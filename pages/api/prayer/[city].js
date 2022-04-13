import axios from "axios";
export default async function handler(req, res) {
  const { city } = req.query;

  let json = { code: 200, status: "OK", result: null };

  if (!city)
    return res.status(404).json({
      result: "city is required",
      code: 404,
      status: "error",
    });

  if (req.method !== "GET")
    return res.status(405).json({
      result: "city is required",
      code: 405,
      status: "error",
    });

  const date = new Date().toISOString().substring(0, 10);

  try {
    const { data } = await axios(
      `https://api.pray.zone/v2/times/day.json?city=${city}&date=${date}`
    );

    const { times } = data.results.datetime[0];

    res.status(200).json({
      ...json,
      result: times,
    });
  } catch (error) {
    return res.status(404).json({
      result: "data not found",
      code: 404,
      status: "error",
    });
  }
}
