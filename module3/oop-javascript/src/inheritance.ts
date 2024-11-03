class Personn {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numOffHours: number) {
    console.log(`${this.name} will sleep for ${numOffHours}`);
  }
}

// Inherited class
class Student extends Personn {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

// student object
const student1 = new Student("Mr. Student", 20, "Uganda");
student1.getSleep(3);

// Inherited class
class Teacher extends Personn {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  takeClass(numOfClass: number) {
    console.log(`${this.name} will take class for ${numOfClass} hours`);
  }
}

// teacher object
const teacher1 = new Teacher(
  "Mr. Teacher",
  40,
  "Dhaka, Bangladesh",
  "Professor"
);
teacher1.getSleep(3);
