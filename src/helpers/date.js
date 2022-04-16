const combineDateAndTime = (date, time, isPlusDay) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = isPlusDay ? date.getDate() + 1 : date.getDate();

  const datec = `${year}-${month}-${day} ${time}`;
  const combined = new Date(datec);

  return combined;
};

const afterMomentHour = (selectedDate, momentDate) => {
  const selectedHour = selectedDate.getTime();
  const momentHour = momentDate.getTime();

  return selectedHour > momentHour;
};

export { combineDateAndTime, afterMomentHour };
