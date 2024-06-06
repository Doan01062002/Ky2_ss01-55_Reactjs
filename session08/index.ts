// 1. type union kiểu kết hợp

let myVariable: number | string;
myVariable = 10; // hợp lệ
myVariable = "Hello"; // hợp lệ

//2. tuple

let arr1: (number | string) [] = [5,"hoa"];//kiểu union
let arr2: [number,string] = [5,"hoa"];// phải bắt đầu bằng number

//alias

type Test = string | number | null |undefined;

let test1: Test = "";

//4. intersection type khi khai báo hai thuộc tính trùng nhau bắt buộc phải cùng kiểu dữ liệu

type A ={
    name:string
}

type B ={
    address: string,
    id:number
}

type C = A&B;
let c1:C={
    name:"hoa",
    address:"hn",
    id:5
}