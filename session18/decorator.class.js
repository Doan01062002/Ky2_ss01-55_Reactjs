"use strict";
/*

Bổ sung thay đổi thuộc tính, phương thức cho đối tượng
cú pháp: @
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
//Function decorator để thêm thuộc tính
function DecoratorProperty(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.address = "ha noi";
        }
    };
}
let Student = class Student {
    constructor(userName) {
        this.userName = userName;
    }
};
Student = __decorate([
    DecoratorProperty,
    __metadata("design:paramtypes", [String])
], Student);
let student1 = new Student("minh thư");
console.log(student1);
//closure
function tinhTong() {
    return function (a, b) {
        return a + b;
    };
}
console.log(tinhTong()(1, 2));
