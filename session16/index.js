"use strict";
/*

 */
class Check {
    check1(a) {
        if (typeof (a) === "number") {
            console.log("đây là số" + a);
        }
        else if (typeof (a) === "string") {
            console.log("đây là chuỗi" + a);
        }
        else {
            console.log("không hợp lệ");
        }
    }
}
let check11 = new Check();
check11.check1(1);
//khai báo arr
let number1 = [5];
let number2 = [6];
let generic2 = (param) => {
    return param;
};
console.log(generic2(5));
function check1(a) {
    if (Array.isArray(a)) {
        return typeof (a);
    }
    else {
        return;
    }
}
console.log(check1(1));
console.log(check1([1, 2, 3, 4]));
