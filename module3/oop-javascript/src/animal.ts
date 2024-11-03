class Animal {
  constructor(public name: string, public species: string) {}

  makeSound() {
    console.log(`I am making sound.`);
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeBark() {
    console.log("Dog is barking!");
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMeaw() {
    console.log("Cat is meawing!");
  }
}

// creating instance
const dog = new Dog("Dog", "DOG");
const cat = new Cat("Cat", "CAT");

const isDog = (animal: Animal): animal is Dog => animal instanceof Dog;
const isCat = (animal: Animal): animal is Cat => animal instanceof Dog;

const getAnimal = (animal: Animal) => {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
};

getAnimal(dog);
getAnimal(cat);
