"use strict";
/*
extend trong typescript
 */
function merge(param1, param2) {
    return Object.assign(param1, param2);
}
console.log(merge({ name: "hoa" }, { age: 15 }));
//toán tử ?? nullish
let result1 = null !== null && null !== void 0 ? null : 5;
console.log(result1); //nếu là null hoặc underfined thì lấy 5 con nếu ko phải null hoặc underfined thì lấy phần tử đó
//? optional chain
function add(a, b) {
    return b ? a + b : a;
}
console.log(add(1, 3));
console.log(add(1));
//
function test2(param) {
    return Object.assign(Object.assign({}, param), { fullName: param.firstName + param.lastName });
}
console.log(test2({ firstName: "doan", lastName: "văn" }));
//đệ quy là hàm gọi lại chính nó lưu ý nên tránh hàm chạy không có điểm dừng
//dùng đệ quy tính tổng từ 1 -10
function deQuy(a) {
    if (a == 1)
        return 1;
    return a + deQuy(--a);
}
console.log(deQuy(5));
