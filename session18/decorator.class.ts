/*

Bổ sung thay đổi thuộc tính, phương thức cho đối tượng
cú pháp: @
 */

//Function decorator để thêm thuộc tính

function DecoratorProperty<T extends new (...args: any[]) => {}>(constructor: T) {
  return class extends constructor {
    address = "ha noi";
  };
}

@DecoratorProperty
class Student {
  userName: string;

  constructor(userName: string) {
    this.userName = userName;
  }
}

let student1 = new Student("minh thư");

console.log(student1);


//closure

function tinhTong(){
    return function(a:number, b:number):number{
        return a+b
    }
}

console.log(tinhTong()(1,2));
