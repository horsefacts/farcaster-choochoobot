const MESSAGES = ["All Aboard!", "Choo Choo!"];
const ENGINE = "🚂";
const CARS = ["🚃", "🚋"];
const GUST = "💨";

function getRandomElement<T>(array: T[]): T {
    return array[getRandomInt(array.length)];
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

function makeTrain() {
    const length = getRandomInt(7);
    const cars = Array.from({ length }, () => getRandomElement(CARS));
    if (Math.random() < 0.33) {
        cars.push(GUST);
    }
    const train = ENGINE + cars.join("");
    const padding = " ".repeat(getRandomInt(24 - train.length) / 2);
    const message = getRandomElement(MESSAGES);
    return `${message}\n${padding}${train}`;
}

export default makeTrain;
