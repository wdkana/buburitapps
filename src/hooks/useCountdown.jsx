import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    if (!targetDate) return;

    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate, targetDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const days = checkSingleDateValue(
    Math.floor(countDown / (1000 * 60 * 60 * 24))
  );
  const hours = checkSingleDateValue(
    Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = checkSingleDateValue(
    Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = checkSingleDateValue(
    Math.floor((countDown % (1000 * 60)) / 1000)
  );

  return [days, hours, minutes, seconds];
};

const checkSingleDateValue = (value) => {
  return value.toString().length === 1
    ? `0${value.toString()}`
    : value.toString();
};

export { useCountdown };
