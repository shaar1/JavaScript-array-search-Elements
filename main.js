/* global console, alert, prompt*/
/*
var friends = [
    "Hassan",
    "Hosam",
    "Mohamad",
    "Mahmoud",
    "Ali",
    "Yara",
    "Toni",
    "Antoanit"
];

var specialFriends = friends.indexOf("Ali");

console.log(specialFriends);
*/
/*
var friends = [
    "Hassan",
    "Hosam",
    "Mohamad",
    "Mahmoud",
    "Ali",
    "Yara",
    "Toni",
    "Antoanit"
];

var specialFriends = friends.indexOf("Ali");

console.log(specialFriends);

console.log(friends[specialFriends]);

document.getElementById("all").innerHTML = 

" My Friends Are: " + friends;
*/

var friends = [
    "Hassan",
    "Hosam",
    "Mohamad",
    "Mahmoud",
    "Ali",
    "Yara",
    "Toni",
    "Antoanit"
];

var specialFriends = friends.indexOf("Ali");

console.log(specialFriends);

console.log(friends[specialFriends]);

document.getElementById("all").innerHTML = 

" My Friends Are: " + friends;

document.getElementById("special").innerHTML = 

" My Special Friends Is: " + "<span style='color:#F00'>" + friends[specialFriends] + "</span> ;"