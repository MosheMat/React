export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function randomNumber(max) {
    return Math.floor(Math.random() * max);
}
