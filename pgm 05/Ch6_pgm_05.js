var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours) {
	return callOutCharge + costPerHour * numberOfHours;
};

console.log("$" + totalCost(30, 40, 3));



function totalCost(hours, rate, discount = 0) {
    let total = hours * rate;

    if (discount > 0) {
        total -= discount;
    }
    return total;
}


let costFor12Hours = totalCost(12, 10);
console.log(`The cost for 12 hours of work is $${costFor12Hours}`);


let costFor3HoursWithDiscount = totalCost(3, 50, 20);
console.log(`The total cost after applying a $20 discount for 3 hours is $${costFor3HoursWithDiscount}`); 
