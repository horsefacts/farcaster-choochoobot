const MESSAGES = ["All Aboard!", "Choo Choo!"];
const ENGINE = "🚂";
const CARS = ["🚃", "🚋"];
const GUST = "💨";

function makeTrain() {
  const cars = Array.from({ length: Math.floor(Math.random() * 6) + 1 }, () => {
    return CARS[Math.floor(Math.random() * CARS.length)];
  });
  if (Math.random() < 0.33) {
    cars.push(GUST);
  }
  const train = ENGINE + cars.join("");
  const padded =
    " ".repeat(Math.floor((Math.random() * (24 - train.length)) / 2)) + train;
  const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
  return `${message}\n${padded}`;
}

export default makeTrain;
