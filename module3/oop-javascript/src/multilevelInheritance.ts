// example of muiti level inheritance

class LivingBeing {
  isAlive: boolean = true;
}
class AAnimal extends LivingBeing {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
}

class AnotherAnimal extends AAnimal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
}

class MultilevelInheritance extends AnotherAnimal {
  mulitlevelInheritance: boolean = true;
  constructor(name: string, breed: string) {
    super(name, breed);
  }
}
