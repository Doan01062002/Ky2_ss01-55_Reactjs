/*
extend trong typescript
 */

function merge<T extends object,U extends object>(param1:T,param2:U):T&U{
    return Object.assign(param1,param2);
}

console.log(merge({name:"hoa"},{age:15}));

//toán tử ?? nullish

let result1 = null??5
console.log(result1);//nếu là null hoặc underfined thì lấy 5 con nếu ko phải null hoặc underfined thì lấy phần tử đó

//? optional chain

function add(a:number,b?:number):number{
    return b?a + b:a
}

console.log(add(1,3));
console.log(add(1));

//khi khai báo kiểu dữ liệu type, interface

/*
type: +có thể dùng union cà intersection
      +không kế thừa được
      +không thể implement bởi class
      +thường khai báo kiểu dữ liệu
interface: +có thể kế thừa
           +có thể implement bởi class
           +thường khai báo các thuộc tính của phương thức
 */

type A = {
    name:string
}

interface A1{
    name:string
}

//
function test2<T extends {firstName:string, lastName:string}>(param:T):T{
    return {...param, fullName:param.firstName + param.lastName}
}

console.log(test2({firstName:"doan", lastName:"văn"}));

//đệ quy là hàm gọi lại chính nó lưu ý nên tránh hàm chạy không có điểm dừng
//dùng đệ quy tính tổng từ 1 -10

function deQuy(a:number):number{
    if(a==1)
        return 1
    return a + deQuy(--a)
}

console.log(deQuy(5));
