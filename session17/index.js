"use strict";
function revese(param) {
    return param.reverse();
}
console.log(revese([1, 2, 3, 4, 5]));
console.log(revese(["hoa", "hong"]));
//vd2: viết một function trả về một mảng chứa 2 phần tử
function test(param1, param2) {
    return [param1, param2];
}
console.log(test(5, 6));
console.log(test(5, "doan"));
