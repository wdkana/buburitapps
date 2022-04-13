const checkSingleDateValue = (value) => {
  return value.toString().length === 1
    ? `0${value.toString()}`
    : value.toString();
};

export { checkSingleDateValue };
