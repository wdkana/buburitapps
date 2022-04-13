import { useEffect, useState } from "react";
import { getPrayerTime } from "../../api/prayerAPI.js";
import { useCountdown } from "../../hooks/useCountdown";
import { combineDateAndTime, afterMomentHour } from "../../helpers/date.js";

import {
  Container,
  Hero,
  HeroWrapper,
  Text,
  Title,
  Timer,
  Wrapper,
} from "./styled";
import styled from "./index.module.css";

const LandingPage = () => {
  const [date, setDate] = useState("");
  const [isAfterMaghrib, setIsAfterMaghrib] = useState(true);
  const [days, hours, minutes, seconds] = useCountdown(date);

  const getTimerCountdown = () => {
    if (isNaN(days)) return "Loading...";

    return `${days}:${hours}:${minutes}:${seconds}`;
  };

  const getTime = async () => {
    try {
      const response = await getPrayerTime("bandung");
      const { Maghrib, Imsak } = response;

      const todayDate = new Date();
      const maghribTimer = combineDateAndTime(todayDate, Maghrib, false);
      const imsakTimer = combineDateAndTime(todayDate, Imsak, true);

      const isTimeAfterMaghrib = afterMomentHour(todayDate, maghribTimer);
      const selectedDate = isTimeAfterMaghrib ? imsakTimer : maghribTimer;

      setIsAfterMaghrib(isAfterMaghrib);
      setDate(selectedDate);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTime();
  }, []);

  return (
    <Container>
      <HeroWrapper>
        <Hero>
          <img
            src="mosque.png"
            width={450}
            alt="mosque"
            style={{ marginTop: "-8em" }}
          />
          <Text>
            <Title>
              Waktu Menjelang {isAfterMaghrib ? "Imsyak" : "Buka Puasa"}
            </Title>
            <Timer>{getTimerCountdown()}</Timer>
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
      <Wrapper />
    </Container>
  );
};

export default LandingPage;
