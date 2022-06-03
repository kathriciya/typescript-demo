"use strict";
function getFullName(userEntity) {
    return userEntity.firstname + " " + userEntity.surname;
}
var user = {
    firstname: 'Иван',
    surname: 'Иванов',
    city: 'Moscow',
    age: 33,
};
console.log(getFullName(user));
