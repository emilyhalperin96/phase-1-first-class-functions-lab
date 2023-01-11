// Code your solution in this file!
//arrow and anonymous functions are the same thing
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//higher order function, is another way of passing a function as an argument
function createFareMultiplier(num) {
    return (fare) => {
        return num * fare
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))
