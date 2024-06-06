"use strict";
/*
trang chí cho phương thức
phương thức và hàm
-Hàm là những function tự đinh nghĩa
-Phương thức dùng trong đối tượng hoặc lớp
+> để dùng decorator cho function thì phải đặt @ đặt trước tên phương thức
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//tạo decor function phải có 3 đối số
function decorMethod(target, propertyKey, descriptor) {
    console.log(11111111, target);
    console.log(11111111, propertyKey);
    console.log(11111111, descriptor);
    //trong descriptor có chứa 1 đối tượng có chứa 1 đối tượng có chứa thuộc tín value
    //nhờ có value thì mới có decor cho method được
    descriptor.value = function (a, b) {
        return (a + b) * 2;
    };
}
class Person {
    //viết phương thức cho class test
    //tạo function tính tổng
    sum(a, b) {
        return a + b;
    }
}
__decorate([
    decorMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Person.prototype, "sum", null);
let sum1 = new Person();
console.log(sum1.sum(1, 2));
/*
Decorator: + với accessor
           + với param
           + với property
 */
