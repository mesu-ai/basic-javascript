function deliveryCost(quantity) {
    let cost1 = 0;
    let cost2 = 0;
    let cost3 = 0;
    for (let i = 1; i <= quantity; i++) {

        switch (true) {
            case i <= 10:

                console.log(i);


                cost1 = 2 * i;

                //console.log(cost1);

                break;

            case i <= 20:
                cost2 = 3 * i;
                //console.log(cost2);
                break;

            case i <= 30:
                cost3 = 4 * i;
                // console.log(cost3);
                break;


            default:
                break;
        }

        const sum = cost1 + cost2 + cost3;

        // console.log(sum);



    }



}

deliveryCost(25);

// deliveryCost = 100; 1 - 100
// deliveryCost = 80; 101 - 200
// deliveryCost = 50; 201 - end