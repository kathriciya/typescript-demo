"use strict";
function getFullName(firstname, surname) {
    return "" + firstname + surname;
}
var getFullNameArrow = function (firstname, surname) {
    return "" + firstname + surname;
};
function getFullNameCheck(firstname, surname) {
    if (typeof firstname !== 'string') {
        throw new Error('!!!');
    }
    return "" + firstname + surname;
}
console.log(getFullNameCheck(true, false));
