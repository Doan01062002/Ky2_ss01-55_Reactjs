/*
trang chí cho phương thức
phương thức và hàm
-Hàm là những function tự đinh nghĩa
-Phương thức dùng trong đối tượng hoặc lớp
+> để dùng decorator cho function thì phải đặt @ đặt trước tên phương thức
*/

//tạo decor function phải có 3 đối số

function decorMethod(target:any, propertyKey:string, descriptor:PropertyDescriptor){
    console.log(11111111, target);
    console.log(11111111, propertyKey);
    console.log(11111111, descriptor);

    //trong descriptor có chứa 1 đối tượng có chứa 1 đối tượng có chứa thuộc tín value
    //nhờ có value thì mới có decor cho method được

    descriptor.value = function (a:number, b:number):number{
        return (a+b)*2
    }
    
}

class Person{
    //viết phương thức cho class test
    //tạo function tính tổng
    @decorMethod
    sum(a:number, b:number){
        return a+b
    }
}

let sum1 = new Person()

console.log(sum1.sum(1,2));

/*
Decorator: + với accessor
           + với param
           + với property
 */
