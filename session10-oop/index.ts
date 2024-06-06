// Các cách khởi tạo đối tượng
// 1. let, var , const_ tên đối tượng ={}
// 2. dùng new object()
/*
3. tạo hàm contructer function Student (name){
    this.name = name
}

let std1 = new Student("minh");
đây là tạo đối tượng

4. Tạo class

class Person{
    contructer(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address
    }
}
let std1 = new Person("hoa",20,"ha noi");
đây mới là tạo đối tượng thông qua từ khóa new;

-một đối tượng sẽ gồm 2 thành phần chính:
    +thuộc tính (property)
    +phương thức (hành vi method)

OOP:gồm 4 tính chất
1.tính đóng gói (encapsulation)
+che giấu đi thông tin đối tượng nhằm giúp cho các truy cập đến đối tượng được bảo mật hơn
2.tính trừu tượng (abstraction)
3.tính kế thừa (inheritance)
4.tính đa hình (polymorphism)
 */

class Person{
    name:string//đây là kiểu dữ liệu mặc định phạm vi truy cập là public
    private age:number //nếu để private thì sẽ không thể truy cập bên ngoài được để truy cập được thì thông qua phượng thức get
    firstName:string
    lastName:string
    private address:string
    constructor(name:string, age:number, firstName:string, lastName:string, address:string){//trong (là giá trị truyền vào)
        this.name = name;
        this.age = age;
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
    }
    showInfor():void{
        console.log("xin chào", this.firstName +" "+ this.lastName + " "+ this.name);
    }

    showName():void{
        console.log(this.name);
    }

    getAge():number{
        return this.age
    }

    setAge(age1:number){
        this.age = age1
    }

    get address1():string{ //getter
        return this.address
    }

    set address1(address:string){
        this.address = address
    }

}

let std1 = new Person("Đoan",21,"Nguyen","Văn","HN")//sdt1 được gọi là một instance của một class (đối tượng)
console.log(std1);

//gọi phương thức
std1.showInfor();


// Tính Đóng Gói: encapsulation
// access modifier: phạm vi truy cập
/*
1. public
2. private
3. proceted liên quan đến kế thừa
    -khi class con kế thừa class cha thì class con sẽ có những phương thức và thuộc tính của class cha
    -khi phạm vi truy cập proceted thì class con không thể truy cập được thuộc tính của class cha
 */

std1.name = "Đông"
std1.showName();

console.log(std1.getAge());

std1.setAge(22);
console.log(std1.getAge());

console.log(std1.address1);

std1.address1 = "sai gon";
console.log(std1.address1);
