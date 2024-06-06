function MyDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log("check");
}

class MyClass {
  myProperty: string;

  constructor(myProperty:string){
    this.myProperty = myProperty
  }

  @MyDecorator
  get Property(){
    return this.myProperty;
  }

  set Property(value: string) {
    this.myProperty = value;
  }
}

const myInstance = new MyClass("hi");
console.log(myInstance.Property);

myInstance.Property = "Hello";
console.log(myInstance.Property); // Output: Hello