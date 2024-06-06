"use strict";
// 1. array
let student = ["hoa",]; //đặt thêm [] sau string thì tất cả dữ liệu trong arr phải là string
let numbers = [5, 6, 7]; // <...> trong arr phải là kiểu dữ liệu trong <>
//2. Object
let cat = {
    name: "tomy",
    color: "orange"
};
//3. enum
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
})(Role || (Role = {}));
let person = {
    name: "minh",
    role: 0
};
//3. void
function sayHello() {
    console.log("xin chào ptit");
}
sayHello();
function sum(a, b) {
    return a + b;
}
sum(2, 5);
//4. Unknowns: không biết chưa biết, giống any nhưng chặt chẽ hơn khi sử dụng phải kiểm tra
function typeAny(userName) {
    if (typeof userName == "string") {
        console.log(userName.toUpperCase());
    }
    else {
        console.log("không phải string");
    }
}
typeAny(5);
//5. never thường trong vòng lặp vô tận, không có điểm kết thúc
