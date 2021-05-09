import { AnimalType } from "types/custom";

export default class Pet {
  name: string;
  age: number;
  animalType: AnimalType;

  constructor(aPet: Pet) {
    this.name = aPet.name;
    this.age = aPet.age;
    this.animalType = aPet.animalType;
  }
}
