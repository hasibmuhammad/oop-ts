class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`The ${this.species} says ${this.sound}`);
  }
}

const dog = new Animal("Picku", "dog", "Ghew Ghew");
const cat = new Animal("Chiku", "Cat", "Meaw Meaw");

dog.makeSound();
cat.makeSound();
