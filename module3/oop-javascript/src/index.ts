class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getPersonName() {
    return this.name;
  }
}



const newPerson = new Person("shuvo");
console.log(newPerson.getPersonName());
