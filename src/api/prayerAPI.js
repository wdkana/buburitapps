import { getInstance, routes } from "./axiosInstance";

const getPrayerTime = async (city = "") => {
  try {
    const response = await getInstance().get(routes.prayerTime(city));
    const {
      data: { result },
    } = response;
    return result;
  } catch (err) {
    return err;
  }
};

export { getPrayerTime };
