// problem-3
function deliveryCost(quantity) {
    let cost = 0;

    // acceptibility check
    if (quantity < 0) {
        const errorMassage = 'Negative value is not acceptable !';
        return errorMassage;

    }
    else if (typeof (quantity) != 'number') {
        const errorMassage = 'Input Correct Value !';
        return errorMassage;

    }

    //deliverycost calculation

    //1st 100 deliverycost
    else if (quantity <= 100) {
        cost = quantity * 100;
        return cost;

    }
    //2nd 100 deliverycost
    else if (quantity <= 200) {
        cost = 100 * 100 + (quantity - 100) * 80;
        return cost;

    }
    //upto 200 deliverycost
    else if (quantity > 200) {
        cost = 100 * 100 + 100 * 80 + (quantity - 200) * 50;
        return cost;


    }


}

let quantity = 220;

//call function
const totalCost = deliveryCost(quantity);
console.log(totalCost);