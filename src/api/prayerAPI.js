import { getInstance, routes } from "./axiosInstance";

const getCity = async () => {
  try {
    const response = await getInstance().get(routes.getCity());
    const {
      data: { result },
    } = response;
    return result;
  } catch (err) {
    return err;
  }
};

const getPrayerTime = async (city = "", year = "", month = "") => {
  try {
    const response = await getInstance().get(
      routes.getPrayerTime(city, year, month)
    );
    const {
      data: { result },
    } = response;
    return result;
  } catch (err) {
    return err;
  }
};

export { getCity, getPrayerTime };
