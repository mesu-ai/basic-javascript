
//problem-1
function seerToMon(seer) {

    //check the input is acceptable or not
    if (seer < 0) {
        const errorMassage = 'Negative value is not acceptable !';
        return errorMassage;

    }

    else if (typeof (seer) != 'number') {
        const errorMassage = 'Input Correct Value !';
        return errorMassage;

    }

    //convert seer to mon
    const mon = seer / 40;
    return mon;
}


let seer = 100;
//call function
const mon = seerToMon(seer);
console.log(mon);


/* ************************************************** */

//problem-2
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {

    //acceptibility check
    if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        const massage = "Negative quantity is not acceptable";
        return massage;
    }
    else if (typeof (shirtQuantity) != 'number' || typeof (pantQuantity) != 'number' || typeof (shoeQuantity) != 'number') {
        const massage = "Input correct value !";
        return massage;

    }

    //unit price
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;

    //calculation
    const shirtPrice = perShirtPrice * shirtQuantity;
    const pantPrice = perPantPrice * pantQuantity;
    const shoePrice = perShoePrice * shoeQuantity;

    //total price calculation
    const totalPrice = shirtPrice + pantPrice + shoePrice;
    return totalPrice;

}


let shirtQuantity = 1;
let pantQuantity = 1;
let shoeQuantity = 1;

//call function
const totalPrice = totalSales(shirtQuantity, pantQuantity, shoeQuantity);
console.log(totalPrice);


/* ************************************************** */

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

let quantity = 210;

//call function
const totalCost = deliveryCost(quantity);
console.log(totalCost);


/* ************************************************** */


//problem-4
function perfectFriend(friends) {

    //check object validity
    if (typeof (friends) != 'object') {
        errorMassage = 'Input valid name object !';
        return errorMassage;

    }

    let newName = [];
    for (const friend of friends) {

        //check string or not
        if (typeof (friend) != 'string') {
            errorMassage = 'Input valid name !';
            return errorMassage;
        }

        //check length of element
        else if (friend.length == 5) {
            newName.push(friend);
        }
    }

    return newName[0];
}

let friendsName = ['reja', 'reka', 'shuvo', 'kamal', 'habibulla', 'sagor'];

// call function
const friendName = perfectFriend(friendsName);
console.log(friendName);
