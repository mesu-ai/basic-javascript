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

let friendsName = ['reja', 'reka', 'shuvo', 'kamal', 'habibulla', 'sagor']

// call function
const friendName = perfectFriend(friendsName);
console.log(friendName);
