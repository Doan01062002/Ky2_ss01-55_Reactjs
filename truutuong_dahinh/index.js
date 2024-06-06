"use strict";
// /*
// 1. Tính trừu tượng (Abstraction):
//     + Trong TypeScript, bạn có thể tạo lớp trừu tượng (abstract class) bằng cách sử dụng từ khóa abstract. Một lớp trừu tượng không thể được khởi tạo trực tiếp, mà chỉ có thể được kế thừa bởi các lớp con.
//     + Một lớp trừu tượng có thể chứa các thuộc tính và phương thức như bình thường, nhưng nó cũng có thể khai báo các phương thức trừu tượng (abstract methods). Các phương thức trừu tượng không có thân hàm và chỉ định các hợp đồng mà các lớp con cần triển khai.
//     + Một lớp con kế thừa từ lớp trừu tượng phải triển khai tất cả các phương thức trừu tượng được khai báo trong lớp trừu tượng, nếu không TypeScript sẽ cảnh báo lỗi.
//  */
//     abstract class Animal {
//         abstract makeSound(a:number, b:string): void;
//         eat(): void {
//           console.log("Eating...");
//         }
//       }
//       class Cat extends Animal {
//         makeSound(a:number, b:string): void {
//           console.log("Meow!", a, b);
//         }
//       }
//       const myCat: Animal = new Cat();
//       myCat.makeSound(1,"doan"); // Output: Meow!
//       myCat.eat(); // Output: Eating...
//       //Trong ví dụ trên, lớp Animal là một lớp trừu tượng với một phương thức trừu tượng makeSound và một phương thức không phải trừu tượng eat. Lớp Cat kế thừa từ Animal và triển khai phương thức makeSound. Đối tượng myCat được tạo ra từ lớp Cat và có thể gọi cả phương thức makeSound và eat.
/*
2. Tính đa hình (Polymorphism):

    + Có 2 cách để triển khai tính đa hình: kế thừa hoặc giao diện

      -kế thừa: + extends được sử dụng để khai báo rằng một lớp kế thừa (extends) từ một lớp khác.
                + Khi một lớp kế thừa từ một lớp khác, nó kế thừa các thuộc tính và phương thức của lớp đó và có thể mở rộng hoặc ghi đè chúng nếu cần.
                + Một lớp chỉ có thể kế thừa từ một lớp duy nhất. TypeScript không hỗ trợ đa kế thừa lớp.

      -giao diện: + implements được sử dụng để khai báo rằng một lớp triển khai (implements) một giao diện hoặc một lớp khác.
                  + Khi một lớp triển khai một giao diện, nó phải triển khai (implement) tất cả các phương thức và thuộc tính được định nghĩa trong giao diện đó.
                  + Khi một lớp triển khai một lớp khác, nó kế thừa các thuộc tính và phương thức của lớp đó và có thể mở rộng hoặc ghi đè chúng nếu cần.
*/
// kế thừa
class Animal {
    constructor(cat) {
        this.cat = cat;
    }
    makeSound() {
        console.log(this.cat);
    }
}
class Dog extends Animal {
    constructor(cat) {
        super(cat);
    }
    makeSound() {
        console.log(this.cat);
    }
}
let animal1 = new Animal("meomeo");
let dog1 = new Dog("gâu");
animal1.makeSound();
dog1.makeSound();
//giao diện có tính đa kế thừa
class Printable {
    print(a) {
        return a;
    }
}
class Loggable {
    log() { }
}
class Documents {
    print(a) {
        return a;
    }
    log() {
        console.log("Logging document...");
    }
}
let document1 = new Documents();
document1.log(); // Output: "Logging document..."
console.log(document1.print(1)); // Output: 1
/*
Từ khóa extends không thể thay thế bằng từ khóa implements, và ngược lại. Chúng có ý nghĩa và cách hoạt động khác nhau:
  + extends: Được sử dụng để kế thừa từ một lớp cha. Lớp con sẽ kế thừa các thuộc tính và phương thức từ lớp cha. Một lớp con chỉ có thể kế thừa từ một lớp cha duy nhất, và nó được sử dụng để tạo mối quan hệ "is-a" (là một) giữa lớp con và lớp cha.
  + implements: Được sử dụng để triển khai một giao diện. Một lớp có thể triển khai nhiều giao diện, và nó phải triển khai tất cả các phương thức và thuộc tính được định nghĩa trong các giao diện đó. Giao diện chỉ định nghĩa các phương thức và thuộc tính mà lớp triển khai phải có, và nó được sử dụng để tạo mối quan hệ "has-a" (có một) giữa lớp và giao diện.
 */ 
