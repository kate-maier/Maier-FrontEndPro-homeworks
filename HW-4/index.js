const SEC_IN_MINUTE = 60;
const MIN_IN_HOUR = 60;
let amountHours = prompt("Please, enter amount of hours");
let secInAmountHours = SEC_IN_MINUTE * MIN_IN_HOUR * amountHours;
alert("Amount of seconds in " + amountHours + " hours: " + secInAmountHours);