import { useEffect, useState } from "react";
import { getCity, getPrayerTime } from "../../api/prayerAPI.js";
import { useCountdown } from "../../hooks/useCountdown";
import { combineDateAndTime, afterMomentHour } from "../../helpers/date.js";

import {
  Container,
  Hero,
  HeroWrapper,
  Text,
  Title,
  Timer,
  ProductWrapper,
  ProductTitle,
  ProductList,
  ProductBox,
  ProductButton,
} from "./styled";
import styled from "./index.module.css";
import { checkSingleDateValue } from "../../helpers/string.js";

const LIST_CITY_ID = ["1301", "1709", "2622", "0228", "3307", "2310", "1505"];

const LandingPage = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [listCity, setListCity] = useState([]);
  const [date, setDate] = useState("");
  const [isAfterMaghrib, setIsAfterMaghrib] = useState(true);
  const [days, hours, minutes, seconds] = useCountdown(date);

  const getTimerCountdown = () => {
    if (isNaN(days)) return "Loading...";

    return `${days}:${hours}:${minutes}:${seconds}`;
  };

  const getTime = async () => {
    try {
      const todayDate = new Date();
      const todayYear = checkSingleDateValue(todayDate.getFullYear());
      const todayMonth = checkSingleDateValue(todayDate.getMonth() + 1);
      const todayDay = checkSingleDateValue(todayDate.getDate());
      const selectedTodayDate = `${todayDay}/${todayMonth}/${todayYear}`;

      const response = await getPrayerTime(selectedCity, todayYear, todayMonth);
      const getSelectedResponseDate = response.find(
        (x) => x.tanggal.split(", ")[1] === selectedTodayDate
      );
      const { maghrib, imsak } = getSelectedResponseDate;

      const maghribTimer = combineDateAndTime(todayDate, maghrib, false);
      const imsakTimer = combineDateAndTime(todayDate, imsak, true);

      const isTimeAfterMaghrib = afterMomentHour(todayDate, maghribTimer);
      const selectedDate = isTimeAfterMaghrib ? imsakTimer : maghribTimer;

      setIsAfterMaghrib(isAfterMaghrib);
      setDate(selectedDate);
    } catch (err) {
      console.error(err);
    }
  };

  const getListCity = async () => {
    try {
      const response = await getCity();
      const selectedListCity = response.filter((city) =>
        LIST_CITY_ID.includes(city.id)
      );
      setSelectedCity(selectedListCity[0].id);
      setListCity(selectedListCity);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeCity = (e) => {
    setSelectedCity(e.target.value);
  };

  useEffect(() => {
    if (selectedCity) getTime();
  }, [selectedCity]);

  useEffect(() => {
    getListCity();
  }, []);

  return (
    <Container>
      <HeroWrapper>
        <Hero>
          <img
            src="mosque.png"
            alt="mosque"
            className={styled["img"]}
            width="460"
          />
          <Text>
            <Title>
              Waktu Menjelang {!isAfterMaghrib ? "Buka Puasa" : "Imsak"}
            </Title>
            <Timer>{getTimerCountdown()}</Timer>
            <div className={`${styled.select}`}>
              <select
                className={`${styled["select-tag"]}`}
                onChange={handleChangeCity}>
                {listCity.map((city, id) => {
                  return (
                    <option value={city.id} key={id}>
                      {city.lokasi}
                    </option>
                  );
                })}
              </select>
            </div>
          </Text>
        </Hero>

        <div className={styled["custom-shape-divider-bottom-1649844128"]}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styled["shape-fill"]}></path>
          </svg>
        </div>
      </HeroWrapper>
      <ProductWrapper>
        <ProductTitle>List Product</ProductTitle>
        <ProductList>
          <ProductBox></ProductBox>
          <ProductBox></ProductBox>
          <ProductBox></ProductBox>
        </ProductList>
        <ProductButton>See Full List</ProductButton>
      </ProductWrapper>
    </Container>
  );
};

export default LandingPage;
