interface Class1 {
  name: string;
  getName(): void;
}

interface Class2 {
  age: number;
  getAge(): void;
}

class MultipleInheritance implements Class1, Class2 {
  name: string = "shuvo";
  age: number = 24;

  getName(): void {
    console.log(this.name);
  }

  getAge(): void {
    console.log(this.age);
  }
}

/**
 * Multiple inheritance is such inheritance where we can inherit a child class from mulitple parent classes
 * directly we can't use in typescript we can use interface to implement mulitple inheritance.
 * How - we can declare interfaces then we can implements them by using commas
 */
