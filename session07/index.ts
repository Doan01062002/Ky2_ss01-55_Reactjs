// 1. array

let student: string[] = ["hoa",]; //đặt thêm [] sau string thì tất cả dữ liệu trong arr phải là string

let numbers: Array<number> = [5,6,7]// <...> trong arr phải là kiểu dữ liệu trong <>

//2. Object

let cat:{name:string, color:string} = {
    name:"tomy",
    color: "orange"
}

//3. enum

enum Role{
    admin,
    user,
}

let person:{name:string, role:Role.admin} = {
    name:"minh",
    role: 0
}

//3. void

function sayHello():void{
    console.log("xin chào ptit")
}

sayHello()

function sum(a:number,b:number):number{
    return a+b;
}

sum(2,5)

//4. Unknowns: không biết chưa biết, giống any nhưng chặt chẽ hơn khi sử dụng phải kiểm tra

function typeAny(userName:unknown):void{
    if(typeof userName == "string"){
        console.log(userName.toUpperCase());
    }else{
        console.log("không phải string")
    }
}

typeAny(5);

//5. never thường trong vòng lặp vô tận, không có điểm kết thúc
