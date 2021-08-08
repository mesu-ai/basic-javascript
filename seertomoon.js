
//problem-1
function seerToMon(seer) {

    //check the input is acceptable or not
    if (seer < 0) {
        const error = 'Negative value is not acceptable !';
        return error;

    }

    if (typeof (seer) != 'number') {
        const error = 'Input Correct Value !';
        return error;

    }

    //convert seer to mon
    const mon = seer / 40;
    return mon;
}


let seer = 40;
//call function
const mon = seerToMon(seer);
console.log(mon);

