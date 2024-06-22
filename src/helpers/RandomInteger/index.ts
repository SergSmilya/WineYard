export default function RandomInteger(minValue: number) {
    return Math.floor(Math.random() * (10000 - minValue + 1)) + minValue;
}