// Single Inheritance
class A {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class AA {
  age: number;
  constructor(age: number) {
    this.age = age;
  }
}

// Single inheritance example
class B extends A {
  getInfo(): void {
    console.log(this.name);
  }
}
