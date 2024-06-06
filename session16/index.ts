/*

 */

class Check{

    check1(a:number|string){
        if(typeof(a) === "number"){
            console.log("đây là số" + a);
        }else if(typeof(a) === "string"){
            console.log("đây là chuỗi" + a);
        }else{
            console.log("không hợp lệ");
            
        }
    }
}

let check11 = new Check()
check11.check1(1)


//khai báo arr
let number1:number[] = [5];
let number2:Array<number> = [6]

// //test

// function check1(a:number|number[]):unknown{
//     if(typeof(a) === "number"){
//         return [a]
//     }else if(Array.isArray(a)){
//         return [a[a.length-1]]
//     }else{
//         return []
//     }
// }

// console.log(check1(1));
// console.log(check1([1,2,3,4]));

//Generic

type generic1 = Array<number>;

let generic2 = <T>(param:T):T => {
    return param
};

console.log(generic2(5));

function check1 <T>(a:T){
    if(Array.isArray(a)){
        return typeof(a)
    }else{
        return 
    }
}

console.log(check1(1));
console.log(check1([1,2,3,4]));