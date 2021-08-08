//problem-4
function perfectFriend(friends) {


    let name = '';

    for (const friend of friends) {

        //check length of element
        if (friend.length == 5) {

            name = friend;
            return name;

        }

    }

}

let friendsName = ['reja', 'reka', 'shuvo', 'kamal', 'habibulla', 'sagor'];

// call function
const friendName = perfectFriend(friendsName);
console.log(friendName);