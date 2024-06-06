// Tính kế thừa

class Parent{
    userName:string
    passWord:string

    constructor(userName:string, passWord:string){
        this.userName = userName
        this.passWord =passWord
    }

    sayHello():void{
        console.log("hêllo", this.userName);
        
    }
}

//class con muốn kế thừa class cha thì bắt buộc phải sử dụng từ khóa extend (kế thừa)

class Child extends Parent{
    address:string;
    constructor(userName:string, password:string, address:string){
        super(userName,password)//dùng  từ khóa super để lấy từ cha
        this.userName = userName
        this.passWord = password
        this.address =address
    }

    sayGoodBye(){
        console.log("goodbye", this.userName);
        
    }
}

let child1 = new Child("minh", "123", "hn")
child1.sayHello();

class Child1 extends Child{
    constructor(userName:string, password:string, address:string){
        super(userName,password,address)
        this.userName = userName
        this.passWord = password
        this.address = address
    }

    //overrite ghi đè phương thức
    sayGoodBye(): void {
        console.log("không tạm biệt");
        
    }
}

let child11 = new Child1("Hồng", "111", "HN")

child11.sayGoodBye(); 