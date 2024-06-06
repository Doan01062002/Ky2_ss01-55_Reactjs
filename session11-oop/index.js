"use strict";
// Tính kế thừa
class Parent {
    constructor(userName, passWord) {
        this.userName = userName;
        this.passWord = passWord;
    }
    sayHello() {
        console.log("hêllo", this.userName);
    }
}
//class con muốn kế thừa class cha thì bắt buộc phải sử dụng từ khóa extend (kế thừa)
class Child extends Parent {
    constructor(userName, password, address) {
        super(userName, password);
        this.userName = userName;
        this.passWord = password;
        this.address = address;
    }
    sayGoodBye() {
        return console.log("goodbye", this.userName);
    }
}
let child1 = new Child("minh", "123", "hn");
child1.sayHello();
class Child1 extends Child {
    constructor(userName, password, address) {
        super(userName, password, address);
        this.userName = userName;
        this.passWord = password;
        this.address = address;
    }
}
let child11 = new Child1("Hồng", "111", "HN");
child11.sayGoodBye();
