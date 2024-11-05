// abstract class can be done using interface and abstract keyword
abstract class Vehicle {
  abstract startCar(): void;
  abstract speedCar(): void;
}

class Car implements Vehicle {
  startCar(): void {
    console.log("Start the car.");
  }
  speedCar(): void {
    console.log("The speed of the car.");
  }
}

interface NewVehicle {
  getSpeed(): void;
  getStatus(): void;
  newStatus(): void;
}

class NewCar implements NewVehicle {
  getSpeed(): void {
    console.log("Get the speed of car.");
  }
  getStatus(): void {
    console.log("Get the status of the vehicle.");
  }
  newStatus(): void {
    console.log("Set the new Status of the vehicle.");
  }
}
