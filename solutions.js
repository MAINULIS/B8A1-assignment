const multiplyValue = (value, multiplier) => {
    if (!multiplier) {
        return value * 2;
    }
    return value * multiplier;
};
// console.log(multiplyValue(0));
const processInput = (value) => {
    if (typeof value == "string") {
        return value.trim().toLocaleLowerCase();
    }
    else if (typeof value == "number") {
        return value * 10;
    }
    else {
        return value ? "Active" : "Inactive";
    }
};
// console.log(processInput(false));
const formatCoordinate = (coordinate) => {
    return `Location: ${coordinate[2]} (${coordinate[0]} ${coordinate[1]})`;
};
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
const concatenateArrays = (...arrays) => {
    return arrays.reduce((acc, current) => [...acc, ...current], []);
};
export {};
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
