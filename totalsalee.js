//problem-2
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {

    //acceptibility check
    if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        const massage = "Negative quantity is not acceptable";
        return massage;
    }
    if (typeof (shirtQuantity) != 'number' || typeof (pantQuantity) != 'number' || typeof (shoeQuantity) != 'number') {
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
